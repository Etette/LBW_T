import React from "react";
import Button from "./Button";
import {BUTTON_VARIANT} from "@/constants";

const SponsorsLayout = ({title, topImages, bottomImages}) => {
  return (
    <div>
      <p className="text-[30px] font-bold">{title}</p>

      <div className="mt-6 lg:flex justify-between lg:w-[70%]">
        {topImages.map((image) => (
          <div className="">
            <img src={image.icon} alt={image.alt} className="h-12 sm:my-3" />
          </div>
        ))}
      </div>
      <div className="lg:mt-8 lg:flex justify-between lg:w-[80%]">
        {bottomImages.map((image) => (
          <div className="">
            <img src={image.icon} alt={image.alt} className="h-12 sm:my-3" />
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-8"></div> */}
    </div>
  );
};

export default SponsorsLayout;
