import Image from "next/image";
import photoPro from "./assets/photo-pro-mateo.png";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mt-24">
        <div className="flex-between flex flex-wrap-reverse items-center justify-center">
          <div className="max-md:mt-6 max-md:text-center md:w-3/5">
            <p>Etudiant développeur</p>
            <h1 className="mt-2 text-4xl md:text-7xl">Salut, c'est</h1>
            <WordRotate
              className="mb-8 text-4xl text-primary md:text-7xl"
              words={["Mateo Cabrera", "Nova"]}
              duration={3500}
            />
            <p className="font-thin">
              Je construis des choses avec ma souris et mon clavier.
            </p>
          </div>
          <div>
            <Image
              src={photoPro}
              alt="Mateo"
              width={400}
              height={400}
              className="rounded-full"
              priority={true}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/CV_Epitech-Mateo_CABRERA.pdf">
            <Button
              variant="outline"
              className="mt-12 rounded-3xl border-primary text-primary"
            >
              <p>DOWNLOAD CV</p>
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
