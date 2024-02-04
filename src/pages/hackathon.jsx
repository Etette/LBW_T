import React from "react";

export default function hackathon() {
  return (
    <div>
      <title>Lagos BlockChain Week | Hackathon</title>
      <img
        src="./images/hackathon.png"
        className="sm:h-[80vh] object-cover object-fill"
        alt=""
      />
      <div className="absolute top-0 w-full">
        <HeaderNav />
        <img
          className="ml-auto mr-16 lg:w-32 w-14"
          src="./images/circular-button.png"
          alt=""
        />

        <div className="text-white lg:flex flex-col justify-center text-center lg:p-12 sm:py-12 sm:pt-32 leading-8">
          <p className="">Blockchain Week Hackathon: 2nd - 4th, May 2024</p>
          <p className="">Lagos Blockchain Week: 6th - 11th, May 2024</p>

          <div className="lg:flex justify-center mt-4">
            <Button label="Become a sponsor" className="" />
            <Button
              label="Partner with us"
              variant={BUTTON_VARIANT.DARK}
              svgclassName="fill-[#FFFCE1]"
              className="bg-opacity-10 border border-[#fffdef] border-b-4 lg:ml-6 border-r-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
