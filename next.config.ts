import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Add localhost to allowed doamins
  // cause of local testing of strapi
  images: {
    domains: [
      "localhost",
      "192.168.101.65",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
