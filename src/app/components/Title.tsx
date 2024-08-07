import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-2xl md:text-5xl font-medium mb-5 text-white md:mb-7 ">
      {title}
    </h1>
  );
};

export default Title;
