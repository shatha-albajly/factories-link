import React from "react";
import SmallTitle from "../SmallTitle";
import Subtitle from "../Subtitle";
import OurTeamCards from "./OurTeam/OurTeamCards";
import MaxWidthWrapper from "../MaxWidthWrapper";

const OurTeam = () => {
  return (
    <MaxWidthWrapper className="pb-20 md:pb-40">
      <div className="flex flex-col justify-center items-center">
        <SmallTitle title="Our Great Team" />
        <Subtitle title="Get to know us" />
        <OurTeamCards />
      </div>
    </MaxWidthWrapper>
  );
};

export default OurTeam;
