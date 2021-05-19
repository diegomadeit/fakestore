const fetch = require("node-fetch");

module.exports = async ({ actions, createNodeId, createContentDigest }) => {
  const { createTypes, createNode } = actions;

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  createTypes(`
    type Product implements Node @dontInfer {
      id: ID!
      title: String!
      description: String!
      image: String!
      price: String!
      category: String!
      slug: String!
    }
  `);

  products.forEach(node => {
    createNode({
      ...node,
      id: createNodeId(`Product-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: "Product",
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    });
  });
};
