import React from "react";

export const InfoBlock = ({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className={"p-10 bg-blue-300"}>
      <ul className="list-none pb-2">
        {children}
      </ul>
    </div>
  );
};
