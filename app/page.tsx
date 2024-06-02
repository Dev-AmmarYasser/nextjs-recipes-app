import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-[90px]">
      <h1 className="text-[60px] font-bold text-center">
        Welcome to Recipes App
      </h1>
      <Link
        href="/recipe-list"
        className="text-center mt-10 tracking-wider block mb-16 bg-orange-400 mx-auto w-fit font-semibold rounded-lg py-3 px-8 hover:bg-orange-500 transition duration-300  text-white"
      >
        Explore Recipies
      </Link>
    </div>
  );
}
