"use client";

import React, {useEffect, useState} from "react";
import {Link as ScrollLink} from "react-scroll/modules";
import {useRouter} from "next/router";
import Link from "next/link";

function HeaderNav() {
  const router = useRouter();
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
  };

  return (
    <div id={router.pathname === "/" ? "hero" : ""} className="pt-10">
      <header
        className={`flex justify-center w-full bg-transparent text-white `}
      >
        {/* items-center justify-between edit this */}
        <div
          className={`lg:py-2 py-4 px-4 flex items-center justify-between lg:w-[70%] w-[89%]  border-solid rounded-2xl border-white border-[1px]  ${
            isSticky
              ? " fixed top-0 lg:w-full w-[100%] flex justify-center bg-[#101c25] text-white border-none sm:w-full md:w-full px-12 border-solid rounded-none shadow-md transition-all duration-300 ease-in-out z-50"
              : ""
          }`}
        >
          <p className="mr-[64px] cursor-pointer font-bold">#LBW2024</p>
          <div className="lg:flex hidden items-center gap-x-8 text-sm">
            <Link href="/hackathon" smooth={true} duration={500}>
              <p className="cursor-pointer">Hackathon</p>
            </Link>

            <Link href="/schedule" smooth={true} duration={500}>
              <p className="cursor-pointer">Schedule</p>
            </Link>
            <Link href="/speakers" smooth={true} duration={500}>
              <p className="cursor-pointer">Speaker</p>
            </Link>
            {/* <Link to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Partners</p>
            </Link> */}
            <ScrollLink to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Pitch</p>
            </ScrollLink>
            <a
              href="https://forms.gle/Hz5RV1NCxZNfGbWQ6"
              target="_blank"
              className="cursor-pointer ml-[64px] py-3 px-8 text-[#000000] text-lg  bg-[#FFFCE1] rounded"
            >
              Register for Event
            </a>
          </div>
          <img
            onClick={() => openNav()}
            src="./images/icons/icons8-hamburger.svg"
            className="bg-white w-6  cursor-pointer lg:hidden block my-auto"
            alt=""
          />

          <div id="mySidenav" className="sidenav">
            <div className="w-[90%] mx-auto">
              <p
                onClick={() => closeNav()}
                className="float-right text-4xl cursor-pointer"
              >
                &times;
              </p>
              <div className="pt-20"></div>

              <Link href="/hackathon" smooth={true} duration={500}>
                <p className="cursor-pointer my-5 text-base ">Hackathon</p>
              </Link>

              <Link href="/schedule" smooth={true} duration={500}>
                <p className="cursor-pointer">Schedule</p>
              </Link>

              <Link href="/speakers" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Speaker</p>
              </Link>

              {/* <ScrollLink to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Partners</p>
              </ScrollLink> */}
              <ScrollLink to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Start-up</p>
              </ScrollLink>

              <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank">
                <p className="cursor-pointer  text-center py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">
                  Register for Event
                </p>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
