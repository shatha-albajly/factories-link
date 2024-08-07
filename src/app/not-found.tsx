import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Page not found</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}
