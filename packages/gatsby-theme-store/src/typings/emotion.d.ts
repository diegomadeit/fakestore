import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: string[];
    sizes: {
      [key: string]: string;
    };
    space: string[];
    colors: {
      [key: string]: string;
    };
    zIndices: {
      [key: string]: string;
    };
    shadows: {
      [key: string]: string;
    };
  }
}
