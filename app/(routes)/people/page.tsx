import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import React from "react";

async function fetchPeople() {
  const url = "https://swapi.info/api/people";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const people = await fetchPeople();
  return (
    <>
      <Header />
      <CategoryTitleBlock name={"People"} />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {people.map((people: any, index: number) => (
          <CategoryImage
            key={index}
            href={`/people/${extractIdFromUrl(people.url)}`}
            img_src={`/images/people/${people.name}.jpg`}
            img_alt={people.name}
            button_text={people.name}
          />
        ))}
      </div>
    </>
  );
}
