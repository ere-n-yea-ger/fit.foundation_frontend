import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import SponsorCards from "@/components/SponsorCards";
import ChampionCarousel from "@/components/ChampionCarousel";
import DonateSection from "@/components/DonateSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <SponsorCards />
      <ChampionCarousel />
      <DonateSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
