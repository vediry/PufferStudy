import { PortalHero } from "@/components/sections/portal-hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatsInside } from "@/components/sections/whats-inside";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <>
      <PortalHero />
      <HowItWorks />
      <WhatsInside />
      <Faq />
      <Footer />
    </>
  );
}
