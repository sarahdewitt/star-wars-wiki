import React from "react";
import { FooterText } from "../../atoms/Text/Text";
import Link from "next/link";
import { FooterAnchor } from "../../atoms/Anchor/Anchor";

const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center px-10 py-5 bg-blue-400">
      <div>
        <FooterText
          text={"Designed and developed with next.js and ❤️ by sarah de witt"}
        />
        <FooterText
          text={
            "API data provided by swapi.info. Images sourced from Wookiepedia and Star Wars Databank."
          }
        />
      </div>
      <span className="flex gap-2 justify-center">
        <FooterText text={"Follow Me: "} />
        <FooterAnchor text={"Github /"} href={"https://github.com/sarahdewitt"} />
        <FooterAnchor text={"LinkedIn"} href={"https://www.linkedin.com/in/sarah-de-witt-926b741a3"} />
      </span>
    </div>
  );
};

export default Footer;
