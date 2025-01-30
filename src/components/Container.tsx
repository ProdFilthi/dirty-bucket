import React from "react";
type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center pt-18 flex-col mx-auto border-r border-l border-neutral-700 px-12 min-h-screen bg-neutral-900 text-neutral-100 max-w-[1200px]">
      {children}
    </div>
  );
};

export default Container;
