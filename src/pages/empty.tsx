import * as React from "react";

import type { NextPage } from "@/types/next";
import { NextSeo } from "next-seo";

const EmptyPage: NextPage = () => {
  return <NextSeo title="Empty" />;
};

export default EmptyPage;
