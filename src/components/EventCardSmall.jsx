import React from "react";
import cx from "classnames";
import Button from "./Button";
import {BUTTON_VARIANT} from "@/constants";

const EventCardSmall = ({
  title,
  date,
  description,
  image,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div
      className={cx(
        `lg:flex lg:w-[47%] my-6 border border-[#0A1821]  p-4 rounded-md `,
        className
      )}
      data-aos="fade-left"
      data-aos-delay="20"
      data-aos-once="true"
      data-aos-duration="700"
    >
      <div>
        <img src={image} className=" sm:w-full object-cover" alt="" />
      </div>
      <div className="text-[#131313] sm:mt-2 lg:ml-4 ">
        <p className={cx(`text-2xl`, titleClassName)}>{title}</p>
        <p className=" text-1xl my-2">{date}</p>
        <p className={cx(`text-1xl mt-2 max-w-44 py-2`, descriptionClassName)}>
          {description}
        </p>

        <span className="flex">
          <Button
            label="Register"
            variant={BUTTON_VARIANT.LIGHT}
            className="flex sm:w-full sm:mt-4 justify-center rounded-md bg-[#fffdef] border border-[#131313] border-b-4 px-8"
            labelClassName="text-[#131313]"
          />
        </span>
      </div>
    </div>
  );
};

export default EventCardSmall;
