import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import { useState , useEffect   } from 'react';

import EvolutionQuery from '../queries/EvolutionQuery.gql';
import { EvolutionData } from '../Datas/EvolutionData';
import Loading from './loading';
const Evolution_Query = gql`${EvolutionQuery}`;



function Evolution({ id }) {

  const [ show, setShow ] = useState(false)
  const [evol, setEvol] = useState(null);



  async function fetch(){
    const data = await EvolutionData(id);
    setEvol(data);
  }

    const handleFetchData=() => {
      fetch();
      setShow(true);
    };

    // const { loading, error, data } = useQuery(Evolution_Query, {
    //   variables: { id },
    // });
  
    // if (!evol) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
  
    const evolutions = evol && evol.evolutions.pokemon.evolutions;
    console.log(evol);
  
    return (
      <div className=''>
        {!evol?(<div><button className={`bg-blue-500 my-2 text-white rounded-md p-2 ${!show? "mt-0" : "hidden"}`} onClick={handleFetchData}>Show Evolution</button> <div className={`${!show? "hidden":"mt-2"}`}><Loading /> </div></div>):(
          <div className='flex flex-col'>
          <div className='flex justify-center'>
            <h2 className='mb-1 my-4 text-lg'>Evolutions: </h2>
          </div>

      
      
          {evolutions != null ? (
          <ul className='flex flex-col justify-center'>
              {evolutions.map((evolution) => (
              <li key={evolution.id} className="py-2 ">
                  <Link href={`/${evolution.name}/${evolution.id}`} className="">
                  <div className=" bg-white drop-shadow-lg rounded-xl justify-center">
                      <img className=" py-2 mx-2 h-32 object-cover object-center " src={evolution.image} alt={evolution.name} />
                      <div className="flex flex-col" >
                          <h1 className="mt-4 mx-3 text-sm text-gray-700">#0{evolution.number}</h1>
                          <h1 className="mb-2 mx-3 text-lg font-bold justify-center">{evolution.name}</h1>
                      </div>
                  </div>

                  </Link>
              </li>
              ))}
          </ul>
          ) : (
          <p className='mb-3 mx-3 text-sm text-gray-900'>This Pokémon does not evolve.</p>
          )}
          </div>
        )}
        
      </div>
    );
  }
  

export default Evolution;