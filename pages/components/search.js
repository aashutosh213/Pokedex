import { useState } from "react";

export default function Search() {
    const [pokemon, setPokemon] = useState('');

    function handleInputChange(event) {
      setPokemon(event.target.value);
    }    return (
        <div className='flex flex-row'>
            <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
            type="text"
            name="Pokemon"
            id="Pokemon"
            placeholder="Enter Pokemon"
            value={pokemon}
            onChange={handleInputChange}
            onBlur={() => console.log("Input field blurred")}
            />
            <button className="bg-sky-500 text-white font-bold py-1 px-2 rounded">Search</button>
        </div>
    );
};


