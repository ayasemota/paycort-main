"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Plus, ListFilter, Loader2 } from "lucide-react";
import BottomNav from "@/app/dashboard/BottomNav";
import { useNavigation } from '@/hooks/use-navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);
  const {navigateTo} = useNavigation();

  useEffect(() => {
    setIsMounted(true);
    try {
      const data = localStorage.getItem("user_data");
      if (data) {
        setUser(JSON.parse(data));
      }
    } catch (err) {
      console.error("Failed to parse user data", err);
    }
  }, []);

  if (!isMounted || !user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-green" size={32} />
      </div>
    );
  }

  const balance =
    typeof user?.walletBalance === "number" ? user.walletBalance : 0;
  const firstName = user?.name ? user.name.split(" ")[0] : "User";

  const chartData = [
    { name: "Tax", value: 25 },
    { name: "Income", value: 75 },
  ];
  const COLORS = ["#000000", "#16a34a"];

  return (
    <main className="min-h-screen bg-white pb-32 pt-12 px-6 font-sans text-black animate-in fade-in duration-500">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Tax Profile
            </p>
            <h1 className="text-2xl font-black uppercase tracking-tighter">
              {firstName}
            </h1>
          </div>
          <div className="h-10 w-10 bg-zinc-100 rounded-full border-2 border-black flex items-center justify-center font-black">
            {firstName[0]}
          </div>
        </header>

        {/* Central Pie Chart Section */}
        <section className="relative flex flex-col items-center mb-12">
          <div className="h-64 w-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                Monthly Income
              </p>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 mt-1">
                ₦{(user?.walletBalance ?? 0).toLocaleString()}
              </h2>
              <div className="mt-2 flex items-center gap-1 px-2 py-0.5 bg-zinc-50 rounded-md border border-zinc-100">
                <span className="text-[9px] font-bold text-zinc-400">
                  EST. TAX:
                </span>
                <span className="text-[9px] font-black text-black">
                  ₦12,500
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Targets Section */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-6 rounded-3xl bg-zinc-900 text-white text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
              Monthly Target
            </p>
            <p className="text-lg font-black">₦500k</p>
          </div>
          <div className="p-6 rounded-3xl border-2 border-zinc-100 text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">
              Weekly Target
            </p>
            <p className="text-lg font-black">₦125k</p>
          </div>
        </section>

        {/* Totals Section */}
        <section className="space-y-3 mb-10">
          <div className="flex justify-between items-center p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Total Income
            </span>
            <span className="font-bold text-brand-green">
              +₦{balance.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Total Expenses
            </span>
            <span className="font-bold text-black">-₦0.00</span>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-brand-green text-white font-black uppercase text-[10px] tracking-widest active:scale-95 transition-transform" onClick={() =>  navigateTo('/dashboard/receipts')}>
              <Plus size={20} /> Upload Receipt
            </button>
            <button className="flex flex-col items-center gap-3 p-6 rounded-3xl border-2 border-zinc-100 font-black uppercase text-[10px] tracking-widest active:scale-95 transition-transform" onClick={() => navigateTo('/dashboard/transactions')}>
              <ListFilter size={20} /> Transactions
            </button>
          </div>
        </section>

        {/* Recent Transactions Placeholder */}
        <section className="mb-8">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Recent Activity
            </h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-brand-green">
              View All
            </button>
          </div>
          <p className="text-center text-zinc-400 text-xs font-bold py-10 border-2 border-dashed border-zinc-100 rounded-3xl">
            No recent activity found.
          </p>
        </section>

        <BottomNav />
      </div>
    </main>
  );
}
