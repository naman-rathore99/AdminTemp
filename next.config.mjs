/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
  reactStrictMode: true,
  // Use Webpack instead of Turbopack for now
  experimental: {
    turbo: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'readymadeui.com',
      }, {
        protocol: 'https',

        hostname: "via.placeholder.com"
      }, {
        protocol: 'https',

        hostname: "imagedelivery.net"
      }
    ],
  },
};

// Setup Cloudflare development platform in development mode
(async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
})();

export default nextConfig;
