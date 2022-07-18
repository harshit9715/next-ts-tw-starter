/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['i.pravatar.cc'],
    formats: ['image/avif', 'image/webp'],
  }
};

module.exports = nextConfig;
