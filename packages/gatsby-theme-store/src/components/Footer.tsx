import React from "react";
import styled from "@emotion/styled";

const Footer: React.FC = () => (
  <FooterContainer>
    <p>Copyright © diegomadeit 2021</p>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.muted};
  > p {
    text-align: center;
  }
`;
