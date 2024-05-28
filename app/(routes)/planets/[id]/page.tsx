import { InfoBlock } from "@/app/_components/molecules/Block/InfoBlock";
import { TitleBlock } from "@/app/_components/molecules/PageImage/TitleBlock";
import { getPeople, getPlanets } from "@/app/services/getAPI";
import { formatKey, formatValue } from "@/app/utils/formatters";
import Link from "next/link";

export default async function Planet({ params }: any) {
  const planet = await getPlanets(params.id);

  const residentIds = planet.residents.map((url: string) =>
    url.split("/").filter(Boolean).pop()
  );

  // Fetch residents data
  const residents = await Promise.all(
    residentIds.map((id: number) => getPeople(id))
  );

  const entries = Object.entries(planet).slice(0, 9);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <TitleBlock src={`/images/planets/${params.id}.jpg`} alt={planet.name} />
      <InfoBlock>
        {entries.map(([key, value]) => (
          <li key={key}>
            {formatKey(key)}: {formatValue(value)}
          </li>
        ))}
        <li>
          Residents:
          {residents.map((resident) => (
            <Link
              key={resident.url}
              href={`/people/${resident.url.split("/").filter(Boolean).pop()}`}
            >
              {resident.name}
            </Link>
          ))}
        </li>
      </InfoBlock>
    </div>
  );
}
