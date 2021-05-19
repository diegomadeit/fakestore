module.exports = {
  plugins: [
    {
      resolve: "@fyyc/gatsby-theme-store",
      options: {
        basePath: "/",
        productsPath: "/products",
        productPath: "/product"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "fakestore - @fyyc/gatsby-theme-store",
        short_name: "fakestore",
        description: "Store for young professionals",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#38a169",
        display: "standalone",
        icon: "icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
