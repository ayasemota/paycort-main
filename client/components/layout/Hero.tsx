"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from "@/components/ui/Button";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  
  // We start the movement later (0.1) and limit the upward travel
  // This ensures the mockup stays below the buttons while they are visible
 const y = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 1]); // Placeholder for logic

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden px-6 pt-24 md:pt-36">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-brand-green/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-balance text-4xl font-extrabold tracking-tight text-zinc-900 md:text-7xl"
        >
          Understand Your Taxes <br className="hidden md:block" /> 
          Before They <span className="text-brand-green">Understand You.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-base text-zinc-500 md:text-lg"
        >
          A smart AI tool that helps Nigerians see, track, and plan their taxes in real time powered by clarity, not confusion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button className="w-full sm:w-auto h-12 rounded-full bg-zinc-900 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800">
            Get Started Free
          </Button>
          <button className="group flex items-center gap-2 text-sm font-bold text-zinc-900 px-6 py-2">
            See how it works <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* --- THE FIX: Increased mt-24 to mt-32/40 and refined parallax --- */}
      <motion.div 
        style={{ y }} 
        className="relative mt-28 w-full max-w-5xl px-4 md:mt-36"
      >
        <div className="relative rounded-t-3xl border-x border-t border-zinc-200 bg-white p-2 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]">
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 rounded-t-2xl">
            <div className="flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            </div>
            <div className="h-4 w-32 rounded-full bg-zinc-200/50 md:block hidden" />
            <div className="h-8 w-8 rounded-full bg-zinc-100" />
          </div>

          {/* Mockup Body Area */}
          <div className="relative h-48 overflow-hidden bg-white md:h-72">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
                  <div className="h-32 rounded-2xl bg-zinc-50 border border-zinc-100" />
                  <div className="h-32 rounded-2xl bg-zinc-50 border border-zinc-100" />
                  <div className="h-32 rounded-2xl bg-zinc-50 border border-zinc-100 hidden md:block" />
              </div>
              {/* This gradient is crucial for the "clean" transition to the Grid */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}