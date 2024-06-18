"use client";

import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import { Download } from "lucide-react";
import Link from "next/link";
import DesktopMetrics from "./DesktopMetrics";
import MobileMetrics from "./MobileMetrics";
import BigPhoto from "./BigPhoto";

export default function HeroSection() {
  return (
    <>
      <div className="h-dvh max-lg:flex max-lg:items-end">
        <section className="mb-10 lg:mt-24">
          <div className="flex-between flex items-center justify-evenly max-xl:flex-wrap-reverse">
            <div className="max-lg:mt-6 max-lg:text-center md:w-full lg:w-3/5 xl:w-full">
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
            <BigPhoto />
          </div>
        </section>
        <DesktopMetrics />
      </div>
      <MobileMetrics />
    </>
  );
}
