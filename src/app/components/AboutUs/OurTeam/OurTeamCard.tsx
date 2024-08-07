import React from "react";
import ImageColorfulBackground from "../../ImageColorfulBackground";
import { TOurTeam } from "@/app/types";

const OurTeamCard = ({ item }: { item: TOurTeam }) => {
  const { id, image, color, name, role } = item;

  return (
    <div className="relative  h-[250px] w-[267px] mb-20 lg:mb-0 ">
      <img className=" w-full h-full object-cover   " src={image} alt={name} />

      <ImageColorfulBackground color={color} />
      <div
        className="w-full p-4 text-primary text-center "
        style={{ border: `1px solid ${color}`, borderTop: 0 }}
      >
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-disabled opacity-60">{role}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
