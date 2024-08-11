import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="m-10">Homepage</h2>
    <Link href='./login' className="m-4 p-4 bg-amber-700 text-white rounded-full">Login</Link>
    <Link href='./signup' className="m-4 p-4 bg-amber-700 text-white rounded-full">Signup</Link>
    <Link href='./contact' className="m-4 p-4 bg-amber-700 text-white rounded-full">Contact</Link>

    </main>
  );
}
