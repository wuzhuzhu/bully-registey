/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // lint在build的时候超级慢 只能关掉
    // !! WARN !!
    // ignore ts build error if prod
    // ignoreBuildErrors: process.env.NODE_ENV === "production",
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "vercel.com",
      "avatars.githubusercontent.com", // github login
      "utfs.io", // uploadthing
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        net: false,
        os: false,
        path: false,
        dns: false,
        child_process: false,
        tls: false,
      };
    }

    return config;
  },
  // async redirects() { // 外链重定向
  //   return [
  //     {
  //       source: "/github",
  //       destination: "https://github.com/steven-tey/precedent",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
