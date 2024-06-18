import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { CategorySkeleton, ImageSkeleton } from "@/app/_components/templates/PageSkeleton";
import React, { Suspense } from "react";

async function fetchSpecies() {
  const url = "https://swapi.info/api/species";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const species = await fetchSpecies();
  return (
    <>
      <Suspense fallback={<CategorySkeleton />}>
        <Header />
        <CategoryTitleBlock name={"Species"} />
        <div className="grid grid-cols-2 md:grid-cols-3">
          {species.map((species: any, index: number) => (
            <Suspense key={index} fallback={<ImageSkeleton />}>
              <CategoryImage
                key={index}
                href={`/species/${index + 1}`}
                img_src={`/images/species/${species.name}.jpg`}
                img_alt={species.name}
                button_text={species.name}
              />
            </Suspense>
          ))}
        </div>
      </Suspense>
    </>
  );
}
