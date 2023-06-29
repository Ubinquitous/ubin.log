import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc7FFDgbjdiVXQ3OfYbRjwKPujWh5BrK0",
  authDomain: "ubin-log.firebaseapp.com",
  databaseURL: "https://ubin-log-default-rtdb.firebaseio.com",
  projectId: "ubin-log",
  storageBucket: "ubin-log.appspot.com",
  messagingSenderId: "932426786912",
  appId: "1:932426786912:web:491bfc260f2547c598bb05",
};

export const app = initializeApp(firebaseConfig);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
