import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
//import DashboardPreview from "../components/layout/DashboardPreview";
import Features from "../components/layout/Features";
import TaxLiveDemo from "../components/layout/TaxLiveDemo"
import About from "../components/layout/About";
import HowItWorks from "../components/layout/HowItWorks";
import Footer from "../components/layout/Footer"
export default function Page() {
  return (
    
    <main className="relative min-h-screen bg-white font-sans text-zinc-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      
      <Features />
      <HowItWorks />
      <TaxLiveDemo />
      <Footer />
    </main>
  );
}