import React from "react";
import styled from "@emotion/styled";
import { Themed } from "theme-ui";
import { Products } from "../typings";
import ProductCard from "./ProductCard";

const ProductList: React.FC<Products> = ({ products }) => (
  <section>
    <Title>Trends for young professionals</Title>
    <ProductListContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          slug={product.slug}
          localImage={product.localImage}
        />
      ))}
    </ProductListContainer>
  </section>
);

export default ProductList;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.space[5]};
  width: ${props => props.theme.sizes.full};
  margin: ${props => props.theme.space[6]} ${props => props.theme.space[0]};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: auto;
  }
`;

const Title = styled(Themed.h2)`
  margin: ${props => props.theme.space[6]} ${props => props.theme.space[0]};
  text-align: center;
`;
