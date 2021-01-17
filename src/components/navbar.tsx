import * as React from "react";

import { HStack, Icon, IconButton, Link, useColorMode } from "@chakra-ui/react";

import { FaMoon } from "react-icons/fa";
import NextLink from "next/link";
import routes from "@/routes";
import { useSocials } from "@/hooks/app";
import siteConfig from "~/site-config";

export const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const socials = useSocials();

  return (
    <HStack as="nav" fontSize="md" p={4} spacing={0}>
      <NextLink href="/">
        <Link fontWeight="bold" href="/" p={4} variant="link">
          {siteConfig.title}
        </Link>
      </NextLink>

      <HStack d={{ base: "none", md: "flex" }} spacing={0}>
        {routes.map(({ text, href, isExternal = false }) => (
          <React.Fragment key={href}>
            {isExternal ? (
              <Link href={href} isExternal p={4}>
                {text}
              </Link>
            ) : (
              <NextLink href={href} key={href}>
                <Link href={href} p={4}>
                  {text}
                </Link>
              </NextLink>
            )}
          </React.Fragment>
        ))}
      </HStack>

      <HStack
        flexGrow={1}
        justify="flex-end"
        p={4}
        spacing={{ base: 0, sm: 2 }}
      >
        {socials.map(([href, SocialIcon]) => (
          <IconButton
            as="a"
            aria-label={href}
            color="currentColor"
            href={href}
            icon={<Icon as={SocialIcon} boxSize={5} />}
            key={href}
            variant="link"
          />
        ))}
        <IconButton
          aria-label="toggle dark mode"
          color="currentColor"
          icon={<Icon as={FaMoon} boxSize={5} />}
          onClick={toggleColorMode}
          variant="link"
        />
      </HStack>
    </HStack>
  );
};
