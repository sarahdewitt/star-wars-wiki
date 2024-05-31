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
    name: "Starships",
    image: "/images/starships-cat.jpg",
    link: "/starships",
  },
  {
    name: "Vehicles",
    image: "/images/vehicles-cat.jpg",
    link: "/vehicles",
  },
  {
    name: "Species",
    image: "/images/species-cat.jpg",
    link: "/species",
  },
];

export const HomeCategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
      {categories.map((category, index) => {
        return (
          <HomeCategoryImage
            key={index}
            catText={category.name}
            catImg={category.image}
            catLink={""}
          />
        );
      })}
    </div>
  );
};
