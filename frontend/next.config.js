/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode double-invokes effects in dev only, which replays every
  // Framer Motion mount animation (initial -> animate) a second time and
  // reads as the page "rendering/animating twice". Production builds are
  // unaffected by this flag either way.
  reactStrictMode: false,
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
        hostname:"media.istockphoto.com"
      },
      {
        protocol:"https",
        hostname:"ik.imagekit.io"
      }
    ]
  }
};

module.exports = nextConfig;
