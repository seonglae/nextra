import { theme as defaultTheme, extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const body = `Jost,${defaultTheme.fonts.body}`;
const heading = `Jost,${defaultTheme.fonts.heading}`;
const mono = `Cousine,${defaultTheme.fonts.mono}`;

export const theme = extendTheme({
  components: {
    Link: {
      variants: {
        link: (props) => ({
          color: mode("yellow.700", "yellow.300")(props),
        }),
      },
    },
  },
  fonts: {
    body,
    heading,
    mono,
  },
});
