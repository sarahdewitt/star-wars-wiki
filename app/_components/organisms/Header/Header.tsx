"use client";
import React, { useState } from "react";
import NavigationAnchors, {
  anchors,
} from "../../molecules/Navigation/NavigationAnchors";
import { LogoAnchor } from "../../atoms/Anchor/Anchor";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { CloseIcon, HamburgerIcon } from "../../atoms/Icon";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="hidden justify-between bg-blue-500 px-10 py-10 lg:flex">
      <LogoAnchor text={"Star Wars Wiki"} href={"/"} />
      <NavigationAnchors />
    </div>
  );
};

export const HeaderHome = () => {
  return (
    <motion.div
      className="hidden justify-between bg-transparent px-10 py-10 lg:flex"
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
  //an isOpen state with a function to update that state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure as="div" className="relative z-50 lg:hidden">
      <DisclosureButton
        className="relative z-50 flex w-screen items-center justify-between bg-blue-500 px-4 py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LogoAnchor text={"Star Wars Wiki"} href={"/"} />
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </DisclosureButton>
      <AnimatePresence>
        {isOpen && (
          <DisclosurePanel
            static
            as={motion.div}
            initial={{ y: "-100%" }}
            animate={{
              y: 0,
              transition: {
                duration: 0.5,
                ease: "circOut",
              },
            }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.5,
                ease: "circIn",
              },
            }}
            className="absolute flex w-screen flex-col gap-5 bg-blue-500 px-4 py-16"
          >
            {/* Anchors are looped here. */}
            {/* To change the anchor titles, please go to: utils/AnchorsHeader.ts */}
            {anchors.map((anchor, index) => {
              return (
                <Link key={index} href={anchor.href}>
                  {anchor.text}
                </Link>
              );
            })}
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
};
