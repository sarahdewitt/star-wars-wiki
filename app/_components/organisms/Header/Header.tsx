"use client";
import React from "react";
import NavigationAnchors from "../../molecules/Navigation/NavigationAnchors";
import { LogoAnchor } from "../../atoms/Anchor/Anchor";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex justify-between px-10 py-10 bg-transparent"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <LogoAnchor text={"Star Wars Wiki"} href={"/"} />
      <NavigationAnchors />
    </motion.div>
  );
};

export const HeaderMobile = () => {
  return <div className=""></div>;
};
