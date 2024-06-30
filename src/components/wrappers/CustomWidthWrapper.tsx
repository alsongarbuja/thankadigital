import React from "react";

interface CustomWidthWrapperProps {
  children: React.ReactNode;
}

const CustomWidthWrapper: React.FC<CustomWidthWrapperProps> = ({
  children,
}) => {
  return (
    <div className="max-w-[92%] xl:max-w-[86%] 2xl:max-w-[70%] mx-auto">
      {children}
    </div>
  );
};

export default CustomWidthWrapper;
