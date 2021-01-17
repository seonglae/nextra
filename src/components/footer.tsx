import * as React from "react";

import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";

import Markdown from "react-markdown";
import NextLink from "next/link";
import { baseRenderer } from "@/utils/renderers";
import routes from "@/routes";
import { useSocials } from "@/hooks/app";

export const Footer: React.FC = () => {
  const socials = useSocials();

  const content = `
    Made using [Next.js](https://nextjs.org) and [Chakra UI](https://next.chakra-ui.com).
    Hosted on [Vercel](https://vercel.com). <br />
    MIT License &copy; ${new Date().getFullYear()}&ndash;present [Griko Nibras](.).
  `
    .trim()
    .replace(/\s{3,}/, " ");

  return (
    <Stack as="footer" pb={16} pt={8} spacing={8}>
      <Box px={8}>
        <Divider />
      </Box>
      <Flex
        alignItems="flex-start"
        flexDir="row"
        justifyContent="space-between"
        px={8}
      >
        <Stack spacing={8}>
          <Box>
            <Markdown
              escapeHtml={false}
              renderers={baseRenderer}
              source={content.trim()}
            />
          </Box>
          <HStack spacing={6}>
            {socials.map(([href, SocialIcon]) => (
              <Link href={href} isExternal key={href}>
                <Icon as={SocialIcon} boxSize={5} />
              </Link>
            ))}
          </HStack>
        </Stack>

        <Stack
          d={{ base: "none", sm: "flex" }}
          pl={8}
          spacing={1}
          textAlign="right"
        >
          {routes.map(({ text, href, isExternal = false }) => (
            <React.Fragment key={href}>
              {isExternal ? (
                <Link href={href} isExternal>
                  {text}
                </Link>
              ) : (
                <NextLink href={href} key={href}>
                  <Link href={href}>{text}</Link>
                </NextLink>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Flex>
    </Stack>
  );
};
