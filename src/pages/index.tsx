import Head from "next/head";
import Button from "../components/atoms/button/button";
import Pokedex from "../components/organisms/pokedex/pokedex";
import { usePokedex } from "../hooks/use-pokedex/use-pokedex";

export default function Home() {
  const { pokedex, releaseAll } = usePokedex();

  return (
    <>
      <Head>
        <title>Pokedex Tracker App</title>
        <meta name="description" content="Track your pokedex status" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-6">
        <Pokedex pokemons={pokedex} />
        {pokedex.length !== 0 && (
          <div>
            <Button
              onClick={releaseAll}
              className="bg-slate-900 py-2 px-4 rounded-xl hover:bg-slate-800"
            >
              Release All
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
