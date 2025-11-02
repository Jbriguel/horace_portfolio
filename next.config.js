/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Netlify Image CDN gère l'optimisation automatiquement
    unoptimized: false,
  },
};

module.exports = nextConfig;
