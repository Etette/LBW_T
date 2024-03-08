import React from "react";
import Image from "next/image";
import Button from "./Button";
import {BUTTON_VARIANT} from "@/constants";

const Partners = () => {
  return (
    <div
      id="footer"
      className="lg:p-20 p-6 mt-[100px] text-white flex flex-col"
    >
      <p className="text-[30px] font-bold">Our Partners</p>
      <div className="mt-6 lg:flex justify-between lg:w-[70%]">
        <Image
          className="h-12 sm:my-3"
          src="/images/sponsors icon/black/img1 (1).png"
          alt="icon"
          width={174}
          height={48}
        />
        <img
          className="h-12 sm:my-3"
          src="./images/sponsors icon/black/img1 (2).png"
          alt="icon"
          width={246}
          height={48}
        />
        <img
          className="h-12 sm:my-3"
          src="./images/sponsors icon/black/img1 (3).png"
          alt="icon"
          width={119}
          height={48}
        />
      </div>
      <div className="lg:mt-8 lg:flex justify-between lg:w-[80%]">
        <img
          className="h-12 sm:my-3"
          src="./images/sponsors icon/black/img1 (4).png"
          alt="icon"
          width={136}
          height={48}
        />
        <img
          className="h-12 sm:my-3"
          src="./images/sponsors icon/black/img1 (5).png"
          alt="icon"
          width={330}
          height={48}
        />
        <img
          className="h-12 sm:my-3"
          src="./images/sponsors icon/black/img1 (6).png"
          alt="icon"
          width={185}
          height={48}
        />
      </div>
      <div className="flex justify-center mt-8">
        <Button
          href="/"
          variant={BUTTON_VARIANT.DARK}
          label="Become a partner"
          className="flex justify-center"
          svgclassName="fill-[#FFFCE1]"
        />
      </div>
    </div>
  );
};

export default Partners;
