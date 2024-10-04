import Link from "next/link";
export default function Page() {
  return (
    <main className="text-center m-6">
      <h1 className="text-blue-500 text-3xl font-bold p-7">Web Development 2 - Assignments</h1>
      <ul className="underline underline-offset-1">
        <li><Link href="/week-2">Week 2</Link></li>
        <li><Link href="/week-3">Week 3</Link></li>
        <li><Link href="/week-4">Week 4</Link></li>
        <li><Link href="/week-5">Week 5</Link></li>

      </ul>
    </main>
  );
}
