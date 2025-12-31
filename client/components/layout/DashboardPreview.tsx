
export default function DashboardPreview() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2 shadow-sm">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-4 py-3 rounded-t-xl">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
          <div className="ml-4 h-4 w-1/3 rounded-full bg-zinc-50"></div>
        </div>

        {/* Content Area - Placeholder for your actual UI screenshot or a mockup */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-white">
          {/* Mockup UI Elements */}
          <div className="grid grid-cols-12 gap-4 p-8">
            <div className="col-span-8 space-y-4">
              <div className="h-32 w-full rounded-2xl bg-zinc-50 animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 rounded-2xl bg-zinc-50"></div>
                <div className="h-40 rounded-2xl bg-zinc-50"></div>
              </div>
            </div>
            <div className="col-span-4 h-full rounded-2xl bg-zinc-100/50"></div>
          </div>
          
          {/* Overlay Gradient for that "Fade out" look */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Decorative Glow behind the dashboard */}
      <div className="absolute -bottom-10 left-1/2 -z-10 h-64 w-full -translate-x-1/2 bg-brand-green opacity-10 blur-[120px]"></div>
    </section>
  );
}