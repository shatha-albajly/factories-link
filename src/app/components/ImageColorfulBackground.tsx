import React from "react";

const ImageColorfulBackground = ({ color }: { color: string }) => {
  return (
    <div
      className="z-[-1] absolute left-0 bottom-0 w-[267px] h-[185px]  rounded-[90px_20px_0px_0px]  bg-{color} border-[1px] border-l border-r border-t "
      style={{
        background: ` ${color}`,
        border: `1px solid ${color}`,
        borderBottom: 0,
      }}
    ></div>
  );
};

export default ImageColorfulBackground;
