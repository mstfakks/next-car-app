import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps, FilterProps } from "@/types";
import { getCars } from "@/utils";
import { GetServerSidePropsContext } from "next";

interface HomeProps {
  allCars: CarProps[];
}

export default function Home({ allCars }: HomeProps) {
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query as FilterProps;
  const allCars = await getCars({
    manufacturer: query?.manufacturer || "",
    fuel: query?.fuel || "",
    year: query?.year || 2022,
    limit: query?.limit || 10,
    model: query?.model || "",
  });
  return {
    props: {
      allCars,
    },
  };
}
