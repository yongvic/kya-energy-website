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
import TranslationsType from "@/translations/translations.definition";
import FancyButton from "./FancyButton";

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

export default function Footer({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  return (
    <footer className="bg-[url('/background-earth.avif')] bg-cover bg-center">
      <div className="backdrop-blur-xl p-8 md:p-16 lg:p-24 space-y-16 text-kya-white">
        {/* Logo and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/logo.webp"
              alt={dictionary.header.logo}
              width={96}
              height={96}
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-col items-end">
            <p className="font-bold text-xl text-justify">
              {dictionary.footer.newsletter.title}
            </p>
            <form className="mt-4 w-full" method="post" action="#">
              <label
                htmlFor="email"
                className="flex items-center text-gray-900 bg-kya-white">
                <FaEnvelope size={32} className="ml-4" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full outline-none px-4 text-xl"
                  placeholder={dictionary.footer.newsletter.placeholder}
                  required
                />
                <FancyButton bgColor="#f99d32"
                  className="bg-kya-green transition-all duration-300 text-kya-white font-bold px-8 py-4">{dictionary.footer.newsletter.button}</FancyButton>
              </label>
            </form>
          </div>
        </div>
        {/* Description and links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <strong>
              <span className="text-4xl">{dictionary.footer.description}</span>
              <span className="flex items-center gap-2 text-kya-green mt-8 text-2xl">
                <FaShield />
                <span>{dictionary.footer.certified}</span>
              </span>
            </strong>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2 text-lg *:hover:text-kya-green *:transition-all *:duration-300">
              <Link href="/products-and-services" className="font-bold text-2xl">
                {dictionary.footer.solutions.title}
              </Link>
              <Link href="/detail-products">
                {dictionary.footer.solutions.items.solarKits}
              </Link>
              <Link href="/products-and-services#services">
                {dictionary.footer.solutions.items.installation}
              </Link>
              <Link href="/products-and-services#services">
                {dictionary.footer.solutions.items.maintenance}
              </Link>
              <Link href="/products-and-services#services">
                {dictionary.footer.solutions.items.consulting}
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-lg *:hover:text-kya-green *:transition-all *:duration-300">
              <Link href="/about" className="font-bold text-2xl">
                {dictionary.footer.company.title}
              </Link>
              <Link href="/about">{dictionary.footer.company.items.about}</Link>
              <Link href="/about#equipe">{dictionary.footer.company.items.team}</Link>
              <Link href="/certifications">
                {dictionary.footer.company.items.certifications}
              </Link>
              <Link href="/kya-foundation">
                {dictionary.footer.company.items.foundation}
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-lg *:hover:text-kya-green *:transition-all *:duration-300">
              <Link href="#contact" className="font-bold text-2xl">
                {dictionary.footer.contact.title}
              </Link>
              <Link href="#contact">{dictionary.footer.contact.items.contactUs}</Link>
              <Link href="#contact">{dictionary.footer.contact.items.support}</Link>
              <Link href="#contact">{dictionary.footer.contact.items.news}</Link>
              <Link href="#contact">
                {dictionary.footer.contact.items.qualityPolicy}
              </Link>
            </div>
          </div>
        </div>
        {/* Contact and maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="space-y-8">
            <div className="space-y-2 text-xl ">
              <h1 className="text-2xl font-bold underline">
                {dictionary.footer.address.title}
              </h1>
              <p>{dictionary.footer.address.line1}</p>
              <p>{dictionary.footer.address.line2}</p>
              <p>{dictionary.footer.address.line3}</p>
            </div>
            <div className="space-y-2 text-xl ">
              <h1 className="text-2xl font-bold underline">
                {dictionary.footer.schedule.title}
              </h1>
              <p>{dictionary.footer.schedule.days}</p>
              <p>{dictionary.footer.schedule.hours}</p>
            </div>
            <div className="space-y-2 text-xl ">
              <h1 className="text-2xl font-bold underline">
                {dictionary.footer.phone.title}
              </h1>
              <Link href="tel:+228 91 50 21 49">
                <p className="text-kya-green">+228 91 50 21 49</p>
              </Link>
              <Link href="tel:+228 70 45 34 81">
                <p className="text-kya-green">+228 70 45 34 81</p>
              </Link>
              <Link href="tel:+228 99 99 93 80">
                <p className="text-kya-green">+228 99 99 93 80</p>
              </Link>
            </div>
            <div className="space-y-2 text-xl ">
              <h1 className="text-2xl font-bold underline">
                {dictionary.footer.email.title}
              </h1>
              <Link href="mailto:info@kya-energy.com">
                <p className="text-kya-green">info@kya-energy.com</p>
              </Link>
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
        <div className="h-1 bg-kya-green"></div>
        {/* Social networks and copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-start items-center flex-wrap">
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
          <div className="text-right">
            {dictionary.footer.copyright.replace(
              "{year}",
              new Date().getFullYear().toString(),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
