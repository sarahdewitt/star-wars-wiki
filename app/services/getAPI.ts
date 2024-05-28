export const getPlanets = async (planetId: number) => {
  const res = await fetch(`https://swapi.info/api/planets/${planetId}`);
  return res.json();
};

export const getPeople = async (peopleId: number) => {
  const res = await fetch(`https://swapi.info/api/people/${peopleId}`);
  return res.json();
};

export const getFilms = async (filmId: number) => {
  const res = await fetch(`https://swapi.info/api/films/${filmId}`);
  return res.json();
};

export const getStarships = async (starshipId: number) => {
  const res = await fetch(`https://swapi.info/api/starships/${starshipId}`);
  return res.json();
};

export const getVehicles = async (vehicleId: number) => {
  const res = await fetch(`https://swapi.info/api/vehicles/${vehicleId}`);
  return res.json();
};

export const getSpecies = async (speciesId: number) => {
  const res = await fetch(`https://swapi.info/api/species/${speciesId}`);
  return res.json();
};
