import React from "react";
import cx from "classnames";
import Button from "./Button";
import {BUTTON_VARIANT} from "@/constants";

const EventCardBig = ({
  title,
  image,
  date,
  captions,
  buttonClassName,
  titleClassName,
}) => {
  return (
    <div>
      <div
        id="hero"
        className="my-6 lg:flex justify- p-6 border-[#414141] rounded-md"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-once="true"
        data-aos-duration="700"
      >
        <div>
          <img src={image} className="lg:h-52 sm:w-full object-cover" alt="" />
        </div>
        <div className="lg:ml-4 sm:mt-3 lg:w-[35%] text-[#FFFCE1]">
          <p className={cx(`text-2xl`)}>{title}</p>
          <p className=" text-2xl mt-4">{date}</p>

          <span className={cx(`lg:flex mt-10  `, buttonClassName)}>
            <Button
              label="Register"
              variant={BUTTON_VARIANT.LIGHT}
              className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-b-4 border-[#5CB7FE] px-8"
            />
            <Button
              label="Learn More"
              variant={BUTTON_VARIANT.DARK}
              svgclassName="fill-[#FFFCE1]"
              className="flex p-4 lg:px-6 sm:w-full sm:mt-4 justify-center lg:ml-2 rounded-md border border-white border-b-4"
            />
          </span>
        </div>
        <div className="border-r border-[#414141] w-8"></div>
        <div className=" text-[#FFFCE1] lg:mx-16 mt-8">
          {captions.map((caption) => (
            <div className="flex mt-4 text-sm">
              <img src={caption.icon} />
              <p className="ml-2 text-[#FFFCE1]">{caption.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCardBig;
