/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.worldvectorlogo.com"
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      },
      {
        protocol:"https",
        hostname:"ik.imagekit.io"
      }
    ]
  }
};

module.exports = nextConfig;
