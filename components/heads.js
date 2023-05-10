import Link from "next/link";
const Heads = () => {
  return (
    <div className="px-20 bg-white py-6">
      <div className='flex flex-row justify-items-stretch items-center justify-center' >
        <Link href={"/"}>
            <h1 className='text-5xl  font-semibold flex ml-7'>Pokedex</h1>
        </Link>
          </div>
    </div>
  );
};

export default Heads;
