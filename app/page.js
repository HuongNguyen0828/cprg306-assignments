import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <main className="text-center m-6">
      <h1 className="text-blue-500 text-3xl font-bold p-7">
        Web Development 2 - Assignments
      </h1>
      <ul className="underline underline-offset-1">
        {weeks.map((week) => (
          <li key={week} className="p-1 ml-30">
            <Link href={`/week-${week}`}>Week {week}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
