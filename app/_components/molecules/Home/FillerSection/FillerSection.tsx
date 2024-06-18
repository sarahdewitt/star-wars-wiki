"use client";
import { Pargraph, SubTitle } from "@/app/_components/atoms/Text/Text";
import { motion } from "framer-motion";
interface fillerProps {
  titleText: string;
  subText: string;
  height: string;
}

const FillerSection = (props: fillerProps) => {
  return (
    <motion.div
      className={`text-center ${props.height} w-3/4 mx-auto justify-center`}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 100, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div>
        <SubTitle text={props.titleText} />
        <Pargraph text={props.subText} />
      </div>
    </motion.div>
  );
};

export default FillerSection;
