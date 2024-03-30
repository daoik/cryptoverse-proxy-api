// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Resolve 'src' folder for imports
    config.resolve.alias["src"] = __dirname;

    // Important: return the modified config
    return config;
  },
};
