import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { getFilms, getPeople, getPlanets, getSpecies } from "@/app/_services/getAPI";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";

export default async function Species({ params }: any) {
  const species = await getSpecies(params.id);

  const peopleIds = species.people.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  const filmIds = species.films.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  const planetId = species.homeworld.split("/").filter(Boolean).pop();
  const planets = await getPlanets(planetId);

  // Fetch people data
  const people = await Promise.all(
    peopleIds.map((id: number) => getPeople(id))
  );

  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const entries = Object.entries(species).slice(0, 8);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NamespaceTitleBlock
          title={species.name}
          src={`/images/species/${species.name}.jpg`}
          alt={species.name}
        />
        <NamespaceData>
          <div className="">
            {entries.map(([key, value]) => (
              <p key={key} className="pb-7">
                <span className="font-bold pr-2">{formatKey(key)}</span>{" "}
                {formatValue(value)}
              </p>
            ))}
            <p className="pb-7">
              <span className="font-bold pr-2">Homeworld</span>
              <Link
                href={`/planets/${planetId}`}
                className="pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
              >
                {planets.name}
              </Link>
            </p>
          </div>
        </NamespaceData>
      </div>
      <div className="bg-blue-300 p-10">
        <p className="font-bold pb-4">People</p>
        <div className="flex flex-wrap gap-5">
          {people.map((resident) => (
            <Link
              key={resident.url}
              href={`/people/${resident.url.split("/").filter(Boolean).pop()}`}
              className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
            >
              {resident.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-blue-200 p-10">
        <p className="font-bold pb-4">Films</p>
        <div className="flex flex-wrap gap-5">
          {films.map((film) => (
            <Link
              key={film.url}
              href={`/films/${film.url.split("/").filter(Boolean).pop()}`}
              className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
            >
              {film.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
