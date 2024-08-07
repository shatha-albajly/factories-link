import React from "react";
import Card from "./OurValueCard";
import { ourValue } from "@/app/data";

const OurValueCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {ourValue.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OurValueCards;
