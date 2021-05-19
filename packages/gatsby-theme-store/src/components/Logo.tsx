import React from "react";
import styled from "@emotion/styled";
import LogoSvg from "../assets/svg/logo.inline.svg";

const Logo: React.FC = () => <LogoStore />;

export default Logo;

const LogoStore = styled(LogoSvg)`
  width: auto;
  height: ${props => props.theme.sizes["8"]};
`;
