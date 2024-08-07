import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button
      style={{ boxShadow: "0px 2px 6px 0px #7367F04D;" }}
      className="px-6 py-3 text-white font-semibold rounded-lg bg-PrimaryOrange hover:bg-PrimaryOrange/90  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {title}
    </button>
  );
};

export default Button;
