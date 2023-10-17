/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Beyond-Reality-Tech',
  assetPrefix: '/Beyond-Reality-Tech/',
  images: {
    loader: 'imgix',
    path: ''
  }
};

module.exports = nextConfig;
