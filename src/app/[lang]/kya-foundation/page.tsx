import { Locale } from "@/lib/i18n.config";
import { getTranslation } from "@/lib/get-translation";
import {
  FaCalendar,
  FaDownload,
  FaGlobe,
  FaHeart,
  FaLocationArrow,
  FaRocket,
} from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import Image from "next/image";

export default async function KyaFoundation({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  await getTranslation(lang);
  return (
    <main>
      <section className="h-svh relative">
        <video>
          <source src="/kya-foundation/kya-foundation-video-1.mp4" />
        </video>
        <div className="absolute top-0 left-0">
          <p>Fondation KYA</p>
          <p>Nos initiatives</p>
          <p>
            La Fondation KYA est créée en octobre 2022. Elle a pour but de
            contribuer au développement socio-économique des populations
            africaines, issues des groupes les plus vulnérables par des
            interventions en faveur du développement en matière d'énergie,
            d'agriculture, de médecine, d'éducation et de l'environnement.
          </p>
          <p>
            <span>
              <FaHeart />
            </span>
            <span>Fondation KYA, pour un monde meilleur.</span>
          </p>
          <p>
            <span>
              <FaDownload />
            </span>
            <span>Télécharger la lettre d'engagement</span>
          </p>
          <div>
            <article>
              <p>500+</p>
              <p>Employés recrutés</p>
            </article>
            <article>
              <p>
                <FaGlobe />
              </p>
              <p>Une mission</p>
            </article>
            <article>
              <p>10</p>
              <p>Années d'expérience</p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>
            <FaRocket />
            <span>Nos moyens d'actions</span>
          </p>
          <div>
            <p>L'octroi de bourses et subventions de formation</p>
            <p>L'organisation des concours d'innovation</p>
            <p>
              L'organisation des concours de formation, conférences, seminaires
            </p>
            <p>L'appui aux entrepreneurs</p>
            <p>Le soutien à l'autonomisation des femmes et des jeunes filles</p>
            <p>
              L'appui à l'insertion socio-professionnelle des jeunes diplômés
            </p>
          </div>
        </div>
        <div>
          <p>
            <FiTarget />
            <span>Nos objectifs</span>
          </p>
          <div>
            <p>
              Accroître l'accès aux services énergétiques durables en milieu
              rural
            </p>
            <p>Promouvoir la science et la technologie chez les femmes</p>
            <p>
              Promouvoir l'employabilité des jeunes en énergies renouvelables
            </p>
            <p>Contribuer à l'amélioration de la qualité de l'éducation</p>
            <p>Contribuer à l'autonomisation économique des femmes</p>
            <p>Contribuer à la lutte contre les changements climatiques</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Les domaines d'interventions</h1>
        <div>
          {[
            {
              title: "Education et formation",
              description:
                "La Fondation KYA soutient l’éducation des jeunes filles en sciences et technologies, en valorisant les talents et en offrant des bourses aux plus vulnérables.",
              imageSrc: "/kya-foundation/image-1.png",
            },
            {
              title: "Energies renouvelables",
              description:
                "La Fondation KYA facilite l’accès à l’énergie durable en zones rurales et forme gratuitement des filles à l’installation et à la maintenance de systèmes solaires.",
              imageSrc: "/kya-foundation/image-2.png",
            },
            {
              title: "Développement durable",
              description:
                "La Fondation KYA œuvre pour les Objectifs de Développement Durable, en se concentrant sur 7 priorités : lutte contre la pauvreté, éducation, égalité des sexes, énergie durable, emploi, climat et partenariats.",
              imageSrc: "/kya-foundation/image-3.png",
            },
          ].map((value) => (
            <div className="" key={value.imageSrc}>
              <div>
                <Image src={value.imageSrc} alt="" width={300} height={200} />
              </div>
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>
          Découvrez notre approche et notre vision à travers cette présentation
          vidéo
        </h1>
        <div>
          <video controls>
            <source src="/kya-foundation/kya-foundation-video-1.mp4" />
          </video>
        </div>
      </section>
      <section>
        <h1>Quelques images de nos activités</h1>
        <div className="relative">
          <Image
            alt=""
            src="/kya-foundation/image-4.png"
            width={300}
            height={200}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            // Glass effect
            <article>
              <div>
                <p>Soirée caritative de la fondation KYA</p>
                <div>
                  <p>
                    <FaCalendar />
                    <span>Mai 2024</span>
                  </p>
                  <p>
                    <FaLocationArrow />
                    <span>Lomé, Togo</span>
                  </p>
                </div>
              </div>
              <div>1 / 23</div>
            </article>
          </div>
        </div>
      </section>

      <div>
        <h1>Nos sponsors OR</h1>
        <section>
          <article>
            <div className="bg-kya-yellow">
              <Image
                alt=""
                src="/sponsors/asecna.avif"
                width={300}
                height={200}
              />
            </div>
            <div>
              <p>
                L’ASECNA est une agence panafricaine qui assure la sécurité de
                la navigation aérienne dans 17 pays africains.
              </p>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div className="bg-kya-yellow">
              <Image
                alt=""
                src="/sponsors/onomo.avif"
                width={300}
                height={200}
              />
            </div>
            <div>
              <p>
                ONOMO Hôtel Lomé offre un cadre moderne et convivial au cœur de
                la capitale, idéal pour affaires et loisirs.
              </p>
            </div>
          </article>
        </section>
        <section>
          <article>
            <div className="bg-kya-yellow">
              <Image
                alt=""
                src="/sponsors/cetef.avif"
                width={300}
                height={200}
              />
            </div>
            <div>
              <p>
                Le CETEF Togo 2000 est le principal centre d'expositions du
                Togo, dédié aux événements économiques, culturels...
              </p>
            </div>
          </article>
        </section>
        <section>
          <article>
            <div className="bg-kya-yellow">
              <Image
                alt=""
                src="/sponsors/moov.avif"
                width={300}
                height={200}
              />
            </div>
            <div>
              <p>
                Moov Africa Togo est un leader en téléphonie mobile, internet 4G
                et services financiers.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
