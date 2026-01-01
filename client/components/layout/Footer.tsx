"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '@/hooks/use-navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {navigateTo} = useNavigation();

  return (
    <footer className="bg-white pt-24">
      <div className="container mx-auto px-6">
        
        {/* --- FINAL CTA BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-8 md:p-16 text-center text-white"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-green/20 blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-xl font-extrabold tracking-tight md:text-5xl">
              Ready to experience <br className="hidden md:block" />
              <span className="text-brand-green">effortless tax management?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
              Join thousands of Nigerians who are already staying ahead of their taxes with clarity and confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => navigateTo('/register')} className="h-14 w-full sm:w-auto rounded-full bg-brand-green px-10 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95">
                Register for Free
              </button>
              <button onClick={() => navigateTo('#')} className="h-14 w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-10 text-sm font-bold text-white hover:bg-zinc-800 transition-all">
                Speak to Support
              </button>
            </div>
          </div>
        </motion.div>

        {/* --- FOOTER LINKS --- */}
        <div className="mt-24 grid grid-cols-1 gap-12 pb-12 md:grid-cols-4 md:gap-8 border-b border-zinc-100">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-xs">P</div>
              <span className="text-xl font-bold tracking-tighter text-zinc-900">PAYCORT <span className="text-brand-green">AI</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              Making taxes clear, easy, and empowering for every Nigerian who earns. Powered by AI, designed for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Product</h4>
            <Link href="#how-it-works" className="text-sm text-zinc-500 hover:text-brand-green transition-colors">How it works</Link>
            <Link href="#features" className="text-sm text-zinc-500 hover:text-brand-green transition-colors">Features</Link>
            <Link href="/login" className="text-sm text-zinc-500 hover:text-brand-green transition-colors">Login</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Company</h4>
            <Link href="#about-us" className="text-sm text-zinc-500 hover:text-brand-green transition-colors">About Us</Link>
            <Link href="mailto:hello@paycort.com.ng" className="text-sm text-zinc-500 hover:text-brand-green transition-colors flex items-center gap-1">
              Contact Support <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-brand-green hover:text-brand-green transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-brand-green hover:text-brand-green transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-brand-green hover:text-brand-green transition-all">
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">
          <p>© {currentYear} Paycort AI. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}