import React from "react";

const MaxWidthWrapper = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const combinedClassName = `mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};

export default MaxWidthWrapper;
