import React from "react";
import { Header } from "../organisms/Header/Header";
import CategoryTitleBlock from "../molecules/Category/CategoryTitleBlock";

export const CategorySkeleton = ({children}: any) => {
  return (
    <>
      <Header />
      <CategoryTitleBlock name={"Films"} />
      <div className="grid grid-cols-2 md:grid-cols-3 bg-blue-200">
        {children}
      </div>
    </>
  );
};

export const ImageSkeleton = ({children}: any) => {
    return (
        <div className="block w-full h-[50vh] object-cover bg-secondaryBlue">
            {children}
        </div>
    )
}
