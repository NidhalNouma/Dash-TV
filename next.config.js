/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/api/:path*",
        destination:
          "https://ssrtrustedsignals-3nfnn26ppa-uc.a.run.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
