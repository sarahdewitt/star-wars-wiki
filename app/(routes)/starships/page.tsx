import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React from "react";

async function fetchStarships() {
  const url = "https://swapi.info/api/starships";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const starships = await fetchStarships();
  return (
    <>
      <Header />
      <CategoryTitleBlock name={"Starships"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {starships.map((starship: any, index: number) => (
          <CategoryImage
            key={index}
            href={`/starships/${extractIdFromUrl(starship.url)}`}
            img_src={`/images/starships/${starship.name}.jpg`}
            img_alt={starship.name}
            button_text={starship.name}
          />
        ))}
      </div>
    </>
  );
}
