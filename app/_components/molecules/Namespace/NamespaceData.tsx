import React from "react";

export const NamespaceData = ({
  children
}: Readonly<{ children: React.ReactNode}>) => {
  return (
    <div className={`bg-opacity-80 grid grid-cols-1 md:grid-cols-5`}>
      {children}
    </div>
  );
};
