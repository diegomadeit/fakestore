import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyle: React.FC = () => (
  <Global
    styles={css`
      ${emotionNormalize}
    `}
  />
);

export default GlobalStyle;
