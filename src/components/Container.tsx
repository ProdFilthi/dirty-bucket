import React from "react";
type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto border-r border-l border-neutral-700 px-16 min-h-screen bg-neutral-900 text-neutral-100 max-w-[1100px]">
      {children}
    </div>
  );
};

export default Container;
