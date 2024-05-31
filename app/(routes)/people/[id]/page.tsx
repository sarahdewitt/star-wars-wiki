
async function getPeople(peopleId: number) {
  const res = await fetch(`https://swapi.info/api/people/${peopleId}`);
  return res.json();
}

export default async function People({ params }: any) {
  const people = await getPeople(params.id);

  return (
    <div>Hello</div>
  )
}
