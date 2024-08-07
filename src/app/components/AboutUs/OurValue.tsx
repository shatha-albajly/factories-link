import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Subtitle from "../Subtitle";
import OurValueCards from "./OurValue/OurValueCards";

const OurValue = () => {
  return (
    <MaxWidthWrapper className="pt-[200px]   md:pt-[260px]  pb-20 ">
      <Subtitle title="Our Values" />
      <OurValueCards />
    </MaxWidthWrapper>
  );
};

export default OurValue;
