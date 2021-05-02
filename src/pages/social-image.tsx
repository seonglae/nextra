import * as React from 'react'
import { Box, Divider, HStack, Heading, LightMode, Link, Stack } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import { NextSeo } from 'next-seo'

import { baseRenderer } from '@/utils/renderers'
import siteConfig from '~/site-config'

import type { NextPage } from '@/types/next'
import type { GetServerSideProps } from 'next'
import type { SocialImageParams } from '@/types'

const SocialImagePage: NextPage<SocialImageParams> = ({ title, description, path }) => {
  return (
    <LightMode>
      <NextSeo title={title} description={description} titleTemplate="%s" />
      <HStack borderColor="gray.100" borderWidth={8} h="512px" id="social-image" p={16} spacing={16} w="1024px">
        <Stack>
          <Box>
            <Heading size={title.length > 40 ? 'lg' : 'xl'}>{title}</Heading>
          </Box>

          <Box fontSize="lg">
            <Markdown renderers={baseRenderer} source={description} />
          </Box>

          <Box py={4}>
            <Divider />
          </Box>

          <Box>
            <Link href={path} isExternal variant="link">
              {path}
            </Link>
          </Box>
        </Stack>
      </HStack>
    </LightMode>
  )
}

SocialImagePage.disableLayout = true

export const getServerSideProps: GetServerSideProps<SocialImageParams> = async ({ query }) => ({
  props: {
    title: (query.title as string) || siteConfig.title,
    description: (query.description as string) || siteConfig.descriptionMd,
    path: `${siteConfig.url}${query.path ?? ''}`,
  },
})

export default SocialImagePage
