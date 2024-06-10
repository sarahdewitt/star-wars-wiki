import React from "react";

export const NamespaceData = ({
  children
}: Readonly<{ children: React.ReactNode}>) => {
  return (
    <div className={'bg-blue-400 p-10 flex flex-row items-center'}>
      {children}
    </div>
  );
};
