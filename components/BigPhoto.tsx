import { motion } from "framer-motion";
import Image from "next/image";
import photoPro from "../app/assets/photo-pro-mateo.png";

export default function BigPhoto() {
  return (
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
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
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
  );
}
