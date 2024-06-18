import Image from "next/image";
import photoPro from "../app/assets/photo-pro-mateo.png";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import { Download } from "lucide-react";
import Link from "next/link";
import NumberTicker from "./magicui/number-ticker";

export default function HeroSection() {
  return (
    <>
      <div className="max-lg:flex max-lg:h-dvh max-lg:items-end">
        <section className="mb-10 lg:mt-24">
          <div className="flex-between flex max-xl:flex-wrap-reverse items-center justify-evenly">
            <div className="max-lg:mt-6 max-lg:text-center lg:w-3/5 xl:w-3/6">
              <p>Etudiant développeur</p>
              <h1 className="mt-2 text-4xl lg:text-7xl">Salut, c&apos;est</h1>
              <WordRotate
                className="mb-8 text-4xl text-primary lg:text-7xl"
                words={["Mateo Cabrera", "Nova"]}
                duration={3500}
              />
              <p className="font-thin">
                Je construis des choses avec ma souris et mon clavier.
              </p>
              <Link href="/CV_Epitech-Mateo_CABRERA.pdf">
                <Button
                  variant="outline"
                  className="mt-12 rounded-3xl border-primary text-primary transition-all hover:-translate-y-1"
                >
                  <p>DOWNLOAD CV</p>
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src={photoPro}
                alt="Mateo Cabrera"
                width={400}
                height={400}
                className="rounded-full"
                priority={true}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="metrics mt-16 flex justify-evenly">
        <div className="flex">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={7} />
          </p>
          <p className="w-1/2 whitespace-pre-wrap text-lg font-thin tracking-tighter text-white">
            {" "}
            Technologies maîtrisées
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={22} />
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={834} />
          </p>
        </div>
        <div>
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={120} />
          </p>
        </div>
      </section>
    </>
  );
}
