import { CategoryImage } from '@/app/_components/molecules/Category/CategoryImage';
import React from 'react'

async function fetchPlanets() {
    const url = 'https://swapi.info/api/planets'
    const res = await fetch(url)
    return res.json();
}

export default async function page() {
    const planets = await fetchPlanets()
    console.log(planets)
  return (
    <div className='grid grid-cols-3'>
        {planets.map((planet: any, index: number) => (
            <CategoryImage href={`/planets/${index+1}`} img_src={`/images/planets/${planet.name}.jpg`} img_alt={planet.name} button_text={planet.name}/>
        ))}
    </div>
  )
}
