import Image from "next/image";
import React from "react";
import { ButtonText } from "../../atoms/Text/Text";
import Link from "next/link";

interface categoryProps {
  catText: string;
  catImg: string;
  catLink: string;
}

const Category = (props: categoryProps) => {
  return (
    <Link className="group" href={props.catLink}>
      <div className="relative overflow-hidden">
        <Image
          className="block w-full h-[50vh] lg:h-screen object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-300 ease-in-out"
          src={props.catImg}
          alt={props.catText}
          width={1000}
          height={1000}
        />
        <ButtonText text={props.catText} />
      </div>
    </Link>
  );
};

export default Category;
