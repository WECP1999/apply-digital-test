/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: `${process.env.NEXT_PUBLIC_BASE_PATH_URL_IMG}` },
    ],
  },
};

export default nextConfig;
