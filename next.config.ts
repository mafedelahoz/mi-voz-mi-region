import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React para detectar errores
  swcMinify: true,       // Activa la minificación de SWC para mejorar el rendimiento
  output: 'standalone', // Útil para optimizar el despliegue en Vercel y otras plataformas
};

export default nextConfig;
