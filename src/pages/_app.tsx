import "@/stylesheets/html.css";

import * as React from "react";

import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

import type { AppProps } from "@/types/next";
import { Footer } from "@/components/footer";
import Head from "next/head";
import NProgress from "nprogress";
import { Navbar } from "@/components/navbar";
import Router from "next/router";
import dynamic from "next/dynamic";
import { theme } from "@/theme";
import siteConfig from "~/site-config";

const MobileDrawer = dynamic(() =>
  import("@/components/mobile-drawer").then((C) => C.MobileDrawer),
);

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="Welcome!"
        titleTemplate={`%s · ${siteConfig.title}`}
        description={siteConfig.description}
        canonical={siteConfig.url + (router.asPath || "")}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.description,
          type: "website",
          // eslint-disable-next-line babel/camelcase
          site_name: siteConfig.title,
          images: [
            {
              url: `${siteConfig.url}/social.png`,
              width: 1024,
              height: 512,
              alt: siteConfig.title,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        type="person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />

      <ChakraProvider resetCSS theme={theme}>
        {Component.disableLayout ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Stack justify="space-between" minH="100vh" spacing={0}>
              <Navbar />
              <Box as="main">
                <Component {...pageProps} />
              </Box>
              <Footer />
            </Stack>

            <MobileDrawer />
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
