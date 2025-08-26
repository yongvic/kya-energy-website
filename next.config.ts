import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Add localhost to allowed doamins
  // cause of local testing of strapi
  images: {
    domains: ['localhost'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
