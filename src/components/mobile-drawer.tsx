import * as React from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

import NextLink from "next/link";
import routes from "@/routes";
import { useSocials } from "@/hooks/app";
import siteConfig from "~/site-config";

export const MobileDrawer: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();

  const socials = useSocials();

  return (
    <>
      <Box bottom={0} d={{ md: "none" }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          colorScheme="yellow"
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <NextLink href="/">
                <Link href="/" onClick={onClose} variant="link">
                  {siteConfig.title}
                </Link>
              </NextLink>
            </DrawerHeader>

            <DrawerBody
              as={Stack}
              fontSize="lg"
              justify="center"
              p={8}
              spacing={4}
            >
              {[{ text: "Home", href: "/" }, ...routes].map(
                ({ text, href, isExternal = false }) => (
                  <React.Fragment key={href}>
                    {isExternal ? (
                      <Link href={href} isExternal onClick={onClose}>
                        {text}
                      </Link>
                    ) : (
                      <NextLink href={href} key={href}>
                        <Link href={href} onClick={onClose}>
                          {text}
                        </Link>
                      </NextLink>
                    )}
                  </React.Fragment>
                ),
              )}
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
              {socials.map(([href, SocialIcon]) => (
                <IconButton
                  as="a"
                  aria-label={href}
                  color="currentColor"
                  href={href}
                  icon={<Icon as={SocialIcon} boxSize={6} />}
                  key={href}
                  size="lg"
                  variant="link"
                />
              ))}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
