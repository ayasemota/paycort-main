"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, Zap } from 'lucide-react';

export default function TaxLiveDemo() {
  const [amount, setAmount] = useState(0);
  const targetAmount = 1250000; // Example Income

  useEffect(() => {
    const timeout = setTimeout(() => setAmount(targetAmount), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const taxBreakdown = [
    { label: "Personal Allowance", value: "₦200,000", color: "bg-zinc-200" },
    { label: "State Tax (PAYE)", value: "₦145,000", color: "bg-brand-green" },
    { label: "Pension (8%)", value: "₦100,000", color: "bg-zinc-900" },
  ];

  return (
    <section className="bg-zinc-50/50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side: Content */}
          <div className="max-w-xl">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <Calculator size={20} />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
              Clarity in <span className="text-brand-green">seconds</span>, not days.
            </h2>
            <p className="mt-6 text-sm md:text-lg leading-relaxed text-zinc-500">
              Stop guessing. Paycort AI analyzes your income streams and applies the latest Nigerian tax laws to give you an exact breakdown of your liabilities instantly.
            </p>
            
            <ul className="mt-8 space-y-4">
              {["FIRS & State PAYE Optimized", "Self-Employed & Freelancer Friendly", "Real-time Policy Updates"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-zinc-700">
                  <CheckCircle2 size={18} className="text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Animated Card */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand-green/20 to-transparent blur-3xl opacity-50" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-200/50 md:p-12"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold uppercase tracking-wider text-zinc-400">Monthly Analysis</span>
                <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-brand-green">
                  <Zap size={12} fill="currentColor" /> Live
                </div>
              </div>

              {/* Counter Display */}
              <div className="mb-10">
                <p className="text-sm font-medium text-zinc-500">Gross Income</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-zinc-900 md:text-5xl">₦</span>
                  <motion.span className="text-4xl font-black text-zinc-900 md:text-5xl">
                    {amount.toLocaleString()}
                  </motion.span>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="space-y-6">
                {taxBreakdown.map((item, i) => (
                  <div key={i}>
                    <div className="mb-2 flex justify-between text-sm font-bold">
                      <span className="text-zinc-600">{item.label}</span>
                      <span className="text-zinc-900">{item.value}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-zinc-900 p-6 text-center text-white">
                <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">Net Take-Home</p>
                <p className="mt-1 text-2xl font-bold">₦805,000</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}