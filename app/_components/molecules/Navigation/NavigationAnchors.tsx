import React from "react";
import { Anchor } from "../../atoms/Anchor/Anchor";

const anchors = [
  {
    text: "Films",
    href: "/films",
  },
  {
    text: "Characters",
    href: "/people",
  },
  {
    text: "Planets",
    href: "/planets",
  },
  {
    text: "Species",
    href: "/species",
  },
  {
    text: "Starships",
    href: "/starships",
  },
  {
    text: "Vehicles",
    href: "/vehicles",
  },
];

const NavigationAnchors = () => {
  return (
    <div className="hidden lg:flex items-center gap-10">
      {anchors.map((anchor, index) => {
        return <Anchor key={index} text={anchor.text} href={anchor.href} />;
      })}
    </div>
  );
};

export default NavigationAnchors