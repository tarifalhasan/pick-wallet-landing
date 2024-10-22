import LocationCard from "@/components/shared/LocationCard";
import { Button } from "@/components/ui/button";

interface LocationType {
  backgroundUrl: string;
  logoUrl: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  id: number;
}

const LocationsData: LocationType[] = [
  {
    id: 50,
    title: "True Fine coffee",
    address: "Palas Campus, Str Sfantul Andrei 39a",
    rating: 5,
    reviews: 103,
    logoUrl: "/images/location-logo.png",
    backgroundUrl: "/images/location-bg.png",
  },
  {
    id: 52,
    title: "True Fine coffee",
    address: "Palas Campus, Str Sfantul Andrei 39a",
    rating: 5,
    reviews: 103,
    logoUrl: "/images/location-logo.png",
    backgroundUrl: "/images/location-bg.png",
  },
  {
    id: 53,
    title: "True Fine coffee",
    address: "Palas Campus, Str Sfantul Andrei 39a",
    rating: 5,
    reviews: 103,
    logoUrl: "/images/location-logo.png",
    backgroundUrl: "/images/location-bg.png",
  },
];

const PopularLocations = () => {
  return (
    <section className="container lg:pt-10">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl relative after:absolute after:-bottom-4 after:left-0 after:h-[3px] after:bg-skin-red after:w-[140px] text-left lg:text-center font-bold text-skin-black">
          Locatii populare
        </h2>
        <Button
          className="gap-2 lg:text-lg text-skin-red font-bold"
          variant={"link"}
        >
          <span>See More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
          >
            <path
              d="M1 8.5H19M19 8.5L13.6667 15.5M19 8.5L13.6667 1.5"
              stroke="#F15152"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div className=" pt-10   xl:pt-20 sm:grid-cols-2 grid gap-6 lg:grid-cols-3">
        {LocationsData.map((item) => (
          <LocationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
