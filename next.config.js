/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' },
      '/resetPassword': { page: '/resetPassword' },
    }
  },
}