import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";

const GetStarted = () => {
  return (
    <>
      <div className=" bg-customGradient ">
        <MaxWidthWrapper className="relative  text-center md:text-start min-h-[300px] flex gap-5 justify-between items-center">
          <div className="flex-1   ">
            <p className="text-2xl  font-bold text-PrimaryOrange mb-1.5 ">
              Ready to Get Started?
            </p>
            <p className="text-base text-secondary font-medium mb-6 ">
              Start your project with a 14-day free trial
            </p>
            <Button title="Get Started" />
          </div>
          <div className="flex-1 hidden lg:block">
            <img
              src="/assets/images/dashboard.PNG"
              alt="dashboard"
              className="absolute bottom-0 end-20  h-[250px]"
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default GetStarted;
