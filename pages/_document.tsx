import axios from "axios";
import { Html, Head, Main, NextScript } from "next/document";

axios.defaults.baseURL = "https://ubin-log.vercel.app/";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
