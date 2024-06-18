import CategoryImage from "@/app/_components/molecules/Category/CategoryImage";
import CategoryTitleBlock from "@/app/_components/molecules/Category/CategoryTitleBlock";
import { Header } from "@/app/_components/organisms/Header/Header";
import { CategorySkeleton, ImageSkeleton } from "@/app/_components/templates/PageSkeleton";
import { extractIdFromUrl } from "@/app/_utils/extractId";
import { Suspense } from "react";

async function fetchVehicles() {
  const url = "https://swapi.info/api/vehicles";
  const res = await fetch(url);
  return res.json();
}

export default async function page() {
  const vehicles = await fetchVehicles();
  return (
    <>
      <Suspense fallback={<CategorySkeleton />}>
        <Header />
        <CategoryTitleBlock name={"Vehicles"} />
        <div className="grid grid-cols-2 md:grid-cols-3">
          {vehicles.map((vehicle: any, index: number) => (
            <Suspense key={index} fallback={<ImageSkeleton />}>
              <CategoryImage
                key={index}
                href={`/vehicles/${extractIdFromUrl(vehicle.url)}`}
                img_src={`/images/vehicles/${extractIdFromUrl(
                  vehicle.url
                )}.jpg`}
                img_alt={vehicle.name}
                button_text={vehicle.name}
              />
            </Suspense>
          ))}
        </div>
      </Suspense>
    </>
  );
}
