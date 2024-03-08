import Image from "next/image";

const Join = () => {
  return (
    <div className="mt-[100px] relative mb-[90px] bg-contain">
      <Image
        src="/images/join.png"
        className="rounded-md mt-4 "
        alt="join"
        width={1253}
        height={453}
      />
      <div className="flex justify-between absolute lg:top-40 top-10 my-auto lg:left-20 left-5 lg:right-20 right-5">
        <p className="text-white font-bold my-auto text-sm lg:text-5xl">
          Join us from May 2<sup>nd</sup> - 11<sup>th</sup>, 2024, at <br /> The
          Radisson Blue, Ikeja - Lagos.
        </p>
        <Image
          className="lg:w-32 w-14"
          src="/images/circular-button.png"
          alt="circular-button"
          width={128}
          height={128}
        />
      </div>
    </div>
  );
};

export default Join;
