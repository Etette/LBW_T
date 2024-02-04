import React from "react";
import cx from "classnames";
import {BUTTON_VARIANT} from "@/constants";

const Button = ({label, labelClassName, className, svgclassName, variant}) => {
  console.log("variant", variant);
  return (
    <div className="mt-0">
      <button
        className={cx(
          `flex p-4 sm:w-full sm:mt-4 rounded-md px-10`,
          variant === BUTTON_VARIANT.DARK
            ? "text-white bg-[#131313]"
            : "text-[#131313] bg-[#FFFCE1]",
          className
        )}
      >
        <span className={cx(`mr-2 my-auto`)}>{label}</span>

        <span className={cx(``, svgclassName)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill=""
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
