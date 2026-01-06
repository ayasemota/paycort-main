"use client";

import React, { useState } from 'react';
import { Search, ReceiptText, Filter } from 'lucide-react';

type FilterType = 'all' | 'income' | 'expenses';

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Mock data structure - currently empty to show the "No transactions" state
  const transactions: any[] = []; 

  const getEmptyStateMessage = () => {
    if (activeFilter === 'income') return "No income transactions found.";
    if (activeFilter === 'expenses') return "No expense transactions found.";
    return "Your transactions will appear here.";
  };

  return (
    <main className="min-h-screen bg-white pt-12 px-6 font-sans text-black animate-in fade-in duration-500">
      <div className="max-w-md mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-black tracking-tighter uppercase">Transactions</h1>
          <p className="text-zinc-500 font-medium mt-1">Monitor every kobo moving in and out.</p>
        </header>

        {/* Dynamic Filter Buttons - Kuda Style */}
        <div className="flex bg-zinc-50 p-1 rounded-2xl border border-zinc-100 mb-10">
          {(['all', 'income', 'expenses'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                activeFilter === filter 
                ? "bg-white text-black shadow-sm" 
                : "text-zinc-400 hover:text-zinc-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Bar Placeholder */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
          <input 
            type="text" 
            placeholder="Search history..."
            className="w-full pl-12 pr-4 py-4 bg-zinc-50 border-none rounded-2xl text-sm font-bold placeholder:text-zinc-300 focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
          />
        </div>

        {/* Dynamic Empty State */}
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <div className="h-20 w-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
            <ReceiptText className="text-zinc-200" size={32} />
          </div>
          
          <h2 className="text-lg font-black uppercase tracking-tight text-zinc-900">
            No Transactions Found
          </h2>
          
          <p className="text-zinc-400 text-sm font-medium mt-2 max-w-[200px] leading-relaxed">
            {getEmptyStateMessage()}
          </p>

          <button className="mt-8 flex items-center gap-2 text-brand-green font-black text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
            <Filter size={14} /> Reset Filters
          </button>
        </section>

      </div>
    </main>
  );
}