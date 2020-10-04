/* eslint-disable import/prefer-default-export */

import * as React from "react";

import { Link as ChakraLink, Text } from "@chakra-ui/core";

export const baseRenderer = {
  link: function Link({ href, children }) {
    return (
      <ChakraLink href={href} isExternal variant="link">
        {children}
      </ChakraLink>
    );
  },

  paragraph: Text,
};
