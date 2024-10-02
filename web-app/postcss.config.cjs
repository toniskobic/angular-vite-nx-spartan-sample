/* eslint-disable @typescript-eslint/no-require-imports */
const { join } = require('node:path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.cjs')
    },
    autoprefixer: {}
  }
};
