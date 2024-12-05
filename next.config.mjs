/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com', 'w7.pngwing.com'], // Add both allowed image hosts here
  },
  output: 'export',
};

export default nextConfig;
