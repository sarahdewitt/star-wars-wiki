export const getPlanets = async (planetId: number) => {
  const res = await fetch(`https://swapi.info/api/planets/${planetId}`, { cache: "force-cache" });
  return res.json();
};

export const getPeople = async (peopleId: number) => {
  const res = await fetch(`https://swapi.info/api/people/${peopleId}`, { cache: "force-cache" });
  return res.json();
};

export const getFilms = async (filmId: number) => {
  const res = await fetch(`https://swapi.info/api/films/${filmId}`, { cache: "force-cache" });
  return res.json();
};

export const getStarships = async (starshipId: number) => {
  const res = await fetch(`https://swapi.info/api/starships/${starshipId}`, { cache: "force-cache" });
  return res.json();
};

export const getVehicles = async (vehicleId: number) => {
  const res = await fetch(`https://swapi.info/api/vehicles/${vehicleId}`, { cache: "force-cache" });
  return res.json();
};

export const getSpecies = async (speciesId: number) => {
  const res = await fetch(`https://swapi.info/api/species/${speciesId}`, { cache: "force-cache" });
  return res.json();
};

export const getCategories = async (categoryName: string) => {
  const res = await fetch(`https://swapi.info/api/${categoryName}`, { cache: "force-cache" });
  return res.json();
}
