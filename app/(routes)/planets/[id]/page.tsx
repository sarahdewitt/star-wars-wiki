import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { getFilms, getPeople, getPlanets } from "@/app/_services/getAPI";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";

export default async function Planet({ params }: any) {
  const planet = await getPlanets(params.id);

  const residentIds = planet.residents.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  const filmIds = planet.films.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  // Fetch residents data
  const residents = await Promise.all(
    residentIds.map((id: number) => getPeople(id))
  );

  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const entries = Object.entries(planet).slice(0, 9);

  return (
    <>
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-2">
      <NamespaceTitleBlock
        title={planet.name}
        src={`/images/planets/${planet.name}.jpg`}
        alt={planet.name}
      />
      <NamespaceData>
        <div className="md:col-span-6 bg-blue-400 p-10">
          {entries.map(([key, value]) => (
            <p key={key}>
              <span className="font-bold pr-2">{formatKey(key)}</span>{" "}
              {formatValue(value)}
            </p>
          ))}
        </div>
        <div className="col-span-3 bg-blue-300 p-10">
          <p className="font-bold pb-4">Residents</p>
            <div className="grid grid-cols-2 gap-1">
            {residents.map((resident) => (
              <Link
                key={resident.url}
                href={`/people/${resident.url
                  .split("/")
                  .filter(Boolean)
                  .pop()}`}
                className="block pb-1 hover:text-blue-100 transition-colors duration-150 ease-in"
              >
                {resident.name}
              </Link>
            ))}
            </div>
        </div>
        <div className="col-span-3 bg-blue-200 p-10">
          <p className="font-bold pb-4">Films</p>
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
      </NamespaceData>
    </div>
    </>
  );
}
