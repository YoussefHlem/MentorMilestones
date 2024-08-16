import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-white text-center">Home Page</h1>
      <Link className="text-white bg-slate-600 p-2 rounded-md" href="/login">
        Authentication Page
      </Link>
    </>
  );
}
