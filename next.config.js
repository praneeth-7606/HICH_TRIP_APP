// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Fix hydration issues
  experimental: {
    suppressHydrationWarning: false,
  },
  
  // Image optimization
  images: {
    domains: ['localhost', 'via.placeholder.com', 'picsum.photos'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'hich-trip-app',
  },
  
  // Webpack configuration to handle potential module issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig