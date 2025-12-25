import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Keep your existing Image settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 2. Add the Redirects to fix Google 404 Errors
  async redirects() {
    return [
      {
        source: '/contact-us',   // Old Link from Google
        destination: '/contact', // New Working Link
        permanent: true,         // Tells Google: "Update your index forever"
      },
      {
        source: '/about-us',
        destination: '/',        // Redirect to Home (since you don't have /about yet)
        permanent: true,
      },
      {
        source: '/feedback',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/3n4d',
        destination: '/packages', // Redirect old package link to the main packages list
        permanent: true,
      },
    ];
  },
};

export default nextConfig;