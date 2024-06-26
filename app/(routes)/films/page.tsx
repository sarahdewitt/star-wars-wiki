import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import {
  Header,
  HeaderMobile,
} from "@/app/_components/organisms/Header/Header";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React, { Suspense } from "react";
import {
  ImageSkeleton,
  CategorySkeleton,
} from "@/app/_components/templates/PageSkeleton";

async function fetchFilms() {
  const url = "https://swapi.info/api/films";
  const res = await fetch(url, { cache: "force-cache" });
  return res.json();
}

export default async function page() {
  const films = await fetchFilms();
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <Header />
      <HeaderMobile />
      <CategoryTitleBlock name={"Films"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {films.map((film: any, index: number) => (
          <Suspense key={index} fallback={<ImageSkeleton />}>
            <CategoryImage
              key={index}
              href={`/films/${extractIdFromUrl(film.url)}`}
              img_src={`/images/films/${film.title}.jpg`}
              img_alt={film.title}
              button_text={film.title}
            />
          </Suspense>
        ))}
      </div>
    </Suspense>
  );
}
