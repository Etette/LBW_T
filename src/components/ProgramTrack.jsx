import React from "react";
import Button from "./Button";
import EventCardSmall from "./EventCardSmall";
import EventCardBig from "./EventCardBig";

function ProgramTrack() {
  return (
    <div className="lg:mx-[50px] mx-4 my-20">
      <div className="">
        <h3 className="font-bold text-[30px]">Major Events</h3>
      </div>

      <EventCardBig
        title=" Lagos Blockchain Week (LBW) Hackathon"
        date="2nd - 4th May, 2024"
        image="./images/lbw.png"
        captions={[
          {icon: "./images/pin-alt.png", text: "Connected Web3, Innovation"},
          {icon: "../images/candles-v.png", text: "Pan-African Collaboration"},
          {icon: "./images/pin-alt.png", text: "BuiDLing"},
        ]}
      />

      <div className="lg:flex justify-between">
        <EventCardSmall
          image="./images/image 22.png"
          title="Crypto 101 Conference"
          date="6th May, 2024"
          description="Introduction to Bitcoin and Blockchain"
        />
        <EventCardSmall
          image="./images/image 13.png"
          title="Creator Convergence Expo"
          titleClassName="max-w-54"
          date="7th May, 2024"
          description="Virtual reality (VR) creation workshop"
        />
      </div>

      <EventCardBig
        title="Innovation Across Borders (Pitch/VC Fund Day)"
        date="8th May, 2024"
        buttonClassName=""
        image="./images/image 13.png"
        captions={[
          {
            icon: "./images/icon 2.png",
            text: "Creative entrepreneurship workshop",
          },
          {
            icon: "../images/candles-v.png",
            text: "Understanding blockchain privacy with Aztec protocol",
          },
          {icon: "./images/pin-alt.png", text: "Pitch/VC Fund"},
        ]}
      />

      <div className="lg:flex justify-between">
        <EventCardSmall
          title="DWeb Storage Expo"
          descriptionClassName="max-w-44"
          image="./images/image 21.png"
          date="9th May, 2024"
          description="Practical exercises on using Decentralized storage and retrieval"
        />
        <EventCardSmall
          image="./images/unsplash_SYTO3xs06fU.png"
          title="Web3 BuiDLers Workshop"
          date="10th May, 2024"
          description="Developing dApps on virtual machine"
        />
      </div>

      <EventCardBig
        title=" Web3 BuiDLers Submit"
        buttonClassName="lg:mt-16"
        date="11th May, 2024"
        image="./images/image 19.png"
        captions={[
          {icon: "./images/pin-alt.png", text: "Blockchain Interoperability"},
          {
            icon: "../images/candles-v.png",
            text: "Advanced smart contract development ",
          },
          {icon: "./images/pin-alt.png", text: "---"},
        ]}
      />
    </div>
  );
}

export default ProgramTrack;
