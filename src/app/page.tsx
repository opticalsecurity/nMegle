import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";

import { Button } from "@nextui-org/react";

import { Dictionary } from "./dictionary";
import LanguageLoader from "./language";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  LanguageLoader();

  return (
    <HydrateClient>
      <main className="flex flec-col min-h-screen dark text-foreground bg-background justify-center items-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
          <h1 className="text-4xl font-bold">{Dictionary.doYouMissOmegle.en}</h1>
          
          <div className="flex gap-4">
            <Button variant="shadow" color="primary" size="lg">
              Text-only mode
            </Button>
            <Button variant="shadow" color="secondary" size="lg">
              Video mode
            </Button>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
