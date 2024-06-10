import { NamespaceData } from "@/app/_components/molecules/Namespace/NamespaceData";
import { NamespaceTitleBlock } from "@/app/_components/molecules/Namespace/NamespaceTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { getFilms, getStarships } from "@/app/_services/getAPI";
import { formatKey, formatValue } from "@/app/_utils/formatters";
import Link from "next/link";

export default async function Starship({ params }: any) {
  const starship = await getStarships(params.id);

  const filmIds = starship.films.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  const films = await Promise.all(filmIds.map((id: number) => getFilms(id)));

  const entries = Object.entries(starship).slice(0, 8);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NamespaceTitleBlock
          title={starship.name}
          src={`/images/starships/${starship.name}.jpg`}
          alt={starship.name}
        />
        <NamespaceData>
          <div className="">
            {entries.map(([key, value]) => (
              <p key={key} className="pb-7">
                <span className="font-bold pr-2">{formatKey(key)}</span>{" "}
                {formatValue(value)}
              </p>
            ))}
          </div>
        </NamespaceData>
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
