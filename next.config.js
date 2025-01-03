/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/host-react-app-on-github-pages' : '', 
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  }, 
  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig
