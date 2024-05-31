import React from "react";
import NavigationAnchors from "../../molecules/Navigation/NavigationAnchors";
import { LogoAnchor } from "../../atoms/Anchor/Anchor";

export const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between px-10 py-10 bg-blue-500">
        <LogoAnchor text={"Star Wars Wiki"} href={"/"} />
        <NavigationAnchors />
      </div>
    </div>
  );
};

export const HeaderHome = () => {
  return (
    <div className="">
      <div className="flex justify-between px-10 py-10 bg-transparent">
        <LogoAnchor text={"Star Wars Wiki"} href={"/"} />
        <NavigationAnchors />
      </div>
    </div>
  );
};
