import Link from "next/link";
const Heads = () => {
  return (
    <div className="mt-10 px-20">
      <div className='flex flex-row justify-items-stretch items-center justify-center' >
        <Link href={"/"}>
            <h1 className='text-5xl  font-semibold flex ml-7'>Pokedex</h1>
        </Link>
          </div>
    </div>
  );
};

export default Heads;
