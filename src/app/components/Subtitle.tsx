import React from "react";

const Subtitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-2xl font-medium text-primary text-center mb-3 md:mb-8 ">
        {title}
      </h2>
    </div>
  );
};

export default Subtitle;
