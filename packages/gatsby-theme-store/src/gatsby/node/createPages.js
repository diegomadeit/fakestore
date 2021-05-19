const path = require("path");

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions;
  const { basePath = "/", productsPath = "/products" } = options;

  const templatesDirectory = path.resolve(__dirname, "../../templates");
  const templates = {
    home: path.resolve(templatesDirectory, "home.tsx"),
    products: path.resolve(templatesDirectory, "products.tsx"),
    product: path.resolve(templatesDirectory, "product.tsx")
  };

  const createHomePage = () => {
    createPage({
      path: basePath,
      component: templates.home,
      context: {
        layout: "home"
      }
    });
  };

  const createProductsPage = () => {
    createPage({
      path: productsPath,
      component: templates.products,
      context: {}
    });
  };

  const createProductPage = product => {
    const { id, slug } = product;

    createPage({
      path: slug,
      component: templates.product,
      context: {
        productId: id
      }
    });
  };

  const getProducts = async () => {
    const result = await graphql(`
      query {
        allProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    return result;
  };

  const products = await getProducts();
  const allProduct = products.data.allProduct.edges;

  createHomePage();
  createProductsPage();
  allProduct.forEach(({ node: product }) => {
    createProductPage(product);
  });
};
