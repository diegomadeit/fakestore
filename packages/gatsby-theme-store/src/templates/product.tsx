import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { ProductInfo } from "../typings";
import ProductDetails from "../components/ProductDetails";

type ProductTemplateProps = {
  data: {
    product: ProductInfo;
  };
};

export const query = graphql`
  query ($productId: String) {
    product(id: { eq: $productId }) {
      id
      title
      price
      category
      description
      localImage {
        childImageSharp {
          gatsbyImageData(
            width: 768
            placeholder: BLURRED
            transformOptions: { cropFocus: NORTH }
            aspectRatio: 1
          )
        }
      }
    }
  }
`;

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  data: { product }
}) => (
  <Layout>
    <ProductDetails
      id={product.id}
      title={product.title}
      price={product.price}
      category={product.category}
      description={product.description}
      localImage={product.localImage}
    />
  </Layout>
);

export default ProductTemplate;
