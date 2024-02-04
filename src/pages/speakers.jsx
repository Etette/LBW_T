import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import Join from "@/components/Join";
import Partners from "@/components/Partners";
import SponsorsLayout from "@/components/SponsorsLayout";
import {BUTTON_VARIANT} from "@/constants";

const speakers = () => {
  return (
    <div>
      <title>Lagos BlockChain Week | Speakers</title>
      <img
        src="./images/speakers.png"
        className="sm:h-[80vh] object-cover object-fill"
        alt=""
      />
      <div className="absolute top-0 w-full">
        <HeaderNav />
        <img
          className="ml-auto mr-16 lg:w-32 w-14 sm:mt-8"
          src="./images/circular-button.png"
          alt=""
        />

        <div className="text-white lg:flex flex-col justify-center text-center lg:p-12 sm:py-12 sm:pt-12 leading-8">
          <p className="">Blockchain Week Hackathon: 2nd - 4th, May 2024</p>
          <p className="">Lagos Blockchain Week: 6th - 11th, May 2024</p>

          <div className="lg:flex justify-center mt-4">
            <Button
              href="/"
              label="Become a sponsor"
              className=""
              labelClassName="sm:justify-center"
            />
            <Button
              href="/"
              label="Partner with us"
              variant={BUTTON_VARIANT.DARK}
              svgclassName="fill-[#FFFCE1]"
              className="bg-opacity-10 border border-[#fffdef] border-b-4 lg:ml-6 border-r-4 sm:justify-center"
            />
          </div>
        </div>
      </div>
      <div id="hero" className="lg:p-20 p-6  text-white flex flex-col">
        <SponsorsLayout
          title="Our Golden Sponsors"
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

      <Partners />
      <Join />
      <Footer />
    </div>
  );
};

export default speakers;
