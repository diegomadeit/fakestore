import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Product } from "../typings";

const ProductCard: React.FC<Product> = ({
  title,
  price,
  category,
  slug,
  localImage
}) => {
  const cardImage = getImage(localImage);

  return (
    <Card>
      <CardLink to={slug}>
        <GatsbyImage image={cardImage} alt="Another cool product" />
        <CardInfo>
          <h3>{title}</h3>
          <p>{price} €</p>
          <p>{category}</p>
        </CardInfo>
      </CardLink>
    </Card>
  );
};

export default ProductCard;

const Card = styled.article`
  background-color: ${props => props.theme.colors.muted};
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

const CardInfo = styled.div`
  margin: ${props => props.theme.space[5]};
`;
