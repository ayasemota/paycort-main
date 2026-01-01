"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, BrainCircuit, LineChart } from 'lucide-react';
import { useNavigation } from '@/hooks/use-navigation';


const steps = [
  {
    num: "01",
    title: "Secure Data Sync",
    desc: "Connect your bank accounts or upload your transaction spreadsheets. We use bank-grade encryption to ensure your financial data stays private and protected.",
    icon: <MousePointerClick className="text-brand-green" size={24} />,
    color: "bg-green-50",
  },
  {
    num: "02",
    title: "AI Tax Mapping",
    desc: "Our AI engine categorizes every transaction, identifying tax-deductible expenses and income types based on current Nigerian tax laws like PAYE and VAT.",
    icon: <BrainCircuit className="text-brand-green" size={24} />,
    color: "bg-zinc-900", // Dark mode card for contrast
  },
  {
    num: "03",
    title: "Actionable Insights",
    desc: "Receive a simplified dashboard showing exactly what you owe, when it's due, and personalized tips to save money on your next tax filing.",
    icon: <LineChart className="text-brand-green" size={24} />,
    color: "bg-brand-green",
  }
];

export default function HowItWorks() {
  const {navigateTo} = useNavigation();
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">The Process</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            From chaos to <span className="text-brand-green">clarity</span>.
          </h3>
        </div>

        {/* Step-by-Step Flow */}
        <div className="relative space-y-12">
          {/* Vertical Connecting Line (Desktop Only) */}
          <div className="absolute left-[2.25rem] top-0 hidden h-full w-px bg-zinc-100 md:block" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col md:flex-row items-start gap-8 md:gap-20"
            >
              {/* The Number Circle */}
              <div className="relative z-10 flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-zinc-50 shadow-sm md:h-12 md:w-12">
                <span className="text-sm font-bold text-zinc-900">{step.num}</span>
              </div>

              {/* The Content Card */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-[2.5rem] border border-zinc-100 bg-white p-8 md:p-12 transition-all hover:border-brand-green/20 hover:shadow-xl hover:shadow-zinc-200/40">
                <div>
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? 'bg-white/10' : 'bg-brand-green/10'}`}>
                    {step.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h4>
                  <p className="text-zinc-500 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Visual Representation for the Step */}
                <div className={`h-48 md:h-64 rounded-3xl ${step.color} relative overflow-hidden flex items-center justify-center`}>
                   {/* Decorative Elements inside the card */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                   {i === 0 && <div className="h-16 w-3/4 rounded-full bg-white/20 blur-xl" />}
                   {i === 1 && <div className="grid grid-cols-3 gap-2 w-1/2 opacity-20"><div className="h-2 bg-white rounded-full"/><div className="h-2 bg-white rounded-full"/><div className="h-2 bg-white rounded-full"/></div>}
                   {i === 2 && <div className="h-24 w-24 rounded-full border-4 border-white/20" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-zinc-500 mb-6">Ready to stop guessing?</p>
          <button onClick={() => navigateTo("/register")} className="h-14 px-10 rounded-full bg-brand-green text-white font-bold hover:bg-brand-green-dark transition-all transform hover:scale-105">
            Get Started with Paycort AI
          </button>
        </motion.div>
      </div>
    </section>
  );
}