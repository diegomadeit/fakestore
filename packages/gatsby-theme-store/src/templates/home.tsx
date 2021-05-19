import React from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";
import { Template } from "../typings";

const HomeTemplate: React.FC<Template> = ({ pageContext }) => {
  const { layout } = pageContext;
  const { products } = useProducts();

  return (
    <Layout layout={layout}>
      <ProductList products={products} />
    </Layout>
  );
};

export default HomeTemplate;
