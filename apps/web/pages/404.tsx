import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-950">404</p>
        <h1 className="mt-4 typo-h1 tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-6 typo-copy-normal text-gray-600">
          Sorry, we couldn`t find the page you`re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            className="rounded-md bg-primary-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-950"
            href="/"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
