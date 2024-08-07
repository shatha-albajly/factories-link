import { TOurValue } from "@/app/types";
import React from "react";

const OurValueCard = ({ item }: { item: TOurValue }) => {
  const { image, title, description } = item;
  return (
    <div className="card text-center bg-offWhite p-4 h-[200px] border rounded-lg flex flex-col justify-center items-center">
      <img src={image} alt={title} />
      <p className="text-lg font-medium text-primary mb-2">{title}</p>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
};

export default OurValueCard;
