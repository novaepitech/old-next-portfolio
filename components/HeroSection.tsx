"use client";

import Image from "next/image";
import photoPro from "../app/assets/photo-pro-mateo.png";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import { Download } from "lucide-react";
import Link from "next/link";
import NumberTicker from "./magicui/number-ticker";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="max-lg:flex max-lg:h-dvh max-lg:items-end">
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
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeIn",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 2,
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[406px] xl:w-[406px]"
                >
                  <Image
                    src={photoPro}
                    alt="Mateo Cabrera"
                    width={400}
                    height={400}
                    className="rounded-full"
                    priority={true}
                  />
                </motion.div>
                <motion.svg
                  className="h-[300] w-[300px] xl:h-[406px] xl:w-[406px]"
                  fill="transparent"
                  viewBox="0 0 506 506"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                      strokeDasharray: [
                        "15 120 25 25",
                        "16 25 92 72",
                        "4 250 22 22",
                      ],
                      rotate: [120, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <section className="metrics mt-20 flex justify-evenly">
        <div className="flex">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={7} />
          </p>
          <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
            {" "}
            Technologies maîtrisées
          </p>
        </div>
        <div className="flex">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={22} />
          </p>
          <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
            {" "}
            Projets réalisés
          </p>
        </div>
        <div className="flex">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={834} />
          </p>
          <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
            {" "}
            commits sur GitHub
          </p>
        </div>
        <div className="flex">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
            <NumberTicker value={120} />
          </p>
          <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
            {" "}
            kg au bench
          </p>
        </div>
      </section>
    </>
  );
}
