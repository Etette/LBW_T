"use client";
import {useEffect} from "react";

import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import Speakers from "@/components/Speakers";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google";

import {Fragment} from "react";
import ProgramTrack from "@/components/ProgramTrack";
import EventSchedule from "@/components/EventSchedule";
import Partners from "@/components/Partners";
import Join from "@/components/Join";
import EventSchedules from "@/components/UNNEventSchedules";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <Fragment>
      <title>Lagos BlockChain Week</title>
      {/* <HeaderNav /> */}
      <HeroSection />

      {/* <div className=" lg:mx-[50px] mx-4 mt-[100px] flex flex-col">
        <h3 className="font-bold text-[30px]">Join us at</h3>
        <img src="./images/join-us.png" className="rounded-md mt-4" alt="" />
      </div> */}
      <ProgramTrack />
      {/* <Speakers /> */}
      <Join />

      {/* <EventSchedules /> */}
      {/* <Partners />
      <Sponsor /> */}
      <Footer />
    </Fragment>
  );
}
