import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

const NotFound: React.FC = () => (
  <Layout>
    <NotFoundContainer>
      <p>Page not found</p>
    </NotFoundContainer>
  </Layout>
);

export default NotFound;

const NotFoundContainer = styled.div`
  min-height: calc(${props => props.theme.sizes.screenHeight} - 9.6rem);
`;
