import React from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";

const ProductsTemplate: React.FC = () => {
  const { products } = useProducts();

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsTemplate;
