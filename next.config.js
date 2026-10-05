/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/docs/how-bruca-edits",
        destination: "/docs/how-bias-detection-works",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
