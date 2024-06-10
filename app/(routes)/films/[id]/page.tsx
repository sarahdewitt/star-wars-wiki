import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import {
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
} from "@/app/_services/getAPI";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";

export default async function Films({ params }: any) {
  const film = await getFilms(params.id);

  const characterIds = film.characters.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const characters = await Promise.all(
    characterIds.map((id: number) => getPeople(id))
  );

  const planetIds = film.planets.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const planets = await Promise.all(
    planetIds.map((id: number) => getPlanets(id))
  );

  const speciesId = film.species.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const species = await Promise.all(
    speciesId.map((id: number) => getSpecies(id))
  );

  const entries = Object.entries(film).slice(0, 6);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NamespaceTitleBlock
          title={film.title}
          src={`/images/films/${film.title}.jpg`}
          alt={film.title}
        />
        <NamespaceData>
          <div className="bg-blue-400 p-10">
            {entries.map(([key, value]) => (
              <p key={key} className="pb-7">
                <span className="font-bold pr-2">{formatKey(key)}</span>
                {formatValue(value)}
              </p>
            ))}
          </div>
        </NamespaceData>
        <div className="col-span-3 bg-blue-300 p-10">
          <p className="font-bold pb-4">Characters</p>
          <div className="flex flex-wrap gap-5">
            {characters.length === 0 ? (
              <span className="uppercase">Unknown</span>
            ) : (
              characters.map((character) => (
                <Link
                  key={character.url}
                  href={`/people/${character.url
                    .split("/")
                    .filter(Boolean)
                    .pop()}`}
                  className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
                >
                  {character.name}
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="col-span-3 bg-blue-200 p-10">
          <p className="font-bold pb-4">Planets</p>
          <div className="flex flex-wrap gap-5">
            {planets.length === 0 ? (
              <span>UNKNOWN</span>
            ) : (
              planets.map((planet) => (
                <Link
                  key={planet.url}
                  href={`/film/${planet.url
                    .split("/")
                    .filter(Boolean)
                    .pop()}`}
                  className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
                >
                  {planet.name}
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="col-span-3 bg-blue-300 p-10">
          <p className="font-bold pb-4">Species</p>
          <div className="flex flex-wrap gap-5">
            {species.length === 0 ? (
              <span>UNKNOWN</span>
            ) : (
              species.map((specie) => (
                <Link
                  key={specie.url}
                  href={`/film/${specie.url
                    .split("/")
                    .filter(Boolean)
                    .pop()}`}
                  className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
                >
                  {specie.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
