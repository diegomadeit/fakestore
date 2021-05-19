import { useStaticQuery, graphql } from "gatsby";
import { Products, Product } from "../typings";

type UseProductsProps = {
  allProduct: {
    edges: {
      node: Product;
    }[];
  };
};

const normalizeProduct = ({ node: product }) => ({ ...product });

const useProducts = (): Products => {
  const data = useStaticQuery<UseProductsProps>(graphql`
    {
      allProduct {
        edges {
          node {
            id
            title
            price
            category
            slug
            localImage {
              childImageSharp {
                gatsbyImageData(
                  width: 768
                  placeholder: BLURRED
                  transformOptions: { cropFocus: NORTH }
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
    }
  `);

  const products = data.allProduct.edges.map(normalizeProduct);

  return { products };
};

export default useProducts;
