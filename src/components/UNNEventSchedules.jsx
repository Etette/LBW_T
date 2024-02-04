// App.js
"use client";

import {useEffect} from "react";
import {atcb_action} from "add-to-calendar-button";
import "add-to-calendar-button";
import {createColumnHelper} from "@tanstack/react-table";
import {Table} from "./Table";

const data = [
  {
    day: "4TH APRIL",
    topic: "Morning Session/Registration",
    speaker: "",
  },
  {
    day: "",
    topic: "Road To Web3",
    speaker: "Blockchain UNN",
  },
  {
    day: "5TH APRIL",
    topic: "Blockchain 101 and Intro To Blockchain Development",
    speaker: "Blocverse",
  },
  {
    day: "",
    topic: "Brunch",
    speaker: "",
  },
  {
    day: "",
    topic: "Intro To IPFS",
    speaker: "Hector (IPFS)",
  },
  {
    day: "6TH APRIL",
    topic: "Intro To Blockchain",
    speaker: "Ettete (ETH Nigeria)",
  },
  {
    day: "",
    topic: "Road To Web3",
    speaker: "Blockchain UNN",
  },
  {
    day: "",
    topic: "Road To Web3",
    speaker: "Blockchain UNN",
  },
  {
    day: "7TH APRIL",
    topic: "Intro To Blockchain",
    speaker: "Ettete (ETH Nigeria)",
  },
  {
    day: "",
    topic: "Road To Web3",
    speaker: "Blockchain UNN",
  },
  {
    day: "",
    topic: "Brunch",
    speaker: "",
  },
  {
    day: "",
    topic: "Brunch",
    speaker: "",
  },
  {
    day: "8TH APRIL",
    topic: "Intro To Blockchain",
    speaker: "Ettete (ETH Nigeria)",
  },
  {
    day: "",
    topic: "Road To Web3",
    speaker: "Blockchain UNN",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("day", {
    cell: (info) => <p>{info.getValue()}</p>,
    header: () => <span>DAY</span>,
  }),
  columnHelper.accessor("border1", {
    cell: (info) => (
      <p className="border-r border-[#414141] h-6">{info.getValue()}</p>
    ),
    header: () => <span className="border-r border-[#414141] h-6"></span>,
  }),
  columnHelper.accessor("topic", {
    cell: (info) => <p>{info.getValue()}</p>,
    header: () => <span>TOPIC</span>,
  }),
  columnHelper.accessor("border2", {
    cell: (info) => (
      <p className="border-r border-[#414141] h-6">{info.getValue()}</p>
    ),
    header: () => <span className="border-r border-[#414141] h-6"></span>,
  }),
  columnHelper.accessor("speaker", {
    cell: (info) => <p>{info.renderValue()}</p>,
    header: () => <span>SPEAKER</span>,
  }),
];

export default function EventSchedules() {
  useEffect(() => {
    const config = {
      name: "LBW-Hackathon UNN",
      description: "Add UNN BlockChain Event to Calender",
      startDate: "2024-04-04",
      startTime: "",
      endTime: "",
      options: ["Google"],
      timeZone: "Africa/Lagos",
    };

    const handleButtonClick = () => {
      atcb_action(config);
    };

    const button = document.getElementById("my-unn-calendar-button");

    if (button) {
      button.addEventListener("click", handleButtonClick);
      return () => {
        button.removeEventListener("click", handleButtonClick);
      };
    }
  }, []);
  return (
    <div id="hero" className="px-10">
      <Table data={data} columns={columns} title="Event Schedule" />

      <div className="lg:flex justify-center mt-10">
        <button
          id="my-unn-calendar-button"
          className="flex justify-center p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-[#FFFCE1] text-[#131313] px-10 lg:mb-10"
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
      </div>
    </div>
  );
}
