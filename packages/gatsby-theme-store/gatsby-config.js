module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-remote-images",
      options: {
        nodeType: "Product",
        imagePath: "image"
      }
    }
  ]
};
