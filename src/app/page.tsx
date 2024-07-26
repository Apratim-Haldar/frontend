"use client";

import { NavbarDemo } from "@/components/Navbar";
import { AuroraBackgroundDemo } from "@/components/Hero";
import { BentoGridThirdDemo } from "@/components/Grid";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MacbookScrollDemo } from "@/components/laptop";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <AuroraBackgroundDemo />
      <div className="datachart"></div>
      <AuroraBackground 
        className="bg-zinc-800 py-16" 
        customStyles="
          [[--aurora:repeating-linear-gradient(100deg,var(--blue-900)_10%,var(--blue-800)_20%,var(--blue-700)_30%)]
          [background-image:var(--aurora)]
          dark:[background-image:var(--aurora)]
        "
      >
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-roboto font-bold text-white mb-2">
            Main Heading
          </h1>
          <h2 className="text-xl font-roboto font-light text-white mb-8">
            Subtitle goes here
          </h2>
          <BentoGridThirdDemo />
        </div>
      </AuroraBackground>
      <Pricing />
      <MacbookScrollDemo/>
    </div>
  );
}
