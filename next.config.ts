/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // enable static HTML export
  images: {
    unoptimized: true,        // disable Next.js image optimization
  },
}

module.exports = nextConfig
