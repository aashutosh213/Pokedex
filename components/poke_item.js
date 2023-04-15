// import { poke } from "@/utils/data"
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useState } from "react";

import Pagination from "./pagination";
import PokemonsQuery from "@/queries/PokemonsQuery.gql";
import Loading from "./loading";

const QUERY = gql`
  ${PokemonsQuery}
`;

export function PokeItem() {
  const [page, setPage] = useState(0);
  const pageSize = 20;

  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      first: 999,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    <div>error.....</div>;
  }

  // console.log(data);

  const pokemons = data.pokemons;

  // if(data == null)return (
  // <div>
  //   <h1>Aashutosh.....</h1>
  // </div>
  // );

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedPokemons = pokemons.slice(startIndex, endIndex);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {displayedPokemons.map((Pokemon) => (
            <Link
              key={Pokemon.id}
              href={Pokemon.name + "/" + Pokemon.id}
              name={Pokemon.name}
              className="group bg-white rounded-lg mb-9"
            >
              <div className=" object-contain w-full rounded-lg mt-9">
                <img
                  src={Pokemon.image}
                  alt={Pokemon.name}
                  className="h-60 object-cover object-center group-hover:opacity-75 mx-auto"
                />
              </div>

              <div className="flex flex-row">
                <h3 className="mt-4 mx-3 text-sm text-gray-700">
                  #0{Pokemon.number}
                </h3>
              </div>

              <div className="flex flex-col">
                <p className="mt-1 mx-3 text-lg font-medium text-gray-900">
                  {Pokemon.name}
                </p>
                <div className="flex flex-row justify-around py-2">
                  {Pokemon.types.map((type) => (
                    <h4
                      key={`${Pokemon.id + type}`}
                      className={
                        "text-white font-bold py-1 px-2 rounded bg-sky-500"
                      }
                    >
                      {type}
                    </h4>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={page}
          pageSize={pageSize}
          totalItems={pokemons.length}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}


