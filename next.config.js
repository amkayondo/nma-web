/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/auth/LoginPage' },
      '/signup': { page: '/auth/SignUpPage' },
      '/resetPassword': { page: '/auth/ResetPasswordPage' },
    }
  },
}