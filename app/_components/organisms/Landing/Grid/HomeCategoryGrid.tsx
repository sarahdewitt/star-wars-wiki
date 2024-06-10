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
    link: "/species",
  },
];

export const HomeCategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      {categories.map((category, index) => {
        return (
          <HomeCategoryImage
            key={index}
            catText={category.name}
            catImg={category.image}
            catLink={category.link}
          />
        );
      })}
    </div>
  );
};
