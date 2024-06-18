import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import {
  CategorySkeleton,
  ImageSkeleton,
} from "@/app/_components/templates/PageSkeleton";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React, { Suspense } from "react";

async function fetchPeople() {
  const url = "https://swapi.info/api/people";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const people = await fetchPeople();
  return (
    <>
      <Suspense fallback={<CategorySkeleton />}>
        <Header />
        <CategoryTitleBlock name={"People"} />
        <div className="grid grid-cols-2 md:grid-cols-3">
          {people.map((people: any, index: number) => (
            <Suspense key={index} fallback={<ImageSkeleton />}>
              <CategoryImage
                key={index}
                href={`/people/${extractIdFromUrl(people.url)}`}
                img_src={`/images/people/${people.name}.jpg`}
                img_alt={people.name}
                button_text={people.name}
              />
            </Suspense>
          ))}
        </div>
      </Suspense>
    </>
  );
}
