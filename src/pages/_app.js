"use client";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

export default function App({Component, pageProps}) {
  useEffect(() => {
    Aos.init({
      disable: "mobile", // Disable on mobile devices
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return <Component {...pageProps} />;
}
