// next.config.js
const webpack = require('webpack');

module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            stream: require.resolve('stream-browserify'),
            zlib: require.resolve('browserify-zlib'),
        };

        return config;
    },
};
