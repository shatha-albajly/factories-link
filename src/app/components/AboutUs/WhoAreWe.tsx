import React from "react";

const WhoAreWe = () => {
  return (
    <div className="bg-white z-20 left-0 right-0 absolute top-[270px] mx-auto  max-w-[90%] md:h-[378px] mb-10 md:rounded-t-xl shadow-[0px_3px_12px_0px#2F2B3D24]">
      <div className="flex    mx-auto flex-col md:flex-row justify-between items-center h-full">
        <div className=" flex-1   flex flex-col justify-center items-center md:items-start px-10 py-3 ">
          <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            Who we are ?
          </h1>
          <p className="text-sm md:text-md lg:text-lg text-center md:text-left mt-4">
            All plans include 40+ advanced tools and features to boost your
            product. Choose the best plan to fit your needs.All plans include
            40+ advanced tools and features to boost your product. Choose the
            best plan to fit your needs.All plans include 40+ advanced tools and
            features to boost your product. Choose the best plan to fit your
            needs.
          </p>
        </div>
        <div className=" hidden md:flex justify-center items-center">
          <img
            src="/assets/images/whoAreWe.jfif"
            alt="who-are-we"
            className="max-w-[300px] lg:max-w-full  h-[378px] object-cover md:rounded-tr-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
