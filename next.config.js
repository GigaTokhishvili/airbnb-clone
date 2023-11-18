/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'public.opendatasoft.com',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
      },
    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZHVtYmxlZG9yZS1ydWxlcyIsImEiOiJjbG9xZ21rZmYwaG4yMnFzODN2bmFicGl4In0.TACto9y1XIS6bw2F1J2fBg',
  },
  reactStrictMode: true,
}

module.exports = nextConfig