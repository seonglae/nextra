import * as React from 'react'

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
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'

import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'

export const MobileDrawer: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  const socials = useSocials()

  return (
    <>
      <Box bottom={0} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          bgColor={siteConfig.themeColor}
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <Link href="/" onClick={onClose} variant="link">
                {siteConfig.title}
              </Link>
            </DrawerHeader>

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
  )
}
