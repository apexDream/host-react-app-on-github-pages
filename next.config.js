/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/host-react-app-on-github-pages' : '', 
  // reactStrictMode: true,
  // swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  }, 
  distDir: 'dist',
}

module.exports = nextConfig
