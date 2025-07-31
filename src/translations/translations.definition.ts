type TranslationsType = {
  header: {
    logo: string;
    qualityPolicy: string;
    contact: string;
  };
  "detail-products": {
    certified_title: string;
    certified_description: string;
    certified_item1: string;
    certified_item2: string;
    ranges_title: string;
    residential_title: string;
    residential_description: string;
    commercial_title: string;
    commercial_description: string;
    community_title: string;
    community_description: string;
    testimonials_title: string;
  };
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
    role: string;
    image: string;
  }[];
  kyaFoundation: {
    hero: {
      title: string;
      description: string;
      tagline: string;
      cta: string;
      foundationName: string;
      watchVideo: string;
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
    partners: {
      title: string;
    };
  };
  certifications: {
    hero: {
      title: string;
      subtitle: string;
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
    cta: {
      title: string;
      subtitle: string;
      button: string;
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
  };
  products: {
    "kya-sop-description": string;
    "kya-soldesign-description": string;
    "kya-ecolabel-description": string;
    "kya-flexycontrol-description": string;
    "promotional-offers": string;
    "product-range": string;
    "product-subtitle": string;
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
  home: {
    hero: {
      title: string;
      subtitle: string;
      vision: string;
      cta: string;
    };
    stats: {
      installations: string;
      expertise: string;
      satisfaction: string;
      support: string;
    };
    "mission-and-values": {
      title: string;
      mission: {
        title: string;
        text: string;
      };
      values: {
        title: string;
        items: string[];
      };
    };
    impacts: {
      title: string;
      items: {
        value: string;
        description: string;
      }[];
    };
    discover: {
      title: string;
      text1: string;
      text2: string;
    };
    "why-choose-us": {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    products: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
  footer: {
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
    };
    description: string;
    certified: string;
    solutions: {
      title: string;
      items: {
        solarKits: string;
        installation: string;
        maintenance: string;
        consulting: string;
      };
    };
    company: {
      title: string;
      items: {
        about: string;
        team: string;
        certifications: string;
        foundation: string;
      };
    };
    contact: {
      title: string;
      items: {
        contactUs: string;
        support: string;
        news: string;
        qualityPolicy: string;
      };
    };
    address: {
      title: string;
      line1: string;
      line2: string;
      line3: string;
    };
    schedule: {
      title: string;
      days: string;
      hours: string;
    };
    phone: {
      title: string;
    };
    email: {
      title: string;
    };
    copyright: string;
  };
  certification: {
    title: string;
    subtitle: string;
    card: {
      title: string;
      description: string;
    };
  };
};

export default TranslationsType;
