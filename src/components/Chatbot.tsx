"use client";

import "@/styles/chatbot.css";
import Script from "next/script";
import { useRef } from "react";
import { RiInformation2Line } from "react-icons/ri";

export default function Chatbot() {
  const message = useRef<HTMLInputElement>(null);
  const envoyer = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* Notification d'information */}
      <div id="info" className="fade-in-up">
        <p>Je suis le bot de KYA-Energy Group, n&apos;hésitez pas à me poser des questions</p>
        <button id="info-close">
          <svg viewBox="0 0 16 16">
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>

      {/* Interface de chat */}
      <div id="chat" className="hidden">
        <div className="chat-header">
          <button id="bouton-chat-close">
            <svg viewBox="0 0 16 16">
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
          <div className="chat-title">
            <svg viewBox="0 0 16 16">
              <path
                d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path
                d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
            <p>KYA Bot</p>
          </div>
          <div style={{ width: "32px" }}></div>
        </div>

        <div className="messages-container">
          <div id="historique">
            <div>
              <p className="text-center font-bold">Comment puis-je vous servir ?</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {
                  ["C'est quoi l'énergie solaire ?", "Quels produits proposez vous ?", "Où se situe KYA-Energy Group ?", "Combien coûte un kit solaire ?"].map((value, index) => (
                    <div onClick={() => {
                      message.current!.value = value;
                      envoyer.current!.click();
                    }} key={index} style={{
                      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    }} className="rounded-xl p-2 shadow bg-green-600 text-white cursor-pointer hover:scale-105 transition-all duration-300">
                      <p className="mb-1"><RiInformation2Line /></p>
                      <p>{value}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* Notification d'enregistrement vocal */}
        <div id="voice-notification" className="voice-notification">
          🎤 Enregistrement... Cliquez sur le micro pour transcrire.
        </div>

        <form id="form">
          <input type="text" ref={message} name="chat" id="message" placeholder="Demandez moi ce que vous voulez" required />
          <div className="form-buttons">
            <button id="bouton-micro" type="button" title="Enregistrement vocal">
              <svg viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path
                  d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </button>
            <button id="envoyer" type="submit" ref={envoyer} title="Envoyer le message">
              <svg viewBox="0 0 16 16">
                <path
                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Bouton flottant */}
      <button id="bouton-chat">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 size-full overflow-hidden rounded-full">
          <div className="bouton-chat-animate size-[calc(100%-0.5rem)] rounded-full absolute top-1/2 left-1/2 -translate-1/2 bg-kya-green">
            <div className="absolute top-0 left-0 size-full rounded-full z-10 bg-kya-green"></div>
          </div>
        </div>
      </button>
      <Script src="/scripts/chatbot.js" async />
    </>
  );
}
