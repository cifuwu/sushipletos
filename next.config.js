/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'default',
    domains: ['cifu.blob.core.windows.net','cdnx.cifumakers.cl', 'cifumakers.blob.core.windows.net']
  }
}


module.exports = nextConfig
