import React from "react";
import Link from "next/link";
import cx from "classnames";

function Footer({className}) {
  return (
    <div
      id="footer"
      className={cx(
        `lg:px-[50px] px-6 mt-20 !text-[#131313] py-10 lg:flex justify-evenly`,
        className
      )}
    >
      <p className="">#LBW2024</p>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Policy</p>

        <Link href={"/privacy-policy"}>
          <p className="">Privacy Policy</p>
        </Link>
        {/* <p className="">Community Managers</p>
        <p className="">Developers</p>
        <p className="">Designers</p>
        <p className="">Technical Writers</p> */}
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Team</p>
        <p className="">Become a scholar </p>
        <p className="">Collaborate with Us</p>
        <p className="">Join as a Volunteer</p>
        {/* <p className="">Made in Africa</p> */}
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Resources</p>
        {/* <p className="">about</p> */}
        <p className="">blog</p>
        <a href="mailto:info@lagosblockchainweek.io">
          <p className="">Contact Us</p>
        </a>
      </div>

      {/* <div className="flex flex-col">
        <p className="font-medium mb-3">Resources</p>
        <p className="">About</p>
        <p className="">Blog</p>
        <p className="">Contact Us</p>
        <p className="">Support</p>
      </div> */}
    </div>
  );
}

export default Footer;
