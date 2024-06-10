import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React from "react";

async function fetchPlanets() {
  const url = "https://swapi.info/api/planets";
  const res = await fetch(url);
  return res.json();
}



export default async function page() {
  const planets = await fetchPlanets();
  return (
    <>
      <Header />
      <CategoryTitleBlock name={"Planets"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {planets.map((planet: any, index: number) => (
          <CategoryImage
            key={index}
            href={`/planets/${extractIdFromUrl(planet.url)}`}
            img_src={`/images/planets/${planet.name}.jpg`}
            img_alt={planet.name}
            button_text={planet.name}
          />
        ))}
      </div>
    </>
  );
}
