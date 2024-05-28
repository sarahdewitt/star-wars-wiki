import { InfoBlock } from "@/app/_components/molecules/Block/InfoBlock";
import { TitleBlock } from "@/app/_components/molecules/PageImage/TitleBlock";
import Link from "next/link";

const formatValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  } else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value); // or a more custom rendering if needed
  }
  return value;
};

const formatKey = (key: string) => {
  return key.replace(/_/g, " ");
};

async function getPlanets(planetId: number) {
  const res = await fetch(`https://swapi.info/api/planets/${planetId}`);
  return res.json();
}

async function getPeople(peopleId: number) {
  const res = await fetch(`https://swapi.info/api/people/${peopleId}`);
  return res.json();
}

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
