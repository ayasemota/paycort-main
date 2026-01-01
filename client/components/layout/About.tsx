"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about-us" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-green mb-6"
          >
            <div className="h-px w-8 bg-brand-green" />
            <span className="text-sm font-bold uppercase tracking-widest">Our Story</span>
          </motion.div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-6xl leading-[1.1]">
            We’re making taxes <span className="text-brand-green italic">human</span> again.
          </h2>
        </div>

        {/* The Grid of Intent */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-[2.5rem] bg-zinc-900 p-10 md:p-16 text-white relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-lg">
              <Target className="text-brand-green mb-8" size={40} />
              <h3 className="text-3xl font-bold mb-6">Built for the Nigerian Dream.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Paycort is building Nigeria&apos;s first smart, people-friendly tax companion. Whether you&apos;re a freelancer, creator, trader, or small business owner, we believe your growth shouldn&apos;t be slowed down by complex regulations.
              </p>
            </div>
            {/* Subtle Abstract Background Shape */}
            <div className="absolute top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-brand-green/10 blur-[100px] group-hover:bg-brand-green/20 transition-colors duration-700" />
          </motion.div>

          {/* Belief Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 rounded-[2.5rem] border border-zinc-100 bg-zinc-50/50 p-10 flex flex-col justify-between"
          >
            <Heart className="text-red-500 mb-8" size={32} />
            <div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4">No stress. No Jargon.</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We believe understanding taxes shouldn&apos;t be reserved for accountants. Paycort helps you learn, track, and plan automatically.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-[2.5rem] border border-zinc-100 bg-white p-10"
          >
             <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Our Mission</h4>
             <p className="text-2xl font-bold text-zinc-900 leading-snug">
               Make taxes clear, easy, and empowering for every Nigerian who earns.
             </p>
          </motion.div>

          {/* Community/CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 rounded-[2.5rem] bg-brand-green p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer"
          >
            <div className="text-white">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-brand-green bg-zinc-200" />
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-brand-green bg-zinc-900 flex items-center justify-center text-[10px] font-bold">+10k</div>
              </div>
              <h4 className="text-2xl font-bold">Join the waitlist.</h4>
              <p className="text-brand-green-dark opacity-80 font-medium">Be the first to experience simpler taxes.</p>
            </div>
            <button className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform shadow-xl">
               <Users size={24} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}