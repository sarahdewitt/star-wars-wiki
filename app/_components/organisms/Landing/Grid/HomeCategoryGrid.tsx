"use client";
import { motion } from "framer-motion";
import { HomeCategoryImage } from "../../../molecules/Home/HomeCategoryImage/HomeCategoryImage";

const categories = [
  {
    name: "Films",
    image: "/images/films-cat.jpg",
    link: "/films",
  },
  {
    name: "Characters",
    image: "/images/characters-cat.jpg",
    link: "/people",
  },
  {
    name: "Planets",
    image: "/images/planets-cat.jpg",
    link: "/planets",
  },
  {
    name: "Species",
    image: "/images/species-cat.jpg",
    link: "/species",
  },
  {
    name: "Starships",
    image: "/images/starships-cat.jpg",
    link: "/starships",
  },
  {
    name: "Vehicles",
    image: "/images/vehicles-cat.jpg",
    link: "/vehicles",
  },
];

export const HomeCategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      {categories.map((category, index) => {
        return (
          <motion.div key={index} initial={{opacity: 0}} whileInView={{opacity: 100}} transition={{duration: 1, ease: "easeInOut", delay: 0.15 * index}}>
            <HomeCategoryImage
              key={index}
              catText={category.name}
              catImg={category.image}
              catLink={category.link}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
