import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import {
  DataSkeletonLoading,
  NamespaceDataSkeleton,
  NamespacePageSkeleton,
  NamespaceTitleSkeleton,
} from "@/app/_components/templates/InnerPageSkeleton";
import { getFilms, getPeople, getVehicles } from "@/app/_services/getAPI";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";
import { Suspense } from "react";

export default async function Vehicles({ params }: any) {
  const vehicle = await getVehicles(params.id);

  const filmIds = vehicle.films.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );

  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const pilotIds = vehicle.pilots.map((url: string) =>
    url.split("/").filter(Boolean).pop(),
  );

  const pilots = await Promise.all(pilotIds.map((id: number) => getPeople(id)));

  const entries = Object.entries(vehicle).slice(0, 11);

  return (
    <>
      <Suspense fallback={<NamespacePageSkeleton />}>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Suspense fallback={<NamespaceTitleSkeleton />}>
            <NamespaceTitleBlock
              title={vehicle.name}
              src={`/images/vehicles/${extractIdFromUrl(vehicle.url)}.jpg`}
              alt={vehicle.name}
            />
          </Suspense>
          <Suspense fallback={<NamespaceDataSkeleton />}>
            <NamespaceData>
              <div className="bg-blue-400 md:p-10">
                {entries.map(([key, value]) => (
                  <p key={key} className="pb-7">
                    <span className="pr-2 font-bold">{formatKey(key)}</span>{" "}
                    {formatValue(value)}
                  </p>
                ))}
              </div>
            </NamespaceData>
          </Suspense>
        </div>
        <div className="bg-blue-300 p-10">
          <p className="pb-4 font-bold">Pilots</p>
          <Suspense fallback={<DataSkeletonLoading />}>
            <div className="flex flex-wrap gap-5">
              {pilots.length === 0 ? (
                <p>Unknown</p>
              ) : (
                pilots.map((pilot) => (
                  <Link
                    key={pilot.url}
                    href={`/people/${pilot.url.split("/").filter(Boolean).pop()}`}
                    className="block pb-1 transition-colors duration-150 ease-in hover:text-blue-100"
                  >
                    {pilot.name}
                  </Link>
                ))
              )}
            </div>
          </Suspense>
        </div>
        <div className="bg-blue-200 p-10">
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
      </Suspense>
    </>
  );
}
