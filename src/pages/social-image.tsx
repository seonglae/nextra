import * as React from "react";

import {
  Box,
  Divider,
  HStack,
  Heading,
  LightMode,
  Link,
  Stack,
} from "@chakra-ui/react";

import type { GetServerSideProps } from "next";
import { Logo } from "@/components/logo";
import Markdown from "react-markdown";
import type { NextPage } from "@/types/next";
import { NextSeo } from "next-seo";
import type { SocialImageParams } from "@/types";
import { baseRenderer } from "@/utils/renderers";
import siteConfig from "~/site-config";

const SocialImagePage: NextPage<SocialImageParams> = ({
  title,
  description,
  path,
}) => {
  return (
    <LightMode>
      <NextSeo title={title} description={description} titleTemplate="%s" />
      <HStack
        borderColor="gray.100"
        borderWidth={8}
        h="512px"
        id="social-image"
        p={16}
        spacing={16}
        w="1024px"
      >
        <Box>
          <Logo boxSize="2xs" />
        </Box>

        <Stack>
          <Box>
            <Heading size={title.length > 40 ? "lg" : "xl"}>{title}</Heading>
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
  );
};

SocialImagePage.disableLayout = true;

export const getServerSideProps: GetServerSideProps<SocialImageParams> = async ({
  query,
}) => {
  const t = (query.title as string) || siteConfig.title;
  const d = (query.description as string) || siteConfig.descriptionMd;
  const p = `${siteConfig.url}${query.path ?? ""}`;

  return {
    props: {
      title: t,
      description: d,
      path: p,
    },
  };
};

export default SocialImagePage;
