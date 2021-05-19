import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "./Logo";

const Footer: React.FC = () => (
  <FooterContainer>
    <Link to="/">
      <Logo />
    </Link>
    <p>Copyright © diegomadeit 2021</p>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.muted};
  > a {
    padding: ${props => props.theme.space[0]} ${props => props.theme.space[2]};
    align-self: center;
  }
`;
