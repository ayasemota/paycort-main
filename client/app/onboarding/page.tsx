"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from "@/hooks/use-navigation";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Button from "@/components/ui/Button"; //

const slides = [
  {
    id: 1,
    title: "WELCOME TO PAYCORT AI.",
    subtitle: "Your intelligent tax companion.",
    desc: "We've built the future of Nigerian tax management. No more jargon, no more guesswork. Just clarity.",
    icon: <Sparkles className="text-brand-green" size={40} />,
  },
  {
    id: 2,
    title: "REAL-TIME COMPLIANCE.",
    subtitle: "Stay ahead of the FIRS.",
    desc: "Our AI engine maps your income to current Nigerian tax laws like PAYE and VAT automatically.",
    icon: <ShieldCheck className="text-brand-green" size={40} />,
  },
  {
    id: 3,
    title: "LET'S BUILD WEALTH.",
    subtitle: "Ready to get started?",
    desc: "Your dashboard is prepared. Let's initialize your tax profile and see your first analysis.",
    icon: <Zap className="text-brand-green" size={40} />,
  }
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const { navigateTo } = useNavigation();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigateTo('/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      {/* Grid Background from Hero */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-[3rem] border border-zinc-100 bg-white p-10 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] text-center"
          >
            <div className="flex justify-center mb-10">
              <div className="h-20 w-20 bg-zinc-50 rounded-full flex items-center justify-center">
                {slides[current].icon}
              </div>
            </div>

            <header className="mb-10">
              <h1 className="text-4xl font-black tracking-tighter text-zinc-900 leading-none mb-4">
                {slides[current].title}
              </h1>
              <h2 className="text-brand-green font-bold text-sm uppercase tracking-widest">
                {slides[current].subtitle}
              </h2>
              <p className="mt-6 text-zinc-500 font-medium leading-relaxed">
                {slides[current].desc}
              </p>
            </header>

            <div className="space-y-4">
              <Button 
                onClick={nextSlide}
                className="w-full h-16 rounded-full bg-zinc-900 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-green transition-all"
              >
                <span className="flex items-center gap-2">
                  {current === slides.length - 1 ? "Get Started" : "Next Step"} 
                  <ArrowRight size={18} />
                </span>
              </Button>
              
              <button 
                onClick={() => navigateTo('/dashboard')}
                className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors py-2"
              >
                Skip Intro
              </button>
            </div>

            {/* Progress Dots */}
            <div className="mt-12 flex justify-center gap-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-green' : 'w-2 bg-zinc-200'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}