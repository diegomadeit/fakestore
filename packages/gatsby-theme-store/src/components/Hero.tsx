import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { Themed } from "theme-ui";

const Hero: React.FC = () => (
  <HeroContainer>
    <StaticImage
      style={{
        gridArea: "1/1"
      }}
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2589"
      alt=""
      placeholder="blurred"
      layout="fullWidth"
    />
    <div
      style={{
        gridArea: "1/1",
        position: "relative",
        placeItems: "center",
        display: "grid"
      }}
    >
      <HeroContent>Smart and fresh</HeroContent>
    </div>
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled.div`
  display: grid;
  height: calc(
    ${props => props.theme.sizes.screenHeight} -
      ${props => props.theme.sizes["24"]}
  );
  width: ${props => props.theme.sizes.full};
`;

const HeroContent = styled(Themed.h1)`
  color: ${props => props.theme.colors.green[6]};
`;
