"use client";
import React, {Fragment, useEffect} from "react";
import {atcb_action} from "add-to-calendar-button";
import "add-to-calendar-button";

import HeaderNav from "./HeaderNav";

function HeroSection() {
  useEffect(() => {
    const config = {
      name: "Lagos Blockchain week",
      dates: [
        {
          name: "LBW-Hackathon",
          description: "2nd - 4th May, 2024",
          startDate: "2024-05-02",
          startTime: "",
          endTime: "",
        },
        {
          name: "Lagos Blockchain Week",
          description: "6th - 11th May, 2024",
          startDate: "2024-05-06",
          startTime: "",
          endTime: "",
        },
      ],
      description: "Add Lagos BlockChain to Calender",
      options: ["Google"],
      timeZone: "Africa/Lagos",
    };

    const handleButtonClick = () => {
      atcb_action(config);
    };

    const button = document.getElementById("my-calendar-button");

    if (button) {
      button.addEventListener("click", handleButtonClick);
      return () => {
        button.removeEventListener("click", handleButtonClick);
      };
    }
  }, []);

  return (
    <Fragment>
      {/* section1 */}
      <HeaderNav />

      <section
        id="hero"
        className="text-[#FFFCE1] lg:h-[100vh] lg:p-16 p-6 sm:py-16"
      >
        <img
          className="ml-auto mr-8 lg:w-40 w-14"
          src="./images/circular-button.png"
          alt=""
        />
        <p className="lg:text-[70px] tracking-widest text-2xl">LAGOS</p>
        <div className="w-[95%]">
          <h1 className="lg:text-[140px] py-8 my-3 text-4xl leading-none">
            BLOCKCHAIN{" "}
          </h1>
          <p className="lg:text-[70px] text-2xl float-right">WEEK</p>
        </div>
        <p className="lg:text-[24px] sm:mt-14 my-4">
          Hackathon: 2<sup>nd</sup> - 4<sup>th</sup>, May 2024
        </p>
        <p className="lg:text-[24px] my-4">
          Lagos Blockchain Week: 6<sup>th</sup> - 11<sup>th</sup>, May 2024
        </p>
        <div className="lg:flex mt-10">
          <button
            id="my-calendar-button"
            className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-[#FFFCE1] text-[#131313] px-10"
          >
            <p className="mr-2 my-auto">Add to calender</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>

          <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-[#FFFCE1] border-b-4 px-10">
            <p className="mr-2 my-auto">Become a Sponsor</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </section>
      {/* section 2
      <div className=" lg:mx-[50px] mx-4 ">
        <p className=" text-[30px] font-bold">Happening Live at</p>
        <div className="flex flex-col md:grid md:grid-rows-2 gap-y-0  md:grid-cols-8 border-solid  border-blue rounded border-2 mt-6">
          <div className="col-span-5 flex flex-col justify-center items-center p-3">
            <p className=" text-[60px] font-bold">The Zone Tech,</p>
            <p className=" text-[60px] font-bold">Gbagada Lagos</p>
          </div>

          <img className="col-span-3 h-full w-full" src="./images/image1.png" />
          <img className="col-span-8 h-full w-full" src="./images/image2.png" />
        </div>
      </div> */}
    </Fragment>
  );
}

export default HeroSection;
