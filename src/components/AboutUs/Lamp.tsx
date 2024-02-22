"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import useWindowSize from "../../hooks/useWindowSize";

const LampContainer = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) => {
  const windowSize = useWindowSize();

  const textSettings = {
    slideUpTime: 1.5,
    slideUpDelay: 0,
    slideDistance: 100,
  };

  const lightSettings = {
    lightUpTime: 3,
    lightUpDelay: 0.5,

    lampInitialWidth: "15rem",
    lampFinalWidth: "30rem",
    lightInitialIntensity: "9rem",
    lightFinalIntensity: "18rem",
  };

  if (windowSize.width < 640) {
    lightSettings.lampInitialWidth = "5rem";
    lightSettings.lampFinalWidth = "14rem";
    lightSettings.lightInitialIntensity = "2rem";
    lightSettings.lightFinalIntensity = "10rem";
  } else if (windowSize.width < 1048) {
    lightSettings.lampInitialWidth = "10rem";
    lightSettings.lampFinalWidth = "20rem";
    lightSettings.lightInitialIntensity = "6rem";
    lightSettings.lightFinalIntensity = "12rem";
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

      <div className="absolute top-1/2 scale-y-125 -translate-y-[11rem] h-48 bg-transparent text-center z-999 font-montserrat font-semibold">
        <h2 className="text-white text-5xl">{title}</h2>
      </div>

      <div className="absolute top 1/2 scale-y-125 z-50 flex flex-col items-center px-5 sm:w-4/5 md:w-3/4 lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0.5, y: textSettings.slideDistance }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: textSettings.slideUpDelay,
            duration: textSettings.slideUpTime,
            ease: "easeInOut",
          }}
          className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-white text-center font-medium tracking-tight text-transparent text-1xl md:text-xl font-montserrat"
        >
          {children}
        </motion.h1>
      </div>
    </div>
  );
};

export default LampContainer;
