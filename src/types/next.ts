import type { NextPage as BaseNextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";

export type NextPage<P = {}, IP = P> = BaseNextPage<P, IP> & {
  disableLayout?: boolean;
};

export type AppProps<P = {}, IP = P> = NextAppProps<P> & {
  Component: NextPage<P, IP>;
};
