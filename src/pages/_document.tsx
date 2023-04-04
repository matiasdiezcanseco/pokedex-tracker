import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-5xl mx-auto p-4">
        <header>
          <nav className="flex justify-center space-x-12 border-b-[1px] pb-2 mb-4 border-slate-800">
            <Link href="/">
              <span className="hover:underline text-2xl">Pokedex</span>
            </Link>
            <Link href="/encounter ">
              <span className="hover:underline text-2xl">
                Encounter Pokemon
              </span>
            </Link>
          </nav>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
