import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-2xl mt-4 font-semibold">Page Not Found </h2>
      <p className="mt-2 text-gray-500">
        Oops! The page you are looking for does not exist.
      </p>

      <Link href="/" className="mt-6 px-4 py-3 bg-accent text-black font-semibold rounded-xl hover:bg-accent-soft">
        Go Home
      </Link>

    </div>
  );
}