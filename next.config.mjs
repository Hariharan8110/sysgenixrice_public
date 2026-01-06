// import autoprefixer from 'autoprefixer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   webpack(config) {
  //     // Customize webpack config if necessary, such as handling CSS files
  //     return config;
  //   },

  //   postcss: {
  //     plugins: [
  //       autoprefixer,
  //       // Add any other PostCSS plugins you are using here
  //     ],
  //   },

  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Add this for cPanel compatibility
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/",
      },
    ],
  },

  //   eslint: {
  //     ignoreDuringBuilds: true,
  //   },
  output: "export",

  // Add these settings for better cPanel compatibility
  // output: 'standalone',
  trailingSlash: true,

  // Optimize for production
  reactStrictMode: true,
  experimental: { appDir: false },
  //   swcMinify: true,
};

export default nextConfig;
