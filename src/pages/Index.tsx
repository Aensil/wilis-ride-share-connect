import MainLayout from "@/layouts/MainLayout";
import FAQ from "@/sections/FAQ";
import Benefits from "@/sections/Benefits";
import Description from "@/sections/Description";
import FinalCta from "@/sections/FinalCta";
import ForDrivers from "@/sections/ForDrivers";
import ForPassengers from "@/sections/ForPassengers";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import LeadForm from "@/sections/LeadForm";
import SocialProof from "@/sections/SocialProof";
import { faqContent } from "@/content/home";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <MainLayout canonicalPath="/" structuredData={[faqSchema]}>
      <Hero />
      <Description />
      <Benefits />
      <ForDrivers />
      <ForPassengers />
      <HowItWorks />
      <SocialProof />
      <LeadForm />
      <FAQ />
      <FinalCta />
    </MainLayout>
  );
};

export default Index;
