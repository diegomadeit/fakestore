import React from "react";
import styled from "@emotion/styled";
import { Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ProductInfo } from "../typings";

const ProductDetails: React.FC<ProductInfo> = ({
  title,
  price,
  category,
  description,
  localImage
}) => {
  const image = getImage(localImage);

  return (
    <section>
      <Title>{title}</Title>
      <DetailsContainer>
        <GatsbyImage image={image} alt="Another cool product" />
        <DetailsInfo>
          <p>{price} €</p>
          <p>{description}</p>
          <p>{category}</p>
          <BuyButton onClick={() => console.log(`Added to basket: ${title}`)}>
            Add to basket
          </BuyButton>
        </DetailsInfo>
      </DetailsContainer>
    </section>
  );
};

export default ProductDetails;

const Title = styled(Themed.h1)`
  margin: ${props => props.theme.space[6]} ${props => props.theme.space[0]};
  text-align: center;
`;

const DetailsContainer = styled.div`
  margin: ${props => props.theme.space[6]} ${props => props.theme.space[0]};

  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 0 0 100%;
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      flex: 0 0 50%;
    }
  }
`;

const DetailsInfo = styled.div`
  background-color: ${props => props.theme.colors.muted};
  padding: ${props => props.theme.space[5]};
`;

const BuyButton = styled.button`
  border: none;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.green[6]};
  padding: ${props => props.theme.space[3]};
  text-align: center;
`;
