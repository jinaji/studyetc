import React from "react";
import type { AppProps } from "next/app";
import { Header } from "../../common/component/Layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps}></Component>
    </div>
  );
}
