import React from "react";
import Button from "./Button";
import SponsorsLayout from "./SponsorsLayout";
import {BUTTON_VARIANT} from "@/constants";

function Sponsor() {
  return (
    <div id="hero" className="lg:p-20 p-6 mt-[100px] text-white flex flex-col">
      <SponsorsLayout
        title="Our Sponsors"
        topImages={[
          {
            icon: "./images/sponsors icon/img-1.png",
            alt: "img-1",
          },
          {
            icon: "./images/sponsors icon/img-2.png",
            alt: "img-2",
          },
          {
            icon: "./images/sponsors icon/img-3.png",
            alt: "img-3",
          },
        ]}
        bottomImages={[
          {
            icon: "./images/sponsors icon/img-4.png",
            alt: "img-4",
          },
          {
            icon: "./images/sponsors icon/img-5.png",
            alt: "img-5",
          },
          {
            icon: "./images/sponsors icon/img-6.png",
            alt: "img-6",
          },
        ]}
      />

      <div className="flex justify-center mt-8">
        <Button
          href="/"
          variant={BUTTON_VARIANT.LIGHT}
          label="Become a Sponsor"
          className="flex justify-center"
          svgclassName=""
        />
      </div>
    </div>
  );
}

export default Sponsor;
