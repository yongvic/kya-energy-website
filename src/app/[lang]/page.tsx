import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaArrowRight,
  FaAward,
  FaCalendar,
  FaFaceSmile,
  FaFlask,
  FaGlobe,
  FaHeadphones,
  FaLeaf,
  FaPeopleGroup,
  FaPooStorm,
  FaShield,
  FaSolarPanel,
  FaUserGroup,
} from "react-icons/fa6";
import { GiVillage } from "react-icons/gi";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { MdCardMembership, MdCo2 } from "react-icons/md";
import { SiEnterprisedb } from "react-icons/si";
import FancyButton from "@/components/FancyButton";
import { Metadata } from "next";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return (
    <main>
      <section className="bg-[url(/background-homepage.avif)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-kya-white dark:bg-gray-900 h-8 w-4/5 z-10 rounded-t-4xl"></div>
        <div className="min-h-screen z-0 p-16 backdrop-blur w-full h-full flex flex-col justify-between gap-16 text-kya-white">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-6xl">
              <span dangerouslySetInnerHTML={{ __html: dictionary.home.hero.title }} />
            </h1>
            <p className="font-bold text-2xl md:text-3xl">
              <span dangerouslySetInnerHTML={{ __html: dictionary.home.hero.subtitle }} />
            </p>
          </div>
          <p className="flex items-center gap-2 text-xl md:text-2xl font-bold text-kya-green">
            <FaCheckCircle />
            <span>
              {dictionary.home.hero.vision}
            </span>
          </p>
          <FancyButton
            href="/products-and-services"
            bgColor="#1ca18c"
            className="group w-max text-lg font-bold text-kya-white bg-kya-orange hover:text-kya-white rounded">
            <span className="flex items-center p-4 gap-4">
              <span>{dictionary.home.hero.cta}</span>
              <FaArrowRight className="-translate-x-2 group-hover:translate-0 transition-all duration-300" />
            </span>
          </FancyButton>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <FaSolarPanel size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">500+</span>
                <span className="text-xl">{dictionary.home.stats.installations}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaCalendar size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">
                  {new Date().getFullYear() - 2015}
                </span>
                <span className="text-xl">{dictionary.home.stats.expertise}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaFaceSmile size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">98%</span>
                <span className="text-xl">{dictionary.home.stats.satisfaction}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaHeadphones size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">24/7</span>
                <span className="text-xl">{dictionary.home.stats.support}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and values */}
      <section className="bg-kya-white dark:bg-gray-900 py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            {dictionary.home["mission-and-values"].title}
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-kya-green text-white p-4 rounded-full">
                <FaGlobe size={32} />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-kya-green mb-4">
              {dictionary.home["mission-and-values"].mission.title}
            </h3>
            <p className="text-gray-700 text-lg">
              {dictionary.home["mission-and-values"].mission.text}
            </p>
          </div>
          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-kya-orange text-white p-4 rounded-full">
                <FaPeopleGroup size={32} />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-kya-orange mb-4">
              {dictionary.home["mission-and-values"].values.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {dictionary.home["mission-and-values"].values.items.map((value) => (
                <p key={value} className="flex items-center gap-3">
                  <FaCheckCircle className="text-kya-green" />
                  <span className="text-gray-700">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our impacts */}
      <section className="bg-kya-white py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            {dictionary.home.impacts.title}
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaPooStorm size={40} />,
              value: dictionary.home.impacts.items[0].value,
              description: dictionary.home.impacts.items[0].description,
            },
            {
              icon: <MdCo2 size={40} />,
              value: dictionary.home.impacts.items[1].value,
              description: dictionary.home.impacts.items[1].description,
            },
            {
              icon: <MdCardMembership size={40} />,
              value: dictionary.home.impacts.items[2].value,
              description: dictionary.home.impacts.items[2].description,
            },
            {
              icon: <SiEnterprisedb size={40} />,
              value: dictionary.home.impacts.items[3].value,
              description: dictionary.home.impacts.items[3].description,
            },
            {
              icon: <LiaUserGraduateSolid size={40} />,
              value: dictionary.home.impacts.items[4].value,
              description: dictionary.home.impacts.items[4].description,
            },
            {
              icon: <GiVillage size={40} />,
              value: dictionary.home.impacts.items[5].value,
              description: dictionary.home.impacts.items[5].description,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="text-kya-orange mb-4">{item.icon}</div>
              <p className="text-3xl font-bold text-kya-green">{item.value}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* YouTube Video and Description */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-kya-coffee">
              {dictionary.home.discover.title}
            </h2>
            <p className="text-gray-700">
              {dictionary.home.discover.text1}
            </p>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: dictionary.home.discover.text2 }} />
          </div>
          {/* YouTube Video */}
          <div className="relative">
            <div className="absolute -right-4 top-0 w-4 h-full bg-kya-yellow rounded-r-3xl"></div>
            <div className="absolute -right-10 top-1/2 p-16 rounded-full -translate-y-1/2 bg-kya-orange"></div>
            <Link href="about">
              <div className="absolute group z-[2] -right-8 top-1/2 p-4 rounded-full -translate-y-1/2 bg-kya-yellow">
                <FaArrowRight
                  size={24}
                  className="text-kya-coffee group-hover:translate-x-1 transition-all duration-300 hover:animate-bounce-right"
                />
              </div>
            </Link>
            <div className="overflow-hidden shadow-lg z-[1] relative">
              <iframe
                className="w-full aspect-video h-full"
                loading="lazy"
                src="https://www.youtube.com/embed/ayX_GLi40K8"
                title="Video institutionnelle KYA Energy Group"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                width={800}
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us? */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            {dictionary.home["why-choose-us"].title}
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserGroup size={40} />,
              title: dictionary.home["why-choose-us"].items[0].title,
              description:
                dictionary.home["why-choose-us"].items[0].description,
            },
            {
              icon: <FaShield size={40} />,
              title: dictionary.home["why-choose-us"].items[1].title,
              description:
                dictionary.home["why-choose-us"].items[1].description,
            },
            {
              icon: <FaAward size={40} />,
              title: dictionary.home["why-choose-us"].items[2].title,
              description:
                dictionary.home["why-choose-us"].items[2].description,
            },
            {
              icon: <FaFlask size={40} />,
              title: dictionary.home["why-choose-us"].items[3].title,
              description:
                dictionary.home["why-choose-us"].items[3].description,
            },
            {
              icon: <FaLeaf size={40} />,
              title: dictionary.home["why-choose-us"].items[4].title,
              description:
                dictionary.home["why-choose-us"].items[4].description,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="text-kya-green mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-kya-coffee mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Products */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            {dictionary.home.products.title}
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {dictionary.home.products.subtitle}
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/kya-sop-residentiel.avif",
              title: dictionary.home.products.items[0].title,
              description: dictionary.home.products.items[0].description,
              link: "/kya-sop-menages",
            },
            {
              image: "/kya-sop-commercial.avif",
              title: dictionary.home.products.items[1].title,
              description: dictionary.home.products.items[1].description,
              link: "/kya-sop-institutions",
            },
            {
              image: "/kya-sop-communautaire.avif",
              title: dictionary.home.products.items[2].title,
              description: dictionary.home.products.items[2].description,
              link: "/kya-backup",
            },
          ].map((product, index) => (
            <Link href={product.link} key={index}>
              <div key={index} className="w-full relative bg-white shadow-lg group z-10">
                <div className="overflow-hidden">
                  <div className="h-64 w-max mx-auto">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="h-64 w-auto object-scale-down"
                      width={225}
                      height={321}
                    />
                  </div>
                  <div className="p-6 bg-white z-10">
                    <h3 className="text-2xl font-bold text-kya-coffee mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: dictionary.home.metadata.title,
    description: dictionary.home.metadata.description,
  };
}
