import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
//import DashboardPreview from "../components/layout/DashboardPreview";
import Features from "../components/layout/Features";
import TaxLiveDemo from "../components/layout/TaxLiveDemo"
export default function LandingPage() {
  return (
    // overflow-x-hidden prevents decorative background blurs from breaking the layout
    <main className="relative min-h-screen bg-white font-sans text-zinc-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* The Dashboard Preview will be called inside Hero or right here */}
      <Features />
      <TaxLiveDemo />
    </main>
  );
}