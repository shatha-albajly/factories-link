import React from "react";

const SmallTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div className="inline-block bg-warningOpacityLight rounded-md mb-4">
        <p className="text-sm text-center text-PrimaryOrange font-medium px-2 py-1">
          {title}
        </p>
      </div>
    </>
  );
};

export default SmallTitle;
