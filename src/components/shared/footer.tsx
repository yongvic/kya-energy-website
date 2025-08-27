import Link from "next/link";
import Image from "next/image";
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
    name: "Facebook",
    colors: {
      icon: "text-blue-800",
      background: "bg-blue-300",
    },
    icon: <FaFacebook />,
    url: "https://www.fb.com/kya-energy",
  },
  {
    name: "LinkedIn",
    colors: {
      icon: "text-blue-700",
      background: "bg-blue-300",
    },
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/kya-energy",
  },
  {
    name: "Instagram",
    colors: {
      icon: "text-pink-800",
      background: "bg-pink-300",
    },
    icon: <FaInstagram />,
    url: "https://www.instagram.com/kya_energy",
  },
  {
    name: "TwitterX",
    colors: {
      icon: "text-black",
      background: "bg-gray-300",
    },
    icon: <FaXTwitter />,
    url: "https://twitter.com/kya_energy",
  },
  {
    name: "YouTube",
    colors: {
      icon: "text-red-700",
      background: "bg-red-300",
    },
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UC_7TIwBfk9JJO-sgGTXCpqg",
  },
  {
    name: "Tiktok",
    colors: {
      icon: "text-black",
      background: "bg-gray-300",
    },
    icon: <FaTiktok />,
    url: "http://www.tiktok.com/@kyaenergy",
  },
  {
    name: "Tumblr",
    colors: {
      icon: "text-purple-900",
      background: "bg-purple-300",
    },
    icon: <FaTumblr />,
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
              href="/"
              aria-label="Accueil">
              <Image
                src="/logo.webp"
                alt="Logo KYA Energy"
                width={80}
                height={80}
                className="h-20 w-auto"
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
                  href="/produits/kits-solaires"
                  className="hover:text-kya-green transition-colors">
                  Kits Solaires
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation"
                  className="hover:text-kya-green transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="hover:text-kya-green transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-kya-green transition-colors">
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
                  href="/a-propos"
                  className="hover:text-kya-green transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="hover:text-kya-green transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="hover:text-kya-green transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/fondation-kya"
                  className="hover:text-kya-green transition-colors">
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
                  href="/contact"
                  className="hover:text-kya-green transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-kya-green transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/actualites"
                  className="hover:text-kya-green transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-qualite"
                  className="hover:text-kya-green transition-colors">
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
              className="mt-4 flex gap-2"
              method="post"
              action="#">
              <div className="relative flex-grow">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kya-green"
                />
              </div>
              <button
                type="submit"
                className="bg-kya-green text-white font-semibold px-5 py-2 rounded-md hover:bg-opacity-80 transition-colors">
                S'inscrire
              </button>
            </form>
          </div>

          {/* Google Maps */}
          <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden border-2 border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.440241739337!2d1.182018!3d6.2414043999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215783b880a173%3A0xe90f181e8b59c8fc!2sKYA-Energy%20GROUP!5e0!3m2!1sen!2s!4v1645278495696!5m2!1sen!2sus&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${network.colors.background} ${network.colors.icon} p-4 rounded-full m-1 hover:scale-110 transition-all duration-300 *:size-6`}>
                {network.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
