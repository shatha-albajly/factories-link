import React from "react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

const Loading = () => {
  return (
    <MaxWidthWrapper>
      <div className="h-80 flex flex-col items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    </MaxWidthWrapper>
  );
};

export default Loading;
