import * as React from "react";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const EmptyPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Empty" />
    </>
  );
};

export default EmptyPage;
