import React from "react";
import OurTeamCard from "./OurTeamCard";
import { ourTeam } from "@/app/data";

const OurTeamCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ourTeam.map((item) => (
        <OurTeamCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OurTeamCards;
