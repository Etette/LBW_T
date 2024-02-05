import React from "react";
import cx from "classnames";
import HeaderNav from "@/components/HeaderNav";
import Button from "@/components/Button";
import {BUTTON_VARIANT} from "@/constants";
import Footer from "@/components/Footer";

export default function hackathon({className, titleClassName}) {
  return (
    <div>
      <title>Lagos BlockChain Week | Hackathon</title>
      <img
        src="./images/hackathon-image.png"
        className="sm:h-[80vh] object-cover object-fill"
        alt="hero-img"
      />
      <div className="absolute top-0 w-full">
        <HeaderNav />
        <img
          className="ml-auto mr-16 lg:w-32 w-14 sm:mt-8"
          src="./images/circular-button.png"
          alt="circular-button"
        />

        <div className="text-white lg:flex flex-col justify-center text-center lg:p-12 sm:py-12 sm:pt-12 leading-8">
          <p className="">Blockchain Week Hackathon: 2nd - 4th, May 2024</p>
          <p className="">Lagos Blockchain Week: 6th - 11th, May 2024</p>

          <div className="lg:flex items-center justify-center sm:px-6 mt-4">
            <Button
              href="https://forms.gle/Hz5RV1NCxZNfGbWQ6"
              label="Register for hackathon"
              className=""
              labelClassName="text-center"
            />
            <Button
              href="https://forms.gle/sckuU6n1YrKnzDeVA"
              label="Sponsor the Bounty Track"
              variant={BUTTON_VARIANT.DARK}
              svgclassName="fill-[#FFFCE1]"
              className="bg-opacity-10 border border-[#fffdef] border-b-4 lg:ml-6 border-r-4 "
              labelClassName="text-center"
            />
          </div>
        </div>
      </div>{" "}
      <div className="lg:mx-[50px] mx-4 my-16">
        <div className="">
          <h3 className="font-bold text-[30px] sm:mb-10">The LBW Hackathon</h3>
        </div>
        <div
          id="hero"
          className="lg:flex lg:w-full justify-between border p-4 rounded-md "
        >
          <div className="sm:py-2 text-[#fff] sm:mt-2 lg:ml-4 ">
            <p className={cx(`text-2xl lg:py-20 sm:mb-10`, titleClassName)}>
              Blockchain Interoperability Hackathon
            </p>
            <Button
              href="https://forms.gle/Hz5RV1NCxZNfGbWQ6"
              label="Register"
              variant={BUTTON_VARIANT.LIGHT}
              className="flex sm:w-full sm:mt-4 rounded-md bg-[#fffdef] border border-[#5CB7FE] border-b-4  lg:mt-auto sm:mb-2 items-center justify-center"
              labelClassName="text-[#131313] text-center  my-auto"
            />
          </div>
          <div>
            <img
              src="./images/image 25.png"
              className=" sm:w-full object-cover justify-end "
              alt="hackaton"
            />
          </div>

          <span className="flex"></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
