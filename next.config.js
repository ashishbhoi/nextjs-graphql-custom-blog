const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
        runtimeCaching,
        sw: 'service-worker.js',
        buildExcludes: [/middleware-manifest.json$/],
    },
    images: {
        domains: ['media.graphcms.com'],
    },
});