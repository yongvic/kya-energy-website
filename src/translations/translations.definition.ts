type Type = {
  header: {
    logo: string;
  };
  /*
    Awards definition here
    image: image name under public/awards folder
    title: title that will be shown,
    description: a small description of how/why/what of the award
    order: the order of award winning starting from the first that has the 1 index
    year: the year the award was won
  */
  awards: {
    image: string;
    title: string;
    description: string;
    order: number;
    year: number;
  }[];
  navigation: {
    home: string;
    about: string;
    "products-and-services": string;
    "news-and-engagement": string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  team: {
    name: string;
    image: string;
    role: string;
  }[];
  switcher: {
    locale: {
      en: string;
      fr: string;
      aria: string;
    };
    theme: {
      title: {
        light: string;
        dark: string;
      };
    };
  };
};

export default Type;
