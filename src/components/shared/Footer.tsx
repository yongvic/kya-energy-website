import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTumblr,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

// Les données des réseaux sociaux restent les mêmes
const socialNetworks = [
  {
    colors: {
      background: "bg-blue-300",
      icon: "text-blue-800",
    },
    icon: <FaFacebook />,
    name: "Facebook",
    url: "https://www.fb.com/kya-energy",
  },
  {
    colors: {
      background: "bg-blue-300",
      icon: "text-blue-700",
    },
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/kya-energy",
  },
  {
    colors: {
      background: "bg-pink-300",
      icon: "text-pink-800",
    },
    icon: <FaInstagram />,
    name: "Instagram",
    url: "https://www.instagram.com/kya_energy",
  },
  {
    colors: {
      background: "bg-gray-300",
      icon: "text-black",
    },
    icon: <FaXTwitter />,
    name: "TwitterX",
    url: "https://twitter.com/kya_energy",
  },
  {
    colors: {
      background: "bg-red-300",
      icon: "text-red-700",
    },
    icon: <FaYoutube />,
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC_7TIwBfk9JJO-sgGTXCpqg",
  },
  {
    colors: {
      background: "bg-gray-300",
      icon: "text-black",
    },
    icon: <FaTiktok />,
    name: "Tiktok",
    url: "http://www.tiktok.com/@kyaenergy",
  },
  {
    colors: {
      background: "bg-purple-300",
      icon: "text-purple-900",
    },
    icon: <FaTumblr />,
    name: "Tumblr",
    url: "https://kya-energy.tumblr.com",
  },
];
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Section principale avec les liens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Colonne 1: Logo et description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              aria-label="Accueil"
              href="/">
              <Image
                alt="Logo KYA Energy"
                className="h-20 w-auto"
                height={80}
                src="/favicon.ico"
                width={80}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Votre partenaire de confiance pour des solutions énergétiques
              durables et innovantes.
            </p>
          </div>

          {/* Colonne 2: Solutions */}
          <div>
            <h3 className="font-semibold text-white">Nos Solutions</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/detail-produits">
                  Kits Solaires
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/services/installation">
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/services/maintenance">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/services/consulting">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Entreprise */}
          <div>
            <h3 className="font-semibold text-white">Entreprise</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/a-propos">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/a-propos#equipe">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/certification-iso-9001">
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/fondation-kya">
                  Fondation KYA
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/contact">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/faq">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/actualites">
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-kya-green transition-colors"
                  href="/politique-qualite">
                  Politique Qualité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Newsletter et Google Maps */}
        <div className="mt-16 h-[300px] grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">
              S'inscrire à notre newsletter
            </h3>
            <p className="mt-2 text-sm">
              Recevez nos dernières actualités et offres spéciales directement
              dans votre boîte mail.
            </p>
            <form
              action="#"
              className="mt-4 flex gap-2"
              method="post">
              <div className="relative flex-grow">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kya-green"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  required
                  type="email"
                />
              </div>
              <button
                className="bg-kya-green text-white font-semibold px-5 py-2 rounded-md hover:bg-opacity-80 transition-colors"
                type="submit">
                S'inscrire
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden border-2 border-gray-700">
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.440241739337!2d1.182018!3d6.2414043999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215783b880a173%3A0xe90f181e8b59c8fc!2sKYA-Energy%20GROUP!5e0!3m2!1sen!2s!4v1645278495696!5m2!1sen!2sus&output=embed"
              style={{
                border: 0,
              }}
              title="Google Maps Localization • KYA-Energy Group"
              width="100%"></iframe>
          </div>
        </div>

        {/* Ligne de séparation et bas du footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KYA Energy Group. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {socialNetworks.map((network) => (
              <Link
                className={`${network.colors.background} ${network.colors.icon} p-4 rounded-full m-1 hover:scale-110 transition-all duration-300 *:size-6`}
                href={network.url}
                key={network.name}
                rel="noopener noreferrer"
                target="_blank">
                {network.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
