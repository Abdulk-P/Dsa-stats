import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import CodolioForm from "@/components/codolio-form";
import AnimatedShinyText from "@/components/ui/shiny-text";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <main className="container items-center justify-center mx-auto mt-4 shadow rounded-2xl">
      <div className="text-center transition-all ease-in group">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 over:dark:text-neutral-400">
          <span>✨ Showcase your DSA Skills on your GitHub</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <TextHoverEffect text="DSA STATS" />
      </div>

      <div className="items-center justify-center w-full px-2 mx-auto">
        <CodolioForm />
      </div>
      <div id="result" className="mt-8">
        {/* result data */}
      </div>
    </main>
  );
}
