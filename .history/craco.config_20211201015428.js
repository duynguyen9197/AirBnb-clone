module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },

  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
