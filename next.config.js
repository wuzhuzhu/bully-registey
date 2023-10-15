/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // lint在build的时候超级慢 只能关掉
    // !! WARN !!
    // ignoreBuildErrors: true,
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
