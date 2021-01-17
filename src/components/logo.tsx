import * as React from "react";

import { Box, Icon } from "@chakra-ui/react";

import type { IconProps } from "@chakra-ui/react";

export const Logo: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 1024 1024" {...props}>
      <Box as="circle" cx="512" cy="512" r="512" fill="yellow.300" />
      <path
        d="M629.514 278.057H768L684.109 768 430.44 533.389l-36.619 212.554H256L339.225 256l253.67 234.611 36.619-212.554z"
        fill="#1A202C"
      />
    </Icon>
  );
};
