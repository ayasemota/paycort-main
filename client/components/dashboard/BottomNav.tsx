"use client";

import React from 'react';
import { Home, ReceiptText, BookOpen, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', icon: Home, href: '/dashboard' },
  { name: 'Trans', icon: ReceiptText, href: '/dashboard/transactions' },
  { name: 'Learn', icon: BookOpen, href: '/dashboard/learn' },
  { name: 'Alerts', icon: Bell, href: '/dashboard/alerts' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-100 px-4 pb-2 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative flex flex-col items-center gap-1 px-5 py-2 rounded-2xl transition-all"
            >
              
              {isActive && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-green/10 rounded-2xl"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              
              <item.icon 
                size={20} 
                className={`relative z-10 transition-colors duration-300 ${isActive ? "text-brand-green" : "text-zinc-400"}`} 
              />
              
              <span className={`relative z-10 text-[10px] font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-brand-green" : "text-zinc-400"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}