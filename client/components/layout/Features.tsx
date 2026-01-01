"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Fingerprint } from 'lucide-react';

const features = [
  { 
    title: "Real-time Tracking", 
    desc: "Monitor your tax liabilities as they happen, avoiding end-of-year surprises.", 
    icon: <Zap size={20} /> 
  },
  { 
    title: "Smart Planning", 
    desc: "Leverage AI-driven suggestions to optimize your tax position legally.", 
    icon: <BarChart3 size={20} /> 
  },
  { 
    title: "Secure & Private", 
    desc: "Your financial data is encrypted and managed with bank-grade security.", 
    icon: <Shield size={20} /> 
  },
  { 
    title: "Local Compliance", 
    desc: "Built specifically to align with Nigerian tax laws and FIRS standards.", 
    icon: <Fingerprint size={20} /> 
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative z-20 py-24 md:py-32 bg-white" >
      <div className="container mx-auto px-6">
        {/* Header for the Features - Acts as a buffer */}
        <div className="mb-16 text-center md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Capabilities</h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">Everything you need to stay ahead.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl border border-zinc-100 bg-white p-10 transition-all hover:-translate-y-2 hover:border-brand-green/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-900 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-zinc-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}