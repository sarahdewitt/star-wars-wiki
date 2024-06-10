import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import {
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
} from "@/app/_services/getAPI";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";

export default async function People({ params }: any) {
  const people = await getPeople(params.id);

  const vehiclesIds = people.vehicles.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const vehicles = await Promise.all(
    vehiclesIds.map((id: number) => getVehicles(id))
  );

  const planetId = people.homeworld.split("/").filter(Boolean).pop();
  const planets = await getPlanets(planetId);

  const filmIds = people.films.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const starshipIds = people.starships.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const starships = await Promise.all(
    starshipIds.map((id: number) => getStarships(id))
  );

  const speciesId = people.species.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );
  const species = await Promise.all(
    speciesId.map((id: number) => getSpecies(id))
  );

  const entries = Object.entries(people).slice(0, 8);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NamespaceTitleBlock
          title={people.name}
          src={`/images/people/${people.name}.jpg`}
          alt={people.name}
        />
        <NamespaceData>
          <div className="md:col-span-3 bg-blue-400 p-10">
            {entries.map(([key, value]) => (
              <p key={key} className="pb-7">
                <span className="font-bold pr-2">{formatKey(key)}</span>
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
            <p>
              <span className="font-bold pr-2">Species</span>
              {species.length === 0 ? (
                <span>Unknown</span>
              ) : (
                species.map((specie) => (
                  <Link
                    key={specie.url}
                    href={`/species/${specie.url
                      .split("/")
                      .filter(Boolean)
                      .pop()}`}
                    className="hover:text-blue-100 transition-colors duration-150 ease-in"
                  >
                    {specie.name}
                  </Link>
                ))
              )}
            </p>
          </div>
        </NamespaceData>
        <div className="md:col-span-3 bg-blue-300 p-10">
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
        <div className="col-span-3 bg-blue-300 p-10">
          <p className="font-bold pb-4">Vehicles</p>
          <div className="flex flex-wrap gap-5">
            {vehicles.length === 0 ? (
              <span className="uppercase">Unknown</span>
            ) : (
              vehicles.map((vehicle) => (
                <Link
                  key={vehicle.url}
                  href={`/people/${vehicle.url
                    .split("/")
                    .filter(Boolean)
                    .pop()}`}
                  className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
                >
                  {vehicle.name}
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="col-span-3 bg-blue-200 p-10">
          <p className="font-bold pb-4">Starships</p>
          <div className="flex flex-wrap gap-5">
            {starships.length === 0 ? (
              <span>UNKNOWN</span>
            ) : (
              starships.map((starship) => (
                <Link
                  key={starship.url}
                  href={`/people/${starship.url
                    .split("/")
                    .filter(Boolean)
                    .pop()}`}
                  className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
                >
                  {starship.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
