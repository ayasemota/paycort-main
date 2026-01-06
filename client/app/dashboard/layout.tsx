"use client";

import BottomNav from "@/app/dashboard/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-brand-green/20">
      <div className="pb-32">{children}</div>

      <BottomNav />
    </div>
  );
}
