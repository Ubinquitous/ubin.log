import axios from "axios";
import { Html, Head, Main, NextScript } from "next/document";

axios.defaults.baseURL = "http://localhost:3000";

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
