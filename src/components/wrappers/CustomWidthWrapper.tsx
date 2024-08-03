import React from "react";

interface CustomWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CustomWidthWrapper: React.FC<CustomWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`max-w-[92%] xl:max-w-[86%] 2xl:max-w-[70%] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomWidthWrapper;
