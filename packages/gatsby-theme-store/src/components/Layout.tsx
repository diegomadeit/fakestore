import React from "react";
import styled from "@emotion/styled";
import Theme from "./Theme";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

type LayoutProps = {
  layout?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ layout = "", children }) => (
  <Theme>
    <Container>
      <Header />
      {layout === "home" && <Hero />}
      <Main>{children}</Main>
      <Footer />
    </Container>
  </Theme>
);

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${props => props.theme.sizes.screenHeight};
`;

const Main = styled.main`
  display: grid;
  grid-template-columns:
    [full-start] ${props => props.theme.space[5]}
    [main-start] 1fr
    [main-end] ${props => props.theme.space[5]}
    [full-end];
  > * {
    grid-column: main;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns:
      [full-start] 1fr
      [main-start] ${props => props.theme.sizes["2xl"]}
      [main-end] 1fr
      [full-end];
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns:
      [full-start] 1fr
      [main-start] ${props => props.theme.sizes["4xl"]}
      [main-end] 1fr
      [full-end];
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns:
      [full-start] 1fr
      [main-start] ${props => props.theme.sizes["6xl"]}
      [main-end] 1fr
      [full-end];
  }
`;
