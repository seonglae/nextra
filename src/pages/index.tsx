import * as React from "react";

import { Button, Heading, Icon, Stack, Wrap } from "@chakra-ui/core";
import { FaCode, FaGithub } from "react-icons/fa";

import Link from "next/link";
import Logo from "@/components/logo";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "~/site-config";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Logo boxSize="full" maxW={48} />

        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          {siteConfig.description}
        </Heading>

        <Wrap justify="center" spacing={4}>
          <Link href="/usage" passHref>
            <Button as="a" colorScheme="yellow" leftIcon={<Icon as={FaCode} />}>
              {" "}
              View usage
            </Button>
          </Link>
          <Button
            as="a"
            href={siteConfig.socials.GitHub}
            leftIcon={<Icon as={FaGithub} />}
          >
            View source on GitHub
          </Button>
        </Wrap>
      </Stack>
    </>
  );
};

export default HomePage;
