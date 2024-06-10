import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React from "react";

async function fetchFilms() {
  const url = "https://swapi.info/api/films";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const films = await fetchFilms();
  return (
    <>
      <Header />
      <CategoryTitleBlock name={"Films"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {films.map((film: any, index: number) => (
          <CategoryImage
            key={index}
            href={`/films/${extractIdFromUrl(film.url)}`}
            img_src={`/images/films/${film.title}.jpg`}
            img_alt={film.title}
            button_text={film.title}
          />
        ))}
      </div>
    </>
  );
}
