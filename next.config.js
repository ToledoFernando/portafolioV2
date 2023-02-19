/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"], // Agrega aquí los dominios de tus imágenes
  },
};

module.exports = nextConfig;
