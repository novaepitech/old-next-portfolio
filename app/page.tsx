import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mateo Cabrera",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <section>
        <h1>Projets sélectionnés</h1>
      </section>
    </>
  );
}
