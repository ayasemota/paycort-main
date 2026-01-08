"use client";

import React from 'react';
import { Bell, Info, ShieldAlert, Zap, Calendar } from 'lucide-react';

export default function AlertsPage() {
  // Mock data for the "Sexy" UI demo
  const alerts = [
    {
      id: 1,
      type: 'deadline',
      title: 'FIRS Filing Deadline',
      desc: 'Your monthly PAYE remittance is due in 3 days. Avoid late penalties.',
      date: 'Today',
      icon: <Calendar size={18} className="text-zinc-900" />,
      color: 'bg-zinc-100'
    },
    {
      id: 2,
      type: 'system',
      title: 'AI Analysis Complete',
      desc: 'Paycort AI has finished scanning your December transactions.',
      date: 'Yesterday',
      icon: <Zap size={18} className="text-brand-green" />,
      color: 'bg-brand-green/10'
    },
    {
      id: 3,
      type: 'security',
      title: 'New Login Detected',
      desc: 'A new login was recorded from Lagos, Nigeria on a Chrome Browser.',
      date: '2 days ago',
      icon: <ShieldAlert size={18} className="text-zinc-900" />,
      color: 'bg-zinc-100'
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-12 px-6 font-sans text-black animate-in fade-in duration-500">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-black tracking-tighter uppercase">Alerts</h1>
          <p className="text-zinc-500 font-medium mt-1">Stay updated with your tax profile.</p>
        </header>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className="group p-5 rounded-[2rem] border-2 border-zinc-50 bg-white hover:border-brand-green/20 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${alert.color}`}>
                  {alert.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-black uppercase tracking-tight">{alert.title}</h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                      {alert.date}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                    {alert.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Action - If no alerts existed */}
        {alerts.length === 0 && (
          <div className="py-20 text-center">
            <div className="h-16 w-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="text-zinc-200" size={24} />
            </div>
            <h2 className="text-lg font-black uppercase tracking-tight">All caught up</h2>
            <p className="text-zinc-400 text-sm font-medium mt-1">No new notifications.</p>
          </div>
        )}

        <footer className="mt-12 text-center">
          <button className="text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-brand-green transition-colors">
            Mark all as read
          </button>
        </footer>

      </div>
    </main>
  );
}