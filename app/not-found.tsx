import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative text-center mt-[100px]">
      <h2 className=" font-bold text-6xl mb-6 ">Not Found</h2>
      <p className="text-2xl mb-8 text-slate-500">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="bg-cyan-400 block w-fit mx-auto text-white px-6 py-4 text-2xl rounded-xl font-bold"
      >
        Return Home
      </Link>
    </div>
  );
}
