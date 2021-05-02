import * as React from 'react'

import { Link as ChakraLink, Text } from '@chakra-ui/react'

export const baseRenderer = {
  link({ href, children }) {
    return (
      <ChakraLink href={href} isExternal variant="link">
        {children}
      </ChakraLink>
    )
  },

  paragraph: Text,
}
