module.exports = {
  webpack: {
    style: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },

    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
