import * as React from 'react'

import { Button, Heading, Icon, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { FaCode, FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from '@/types/next'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          {siteConfig.description}
        </Heading>

        <Wrap justify="center" spacing={4}>
          <WrapItem>
            <Button
              as="a"
              bgColor={siteConfig.themeColor}
              href="https://doc.seongland.com"
              leftIcon={<Icon as={FaCode} />}
              target="_blank"
            >
              {' '}
              View usage
            </Button>
          </WrapItem>

          <WrapItem>
            <Button as="a" href={siteConfig.socials.GitHub} leftIcon={<Icon as={FaGithub} />}>
              View source on GitHub
            </Button>
          </WrapItem>
        </Wrap>
      </Stack>
    </>
  )
}

export default HomePage
