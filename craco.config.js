const path = require(`path`);

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
        'components': path.resolve(__dirname, 'src/components'),
        "assets": path.resolve(__dirname, 'src/assets'),
        "utils": path.resolve(__dirname, 'src/utils')
    }
  }
}