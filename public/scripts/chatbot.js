// Variables globales des éléments DOM
const info = document.getElementById("info");
const boutonChat = document.getElementById("bouton-chat");
const boutonChatClose = document.getElementById("bouton-chat-close");
const infoClose = document.getElementById("info-close");
const chat = document.getElementById("chat");
const message = document.getElementById("message");
const historique = document.getElementById("historique");
const form = document.getElementById("form");
const envoyer = document.getElementById("envoyer");
const boutonMicro = document.getElementById("bouton-micro");
const voiceNotification = document.getElementById("voice-notification");

// --- GESTION DE L'ÉTAT ---
// Remplacement de 'isLoading' par des variables spécifiques pour plus de clarté.
let isSendingMessage = false;
let isTranscribing = false;

// Variables pour l'enregistrement vocal
let typingTimer;
let isRecording = false;
let mediaRecorder;
let audioChunks = [];

// --- VARIABLES POUR ASSEMBLYAI ---
// ATTENTION : Exposer votre clé API côté client est un risque de sécurité majeur.
// C'est acceptable pour un projet de test local, mais ne le faites JAMAIS sur un site en production.
const assemblyAIApiKey = "bf78aa05859d4aea9a7f4f1bbc4a47f9";
const assemblyAIBaseUrl = "https://api.assemblyai.com";

// Masquer l'info après 10 secondes
setTimeout(() => {
  info.classList.add("hidden");
}, 10000);

// Fermer l'info manuellement
infoClose.onclick = () => {
  info.classList.add("hidden");
};

// Toggle du chat
boutonChat.onclick = () => {
  chat.classList.toggle("hidden");
};

boutonChatClose.onclick = () => {
  chat.classList.add("hidden");
};

// Animation du bouton flottant pendant la saisie
message.addEventListener("input", () => {
  boutonChat.classList.add("typing");
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    boutonChat.classList.remove("typing");
  }, 1000);
});

message.addEventListener("blur", () => {
  clearTimeout(typingTimer);
  boutonChat.classList.remove("typing");
});

// --- GESTION DU BOUTON MICRO AVEC ASSEMBLYAI ---
boutonMicro.addEventListener("click", async () => {
  // Empêcher une nouvelle action si une autre est déjà en cours
  if (isSendingMessage || isTranscribing) return;

  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        stream.getTracks().forEach((track) => track.stop());
        await transcribeAudio(audioBlob);
      };

      mediaRecorder.start();
      isRecording = true;
      boutonMicro.classList.add("recording");
      voiceNotification.classList.add("show");
    } catch (error) {
      console.error("Erreur d'accès au microphone:", error);
      addMessage(
        "Impossible d'accéder au microphone. Veuillez vérifier les permissions.",
        "error",
      );
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    boutonMicro.classList.remove("recording");
    voiceNotification.classList.remove("show");
  }
});

// --- FONCTION POUR LA TRANSCRIPTION AVEC ASSEMBLYAI ---
async function transcribeAudio(audioBlob) {
  isTranscribing = true;
  envoyer.disabled = true;
  boutonMicro.disabled = true;
  showLoading();

  try {
    // ÉTAPE 1: Uploader le fichier audio
    const uploadResponse = await fetch(`${assemblyAIBaseUrl}/v2/upload`, {
      method: "POST",
      headers: { authorization: assemblyAIApiKey },
      body: audioBlob,
    });
    const uploadData = await uploadResponse.json();
    const audioUrl = uploadData.upload_url;
    if (!audioUrl) throw new Error("Échec de l'upload de l'audio.");

    // ÉTAPE 2: Demander la transcription
    const transcriptResponse = await fetch(
      `${assemblyAIBaseUrl}/v2/transcript`,
      {
        method: "POST",
        headers: {
          authorization: assemblyAIApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ audio_url: audioUrl, language_code: "fr" }),
      },
    );
    const transcriptData = await transcriptResponse.json();
    const transcriptId = transcriptData.id;

    // ÉTAPE 3: Sonder (poll) pour le résultat
    const pollingEndpoint = `${assemblyAIBaseUrl}/v2/transcript/${transcriptId}`;
    while (true) {
      const pollingResponse = await fetch(pollingEndpoint, {
        headers: { authorization: assemblyAIApiKey },
      });
      const transcriptionResult = await pollingResponse.json();

      if (transcriptionResult.status === "completed") {
        message.value = transcriptionResult.text;
        message.focus();
        break;
      } else if (transcriptionResult.status === "error") {
        throw new Error(
          `La transcription a échoué: ${transcriptionResult.error}`,
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error("Erreur lors de la transcription:", error);
    addMessage("Une erreur est survenue pendant la transcription.", "error");
  } finally {
    isTranscribing = false;
    envoyer.disabled = false;
    boutonMicro.disabled = false;
    hideLoading();
  }
}

// --- FONCTIONS UTILITAIRES POUR LE CHAT ---
function scrollToBottom() {
  historique.scrollTo({ top: historique.scrollHeight, behavior: "smooth" });
}

function addMessage(text, type = "user") {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.innerHTML = text;

  // let texte = messageDiv.innerHTML;
  // messageDiv.innerHTML = texte.replace("https://www.kya-energy.com/", '<a href="https://www.kya-energy.com/">Site web de Kya Energy Group</a>')

  for (const pElement of messageDiv.children) {
    for (const element of pElement.children) {
      if (element.nodeName == "A") {
        element.target = "_blank";
        if (element.href.search("maps/place/KYA") > 0) {
          element.textContent = "Lien Google Maps";
        } else if (element.href.search("ttps://kya-energy.com") > 0) {
          element.textContent = "Site web de Kya Energy Group";
        }
      }
    }
  }
  historique.appendChild(messageDiv);
  scrollToBottom();
}

function showLoading() {
  hideLoading(); // S'assurer qu'il n'y a pas déjà un loader
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "loading-indicator";
  loadingDiv.id = "loading";
  loadingDiv.innerHTML = `<div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div>`;
  historique.appendChild(loadingDiv);
  scrollToBottom();
}

function hideLoading() {
  const loading = document.getElementById("loading");
  if (loading) loading.remove();
}

// --- GESTION DE L'ENVOI DU FORMULAIRE TEXTE ---
form.onsubmit = (e) => {
  e.preventDefault();

  // Empêcher l'envoi si une autre action est en cours
  if (isSendingMessage || isTranscribing) return;

  let text = message.value.trim();
  if (!text) return;

  clearTimeout(typingTimer);
  boutonChat.classList.remove("typing");
  message.value = "";
  isSendingMessage = true;
  envoyer.disabled = true;
  boutonMicro.disabled = true;

  addMessage(text, "user");
  showLoading();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ message: text }),
    redirect: "follow",
  };

  fetch(
    "https://grateful-aphid-nationally.ngrok-free.app/webhook/chatbot",
    requestOptions,
  )
    .then((r) => r.text())
    .then((r) => {
      fetch("/api/convert", {
        method: "POST",
        body: JSON.stringify({
          markdown: r.trim(),
        }),
      })
        .then((r) => r.json())
        .then((r) => {
          hideLoading();
          addMessage(
            r.html.trim() || "Une erreur est survenue.",
            r.html.trim() ? "bot" : "error",
          );
        });
    })
    .catch(() => {
      hideLoading();
      addMessage("Une erreur est survenue.", "error");
    })
    .finally(() => {
      isSendingMessage = false;
      envoyer.disabled = false;
      boutonMicro.disabled = false;
      message.focus();
    });
};

// Focus automatique sur l'input quand le chat s'ouvre
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.attributeName === "class" &&
      !chat.classList.contains("hidden")
    ) {
      setTimeout(() => message.focus(), 100);
    }
  });
});
observer.observe(chat, { attributes: true });
