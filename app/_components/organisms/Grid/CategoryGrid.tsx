import React from "react";
import Category from "../../molecules/Category/Category";

const categories = [
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  },
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  },
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  },
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  },
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  },
  {
    name: "Films",
    image: "/images/rey_kylo.png",
    link: ""
  }
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
      {categories.map((category, index) => {
        return (
          <Category
                key={index}
                catText={category.name}
                catImg={category.image} catLink={""}/>
        );
      })}
    </div>
  );
};
