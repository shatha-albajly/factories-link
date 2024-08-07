import React from "react";
import Title from "./Title";
import Breadcrumb from "./Breadcrumb";

const Hero = () => {
  return (
    <div className="mb-20 ">
      <div className="relative ">
        <div className="bg-black w-full h-full absolute top-0 opacity-50"></div>
        <img
          src="/assets/images/hero.png"
          alt="hero"
          className="w-full h-[345px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <Title title="About us" />

          <Breadcrumb title="About us" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
