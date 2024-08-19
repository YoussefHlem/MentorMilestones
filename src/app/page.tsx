import Link from "next/link";

export default function Home() {
  // Furniture Abstract Factory Use In Client Side

  return (
    <>
      <h1 className="text-center">Home Page</h1>
      <Link className=" bg-slate-600 p-2 rounded-md" href="/login">
        Authentication Page
      </Link>
      <Link className=" bg-slate-600 p-2 rounded-md" href="/furniture">
        Furniture Factory
      </Link>
    </>
  );
}
