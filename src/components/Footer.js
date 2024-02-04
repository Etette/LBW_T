import React from "react";

function Footer() {
  return (
    <div id="footer" className="lg:px-[50px] px-6 mt-20 !text-[#131313] py-10 lg:flex justify-evenly">
      <p className="">#LBW2024</p>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Policy</p>

        <p className="">Privacy Policy</p>
        {/* <p className="">Community Managers</p>
        <p className="">Developers</p>
        <p className="">Designers</p>
        <p className="">Technical Writers</p> */}
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Team</p>
        <p className="">Become a scholar </p>
        <p className="">Collaborate with Us</p>
        <p className="">Join as a Volunteer Us</p>
        {/* <p className="">Made in Africa</p> */}
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Resources</p>
        {/* <p className="">about</p> */}
        <p className="">blog</p>
        <a href="mailto:info@lagosblockchainweek.io">
        <p className="">Contact Us</p></a>
        

        
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
