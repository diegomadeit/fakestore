import { tailwind } from "@theme-ui/presets";

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    fontSize: [5, 6, 7],
    mt: 2
  },
  h2: {
    ...tailwind.styles.h2,
    fontSize: [4, 5, 6],
    mt: 2
  },
  h3: {
    ...tailwind.styles.h3,
    fontSize: [3, 4, 5],
    mt: 3
  },
  h4: {
    ...tailwind.styles.h4,
    fontSize: [2, 3, 4]
  },
  h5: {
    ...tailwind.styles.h5,
    fontSize: [1, 2, 3]
  },
  h6: {
    ...tailwind.styles.h6,
    fontSize: 1,
    mb: 2
  }
};

export default {
  ...tailwind,
  useCustomProperties: true,
  space: [
    0,
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "4rem",
    "8rem",
    "16rem",
    "32rem"
  ],
  styles: {
    ...tailwind.styles,
    ...headingStyles,
    p: {
      fontSize: [1, 1, 2]
    }
  }
};
