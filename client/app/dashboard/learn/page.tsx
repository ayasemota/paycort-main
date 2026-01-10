"use client";

import React, { useState } from "react";
import { BookOpen, PlayCircle, Shield, TrendingUp, Zap, Search, ChevronRight } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

// Dummy Data for Learning Modules
const CATEGORIES = ["All", "Basics", "AI", "Security", "Crypto"];

const LEARN_MODULES = [
  {
    id: 1,
    title: "Getting Started",
    description: "Master the basics of Paycort in 5 minutes.",
    category: "Basics",
    duration: "5 min",
    progress: 100,
    icon: <Zap size={20} className="text-white" />,
    color: "bg-black",
  },
  {
    id: 2,
    title: "Smart Tax AI",
    description: "Automate your tax savings.",
    category: "AI",
    duration: "12 min",
    progress: 45,
    icon: <PlayCircle size={20} className="text-white" />,
    color: "bg-brand-green",
  },
  {
    id: 3,
    title: "Crypto Compliance",
    description: "Avoid FIRS trouble with smart reporting.",
    category: "Crypto",
    duration: "25 min",
    progress: 0,
    icon: <TrendingUp size={20} className="text-white" />,
    color: "bg-purple-600",
  },
  {
    id: 4,
    title: "Account Security",
    description: "Protect your wallet from fraud.",
    category: "Security",
    duration: "8 min",
    progress: 0,
    icon: <Shield size={20} className="text-white" />,
    color: "bg-blue-600",
  },
];

export default function LearnPage() {
  const { navigateTo } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredModules = activeCategory === "All" 
    ? LEARN_MODULES 
    : LEARN_MODULES.filter(m => m.category === activeCategory);

  return (
    <main className="min-h-screen bg-zinc-50/50 pt-12 px-6 font-sans text-black animate-in fade-in duration-500 pb-32">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            Academy
          </p>
          <h1 className="text-3xl font-black tracking-tighter uppercase mt-1">
            Learn
          </h1>
        </header>

        {/* Search Bar */}
        <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
                type="text" 
                placeholder="Search topics..." 
                className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white border-2 border-zinc-100 placeholder:text-zinc-400 text-sm font-bold focus:outline-none focus:border-brand-green transition-colors"
            />
        </div>

        {/* Continue Learning Section */}
        <section className="mb-10">
            <div className="flex justify-between items-end mb-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    Continue Learning
                </h3>
            </div>
            
            <div className="p-6 rounded-[2rem] bg-white border-2 border-zinc-100 active:scale-95 transition-transform cursor-pointer shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-green flex items-center justify-center">
                        <PlayCircle size={20} className="text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-black uppercase tracking-wider">
                        In Progress
                    </span>
                </div>
                
                <h2 className="text-lg font-black uppercase tracking-tight mb-1">
                    Smart Tax AI
                </h2>
                <p className="text-xs text-zinc-500 font-medium mb-4">
                    Chapter 2: Deduction Logic
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green w-[45%]"></div>
                </div>
            </div>
        </section>

        {/* Categories */}
        <section className="mb-8 overflow-x-auto no-scrollbar">
            <div className="flex gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-colors ${
                            activeCategory === cat 
                            ? "bg-black text-white" 
                            : "bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>

        {/* Course Grid */}
        <section className="grid grid-cols-1 gap-4">
            {filteredModules.map((module) => (
                <div
                    key={module.id}
                    className="group relative overflow-hidden p-5 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-200 transition-all cursor-pointer active:scale-95"
                >
                    <div className="flex items-center gap-4">
                        {/* Course Icon/Thumbnail */}
                        <div className={`h-16 w-16 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-zinc-100 ${module.color}`}>
                            {module.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-black uppercase tracking-tight truncate mb-1">
                                {module.title}
                            </h3>
                            <p className="text-[11px] text-zinc-500 font-medium leading-tight mb-2 line-clamp-2">
                                {module.description}
                            </p>
                            
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400">
                                    <BookOpen size={12} /> {module.duration}
                                </span>
                                {module.progress === 100 && (
                                    <span className="text-[10px] font-black text-brand-green uppercase tracking-wider">
                                        Completed
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-2">
                            <ChevronRight className="text-zinc-300" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
      </div>
    </main>
  );
}
