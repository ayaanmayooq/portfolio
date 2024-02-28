const withMDX = require('@next/mdx')();

module.exports = {
  // ... other configurations

  // Combine withMDX and webpack configuration
  ...withMDX,
  webpack: (config, { isServer }) => {
    // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
