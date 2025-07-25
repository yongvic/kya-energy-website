import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShield,
  FaTiktok,
  FaTumblr,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

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
    <footer className="bg-[url('/background-earth.avif')] bg-cover bg-center">
      <div className="backdrop-blur-xl p-8 md:p-16 lg:p-24 space-y-16 text-white">
        {/* Logo and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/logo.webp"
              alt="KYA Energy Group Logo"
              width={96}
              height={96}
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-col items-end">
            <p className="font-medium text-xl text-justify">
              Abonnez vous à notre newsletter pour ne manquer aucune
              information.
            </p>
            <form className="mt-4 w-full" method="post" action="#">
              <label
                htmlFor="email"
                className="flex items-center text-gray-900 bg-white">
                <FaEnvelope size={32} className="ml-4" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full outline-none px-4 font-medium text-xl"
                  placeholder="Votre adresse email"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-yellow-600 transition-all duration-300 text-white font-bold p-4">
                  S&apos;abonner
                </button>
              </label>
            </form>
          </div>
        </div>
        {/* Description and links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <strong>
              <span className="text-4xl">
                Votre partenaire pour une transition énergétique durable et
                responsable.
              </span>
              <span className="flex items-center gap-2 text-kya-green mt-8 text-2xl">
                <FaShield />
                <span>Certifié ISO 9001:2015</span>
              </span>
            </strong>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2 font-medium text-lg">
              <Link href="#" className="font-bold text-xl">
                Solutions
              </Link>
              <Link href="#">Groupes électrosolaires</Link>
              <Link href="#">Installation</Link>
              <Link href="#">Maintenance</Link>
              <Link href="#">Conseil</Link>
            </div>
            <div className="flex flex-col gap-2 font-medium text-lg">
              <Link href="#" className="font-bold text-xl">
                Entreprise
              </Link>
              <Link href="#">À propos</Link>
              <Link href="#">Notre équipe</Link>
              <Link href="#">Certifications</Link>
              <Link href="#">Fondation KYA</Link>
            </div>
            <div className="flex flex-col gap-2 font-medium text-lg">
              <Link href="#" className="font-bold text-xl">
                Contact
              </Link>
              <Link href="#">Nous contacter</Link>
              <Link href="#">Support</Link>
              <Link href="#">Actualités</Link>
              <Link href="#">Politique qualité</Link>
            </div>
          </div>
        </div>
        {/* Contact and maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold underline">Adresse</h1>
              <p>300m, rue en face du Centre Culturel Loyola (CCL),</p>
              <p>Route Mission Tové, Agoè Logopé</p>
              <p>08 BP 81101, Lomé - Togo</p>
            </div>
            <div className="space-y-2 text-lg font-medium">
              <h1 className="text-2xl font-bold underline">Horaires</h1>
              <p>Lundi - Vendredi</p>
              <p>07h30–12h00 | 14h00–17h30</p>
            </div>
            <div className="space-y-2 text-lg font-medium">
              <h1 className="text-2xl font-bold underline">Téléphone</h1>
              <p>
                <Link href="tel:+228 91 50 21 49" className="text-kya-green">
                  +228 91 50 21 49
                </Link>
              </p>
              <p>
                <Link href="tel:+228 70 45 34 81" className="text-kya-green">
                  +228 70 45 34 81
                </Link>
              </p>
              <p>
                <Link href="tel:+228 99 99 93 80" className="text-kya-green">
                  +228 99 99 93 80
                </Link>
              </p>
            </div>
            <div className="space-y-2 text-lg font-medium">
              <h1 className="text-2xl font-bold underline">E-mail</h1>
              <p>
                <Link
                  href="mailto:info@kya-energy.com"
                  className="text-kya-green">
                  info@kya-energy.com
                </Link>
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.440241739337!2d1.182018!3d6.2414043999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215783b880a173%3A0xe90f181e8b59c8fc!2sKYA-Energy%20GROUP!5e0!3m2!1sen!2s!4v1645278495696!5m2!1sen!2sus&output=embed"
              width="600"
              height="500"
              className="h-[300px] w-full md:w-full md:h-[350px] lg:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"></iframe>
          </div>
        </div>
        <div className="h-1 bg-gray-900"></div>
        {/* Social networks and copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-start items-center flex-wrap">
            {socialNetworks.map((network) => (
              <Link
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${network.colors.background} ${network.colors.icon} p-4 rounded-full m-1 hover:scale-110  transition-all duration-300 *:size-6`}>
                {network.icon}
              </Link>
            ))}
          </div>
          <div className="text-right">
            &copy; {new Date().getFullYear()} KYA-Energy Group. Tous droits
            réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
