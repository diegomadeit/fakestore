import React from "react";
import { Themed } from "theme-ui";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";

type ThemeProps = {
  children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <StyledRoot>
    <GlobalStyle />
    {children}
  </StyledRoot>
);

export default Theme;

const StyledRoot = styled(Themed.root)``;
