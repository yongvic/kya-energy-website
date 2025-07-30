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
  kyaFoundation: {
    hero: {
      title: string;
      description: string;
      tagline: string;
      cta: string;
      stats: {
        employees: string;
        mission: string;
        experience: string;
      };
    };
    actions: {
      title: string;
      items: string[];
    };
    objectives: {
      title: string;
      items: string[];
    };
    domains: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    video: {
      title: string;
    };
    gallery: {
      title: string;
    };
    sponsors: {
      title: string;
    };
  };
  faq: {
    hero: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    categories: {
      general: string;
      maintenance: string;
      financing: string;
      installation: string;
    };
    questions: {
      question: string;
      answer: string;
    }[];
  };
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
  productsAndServices: {
    hero: {
      title: string;
      subtitle: string;
      video: string;
    };
    promo: {
      title: string;
      description: string;
      cta: string;
    };
    categories: {
      residential: {
        title: string;
        description: string;
      };
      commercial: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
    kyaSop: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
      };
      cta: string;
    };
    kyaBackup: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
      };
      cta: string;
    };
    kyaSolDesign: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
      };
      cta: string;
    };
  };
  certifications: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    details: {
      mainTitle: string;
      subtitle: string;
      award: string;
      paragraph1: string;
      paragraph2_strong: string;
      paragraph3: string;
    };
    essentials: {
      title: string;
      subtitle: string;
      items: {
        customerSatisfaction: string;
        processImprovement: string;
        teamCohesion: string;
        healthyEnvironment: string;
      };
    };
    commitment: {
      title: string;
      subtitle: string;
      paragraph: string;
      thanksTitle: string;
      thanksParagraph1: string;
      thanksParagraph2: string;
    };
    list: {
      id: string;
      name: string;
      issuer: string;
      date: string;
      logo: string;
      description: string;
      link: string;
    }[];
    cta: {
      title: string;
      description: string;
      subtitle: string;
      button: string;
    };
  };
  products: {
    "promotional-offers": string;
    "product-range": string;
    "product-subtitle": string;
    "kya-sop-description": string;
    "kya-soldesign-description": string;
    "kya-ecolabel-description": string;
    "kya-flexycontrol-description": string;
    "catalog-prompt": string;
    "see-more": string;
  };
  services: {
    title: string;
    subtitle: string;
    "installation-title": string;
    "installation-description": string;
    "audit-title": string;
    "audit-description": string;
    "training-title": string;
    "training-description": string;
    "rental-title": string;
    "rental-description": string;
    "learn-more": string;
  };
  financing: {
    title: string;
    subtitle: string;
    "down-payment": string;
    "repayment-period": string;
    "maintenance-included": string;
  };
};

export default Type;
