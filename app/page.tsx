import Image from "next/image";
import photoPro from "./assets/photo-pro_mirrored.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="mt-24">
        <div className="flex flex-between items-center">
          <div>
            <p>Etudiant développeur</p>
            <h1 className="mt-2 text-7xl">Salut, c'est</h1>
            <h1 className="mb-8 text-7xl text-primary">Mateo Cabrera</h1>
            <p className="font-thin">Je construis des choses avec ma souris et mon clavier.</p>
          </div>
          <div>
            <Image
              src={photoPro}
              alt="Mateo"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
