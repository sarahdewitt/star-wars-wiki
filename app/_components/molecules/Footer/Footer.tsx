import React from "react";
import { FooterText } from "../../atoms/Text/Text";
import Link from "next/link";
import { FooterAnchor } from "../../atoms/Anchor/Anchor";

const Footer = () => {
  return (
    <div className="text-center w-full mx-auto py-10">
      <FooterText
        text={"Designed and developed with next.js and ❤️ by sarah de witt"}
      />
      <span className="flex gap-2 justify-center">
        <FooterText text={"Follow Me: "} />
        <FooterAnchor text={"Github /"} href={""}/>
        <FooterAnchor text={"LinkedIn"} href={""}/>
      </span>
      <FooterText
        text={
          "Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia."
        }
      />
    </div>
  );
};

export default Footer;
