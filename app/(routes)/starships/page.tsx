import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import {
  Header,
  HeaderMobile,
} from "@/app/_components/organisms/Header/Header";
import {
  CategorySkeleton,
  ImageSkeleton,
} from "@/app/_components/templates/PageSkeleton";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React, { Suspense } from "react";

async function fetchStarships() {
  const url = "https://swapi.info/api/starships";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const starships = await fetchStarships();
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <Header />
      <HeaderMobile />
      <CategoryTitleBlock name={"Starships"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {starships.map((starship: any, index: number) => (
          <Suspense key={index} fallback={<ImageSkeleton />}>
            <CategoryImage
              key={index}
              href={`/starships/${extractIdFromUrl(starship.url)}`}
              img_src={`/images/starships/${starship.name}.jpg`}
              img_alt={starship.name}
              button_text={starship.name}
            />
          </Suspense>
        ))}
      </div>
    </Suspense>
  );
}
