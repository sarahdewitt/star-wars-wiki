import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import {
  DataSkeletonLoading,
  NamespaceDataSkeleton,
  NamespacePageSkeleton,
  NamespaceTitleSkeleton,
} from "@/app/_components/templates/InnerPageSkeleton";
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
import { Suspense } from "react";

export default async function People({ params }: any) {
  const people = await getPeople(params.id);

  const vehiclesIds = people.vehicles.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );
  const vehicles = await Promise.all(
    vehiclesIds.map((id: number) => getVehicles(id)),
  );

  const homeworld = people?.homeworld;

  const planetId = homeworld?.split("/").filter(Boolean).pop();
  const planets = planetId ? await getPlanets(planetId) : null;

  const filmIds = people.films.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );
  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const starshipIds = people.starships.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );
  const starships = await Promise.all(
    starshipIds.map((id: number) => getStarships(id)),
  );

  const speciesId = people.species.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );
  const species = await Promise.all(
    speciesId.map((id: number) => getSpecies(id)),
  );

  const entries = Object.entries(people).slice(0, 8);

  return (
    <>
      <Suspense fallback={<NamespacePageSkeleton />}>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Suspense fallback={<NamespaceTitleSkeleton />}>
            <NamespaceTitleBlock
              title={people.name}
              src={`/images/people/${people.name}.jpg`}
              alt={people.name}
            />
          </Suspense>
          <Suspense fallback={<NamespaceDataSkeleton />}>
            <NamespaceData>
              <div className="bg-blue-400 md:p-10">
                {entries.map(([key, value]) => (
                  <p key={key} className="pb-7">
                    <span className="pr-2 font-bold">{formatKey(key)}</span>
                    {formatValue(value)}
                  </p>
                ))}
                <p className="pb-7">
                  <span className="pr-2 font-bold">Homeworld</span>
                  {!homeworld ? (
                    <span className="uppercase">Unknown</span>
                  ) : (
                    <Link
                      href={`/planets/${planetId}`}
                      className="pb-1 transition-colors duration-150 ease-in hover:text-blue-100"
                    >
                      {planets.name}
                    </Link>
                  )}
                </p>
                <p>
                  <span className="pr-2 font-bold">Species</span>
                  {species.length === 0 ? (
                    <span className="uppercase">Unknown</span>
                  ) : (
                    species.map((specie) => (
                      <Link
                        key={specie.url}
                        href={`/species/${specie.url
                          .split("/")
                          .filter(Boolean)
                          .pop()}`}
                        className="transition-colors duration-150 ease-in hover:text-blue-100"
                      >
                        {specie.name}
                      </Link>
                    ))
                  )}
                </p>
              </div>
            </NamespaceData>
          </Suspense>
        </div>
        <div className="bg-blue-300 p-10">
          <p className="pb-4 font-bold">Films</p>
          <Suspense fallback={<DataSkeletonLoading />}>
            <div className="flex flex-wrap gap-5">
              {films.map((film) => (
                <Link
                  key={film.url}
                  href={`/films/${film.url.split("/").filter(Boolean).pop()}`}
                  className="block pb-1 transition-colors duration-150 ease-in hover:text-blue-100"
                >
                  {film.title}
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
        <div className="col-span-3 bg-blue-200 p-10">
          <p className="pb-4 font-bold">Vehicles</p>
          <Suspense fallback={<DataSkeletonLoading />}>
            <div className="flex flex-wrap gap-5">
              {vehicles.length === 0 ? (
                <p>Unknown</p>
              ) : (
                vehicles.map((vehicle) => (
                  <Link
                    key={vehicle.url}
                    href={`/vehicles/${vehicle.url
                      .split("/")
                      .filter(Boolean)
                      .pop()}`}
                    className="block pb-1 transition-colors duration-150 ease-in hover:text-blue-100"
                  >
                    {vehicle.name}
                  </Link>
                ))
              )}
            </div>
          </Suspense>
        </div>
        <div className="col-span-3 bg-secondaryBlue p-10">
          <p className="pb-4 font-bold">Starships</p>
          <Suspense fallback={<DataSkeletonLoading />}>
            <div className="flex flex-wrap gap-5">
              {starships.length === 0 ? (
                <span>UNKNOWN</span>
              ) : (
                starships.map((starship) => (
                  <Link
                    key={starship.url}
                    href={`/starships/${starship.url
                      .split("/")
                      .filter(Boolean)
                      .pop()}`}
                    className="block pb-1 transition-colors duration-150 ease-in hover:text-blue-100"
                  >
                    {starship.name}
                  </Link>
                ))
              )}
            </div>
          </Suspense>
        </div>
      </Suspense>
    </>
  );
}
