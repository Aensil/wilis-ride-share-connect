import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Benefits from "@/components/Benefits";
import ForDrivers from "@/components/ForDrivers";
import ForPassengers from "@/components/ForPassengers";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Description />
      <Benefits />
      <ForDrivers />
      <ForPassengers />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;