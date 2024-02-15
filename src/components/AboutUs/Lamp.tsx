"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Technologies from "./TechnologiesList";
import useWindowSize from "../../hooks/windowSize";

const title = "About us"
const description = "Witaj w DualWeb - miejscu, gdzie pasja do tworzenia innowacyjnych rozwiązań spotyka się z zaangażowaniem w rozwijanie oblicza Twojego biznesu online. Jesteśmy zespołem kreatywnych entuzjastów, gotowych przekuć Twoje pomysły na funkcjonalne i estetyczne strony internetowe."


export function Lamp() {

  return (
    <LampContainer title={title}
    description={description}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}

        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  title,
  description,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  description? : string;
  className?: string;
}) => {
  const windowSize = useWindowSize()
  console.log(windowSize)
  const lightSettings = {
    lightUpTime: 2,
    lightUpDelay: 0.5,

    lampInitialWidth: "15rem",
    lampFinalWidth: "30rem",
    lightInitialIntensity: "9rem",
    lightFinalIntensity: "18rem",
  }

  if (windowSize.width < 640) {
    lightSettings.lampInitialWidth = "5rem"
    lightSettings.lampFinalWidth = "10rem"
    lightSettings.lightInitialIntensity = "2rem"
    lightSettings.lightFinalIntensity = "10rem"
  } else if (windowSize.width < 1048) {
    lightSettings.lampInitialWidth = "10rem"
    lightSettings.lampFinalWidth = "20rem"
    lightSettings.lightInitialIntensity = "6rem"
    lightSettings.lightFinalIntensity = "12rem"
  }

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">

        {/* Two motions div for setting light */}
        <motion.div
          initial={{ opacity: 0.5, width: lightSettings.lampInitialWidth }}
          whileInView={{ opacity: 1, width: lightSettings.lampFinalWidth }}
          transition={{
            delay: lightSettings.lightUpDelay,
            duration: lightSettings.lightUpTime,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: lightSettings.lampInitialWidth }}
          whileInView={{ opacity: 1, width: lightSettings.lampFinalWidth }}
          transition={{
            delay: lightSettings.lightUpDelay,
            duration: lightSettings.lightUpTime,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* light settings */}
        <motion.div
          initial={{ width: lightSettings.lightInitialIntensity }}
          whileInView={{ width: lightSettings.lightFinalIntensity }}
          transition={{
            delay: lightSettings.lightUpDelay,
            duration: lightSettings.lightUpTime,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        {/* straight line settings */}
        <motion.div
          initial={{ width: lightSettings.lampInitialWidth }}
          whileInView={{ width: lightSettings.lampFinalWidth }}
          transition={{
            delay: lightSettings.lightUpDelay,
            duration: lightSettings.lightUpTime,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};