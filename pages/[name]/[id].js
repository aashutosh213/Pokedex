// import { poke } from "@/utils/data";

import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import PokemonQuery from '@/queries/PokemonQuery.gql';

import Evolution from '@/components/evolution';
import Loading from '@/components/loading';
import Heads from '@/components/heads';


const Pokemon_Query = gql`${PokemonQuery}`;




export default function Details (){

    // const [ show , setShow ] = useState(true);

    //handling button click events
    // const   handleEvolShow=()=>{
    //     setShow(false);
    // }

    const router = useRouter();
    const { name, id } = router.query;

    const { loading, error, data } = useQuery(Pokemon_Query, { variables: { id: id, name: name, },});

    if (loading) return <Loading/>;

    if (error) return <div>error.....</div>;


    const pokemon = data.pokemon;
    return (
        <>
        <Heads/>
        <div className="py-20 flex flex-row justify-evenly">
            <div className="flex-shrink-1">
                <div className=" bg-white drop-shadow-lg rounded-xl ">
                    <img className=" py-2 mx-2 " src={pokemon.image} alt={pokemon.name} />
                    <div className="flex flex-col" >
                        <h1 className="mt-4 mx-3 text-sm text-gray-700">#0{pokemon.number}</h1>
                        <h1 className="my-4 mx-3 text-lg font-bold justify-center">{pokemon.name}</h1>
                        <div className="flex flex-row justify-around mb-3">
                            {pokemon.types.map((type)=>(
                            <h4 key={type} className={`${type} text-white font-bold px-2 rounded`}>{type}</h4>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-col bg-white rounded-xl py-3">
                    <div className=" flex flex-row justify-evenly">
                        <div className="flex flex-col mx-10">
                            <h2 className="mb-1 my-4 text-lg">Height: </h2>
                            <h3 className="mb-1 mx-3 text-sm text-gray-900">Maximum: {pokemon.height.maximum}</h3>
                            <h3 className="mb-1 mx-3 text-sm text-gray-900">Minimum: {pokemon.height.minimum}</h3>
                        </div>
                        <div className="flex flex-col mx-10">
                            <h2 className="mb-1 my-4 text-lg">Weight: </h2>
                            <h3 className="mb-1 mx-3 text-sm text-gray-900">Maximum: {pokemon.weight.maximum}</h3>
                            <h3 className="mb-1 mx-3 text-sm text-gray-900">Minimum: {pokemon.weight.minimum}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col py-3 mx-10">
                        <h2 className="my-4 text-lg">Weaknesses: </h2>
                        <div className="flex flex-row justify-around mt-2">
                            {pokemon.weaknesses.map((weak)=>(
                                <h4 key={weak} className={`text-white font-bold py-1 px-2 rounded ${weak}`}>{weak}</h4>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mx-10">
                        <h2 className="mb-1 my-4 text-lg">Classication: </h2>
                        <h3 className="mb-1 mx-3 text-sm text-gray-900">{pokemon.classification}</h3>
                    </div>

                    <div className="flex flex-col py-3 mx-10">
                        <h2 className="my-4 text-lg">Resistant: </h2>
                        <div className="flex flex-row justify-around mt-2">
                            {pokemon.resistant.map((resist)=>(
                                <h4 key={resist} className={`text-white font-bold py-1 px-2 rounded ${resist}`}>{resist}</h4>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="bg-slate-50 mt-2 rounded-lg">
                    <div className="flex mx-10 justify-center">
                        <Evolution id={pokemon.id} />
                    </div>
                </div>
                

            </div>

        </div>
        </>
     );
}