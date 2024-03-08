import React from "react";
import EventSchedules from "./UNNEventSchedules";

function EventSchedule() {
  const tableHeadings = ["DAY", "TOPIC", "SPEAKER"];
  const tableData = [["Data 1", "Data 2", "Data 3"]];

  return (
    <div
      id="hero"
      className="lg:p-20 p-6 text-white mt-[100px] flex flex-col table-auto md:table-auto sm:table-auto"
    >
      {" "}
      <EventSchedules headings={[{tableHeadings}]} data={[{tableData}]} />
      <p className="text-[30px] ">Event Schedule</p>
      <div className="mt-6 border border-[#FFFCE1] rounded-md p-3">
        <div className="flex justify-between border-b border-[#414141] p-3 sm:text-sm">
          <div className="w-[20%]">
            <p className="font-bold text-center">DAY</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="font-bold text-center">TOPIC</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className="font-bold text-center">SPEAKER</p>
          </div>
        </div>

        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              2<sup>ND</sup> MAY - 4<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center">Hackathon</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="text-center">Hackathon</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>

        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              6<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">Crypto101 Conference</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">- Introduction to Bitcoin and Blockchain</p>
            <br />
            <p className="">- Build your crypto portfolio</p>
            <br />
            <p className="">- Wallet Setup and Security workshop</p>
            <br />
            <p className="">
              - Beginner&rsquo;s guide to cryptocurrencies/ Understanding DeFi
              Protocols
            </p>
            <br />
            <p className="">- Decoding NFTs and Digital Collectibles</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>
        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              7<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">Creator Convergence Expo</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">- Introduction to Bitcoin and Blockchain</p>
            <br />
            <p className="">- Virtual Reality (VR) Creation workshop</p>
            <br />
            <p className="">- Augmented Reality (AR) Development workshop</p>
            <br />
            <p className="">- Blockchain Gaming Design Lab</p>
            <br />
            <p className="">- Digital Storytelling and Content Creation</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>
        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              8<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">Innovation Across Borders</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">- Creative Entrepreneurship Workshop</p>
            <br />
            <p className="">
              - Understanding Blockchain privacy with Aztec protocol
            </p>
            <br />
            <p className="">- Pitch / VC Fund</p>
            <br />
            <p className="">- Web3 Development Tools and Infrastructure</p>
            <br />
            <p className="">- Decentralized Social Networks</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>

        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              9<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">DWeb Storage Expo</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">
              - Practical hands-on exercises on using IPFS for file storage and
              retrieval
            </p>
            <br />
            <p className="">
              - Developing Applications that utilize Filecoin for distributed
              storage
            </p>
            <br />
            <p className="">
              - Practical exercises on integrating Swarm for decentralized
              storage
            </p>
            <br />
            <p className="">- Storj: Decentralized Cloud Storage Workshop</p>
            <br />
            <p className="">- NFT Storage Workshop</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>
        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              10<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">Web3 BuiDLers Workshop</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">
              - Interoperability and Bridges: Connecting Blockchains on Polkadot
            </p>
            <br />
            <p className="">
              - Developing Dapps on Optimistic Virtual Machine (OVM)
            </p>
            <br />
            <p className="">
              - Hermez Layer 2: Practical Workshop on zk-rollups
            </p>
            <br />
            <p className="">
              - DeFi on StarkWare: Optimizing and Scaling Finance Applications
            </p>
            <br />
            <p className="">
              - zkTube: Bridging Ethereum with Layer 2 zkRollup
            </p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>

        <div className="flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs">
          <div className="w-[20%]">
            <p className="text-center">
              11<sup>TH</sup> MAY 2024
            </p>
            <hr />
            <br />
            <p className="text-center font-bold">Web3 BuiDLers Summit</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[48%]">
            <p className="">- Analyzing Data Trends with The Graph</p>
            <br />
            <p className="">
              - Advanced Smart Contract Development on Ethereum
            </p>
            <br />
            <p className="">- Rust Programming for Solana Smart Contracts</p>
            <br />
            <p className="">
              - Polygon PoS Chain: Staking and validator Node Setup
            </p>
            <br />
            <p className="">- Liquidity Pool Management with Aave</p>
          </div>
          <div className="border-r border-[#414141]"></div>
          <div className="w-[25%]">
            <p className=""></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-white text-[#131313] px-10">
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

export default EventSchedule;
