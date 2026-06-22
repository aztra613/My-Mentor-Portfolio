import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CurrentRoles } from "@/components/sections/CurrentRoles";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { Expertise } from "@/components/sections/Expertise";
import { Achievements } from "@/components/sections/Achievements";
import { LegacyImpact } from "@/components/sections/LegacyImpact";
import { Standards } from "@/components/sections/Standards";
import { Mentorship } from "@/components/sections/Mentorship";
import { Insights } from "@/components/sections/Insights";
import { Advisory } from "@/components/sections/Advisory";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <CurrentRoles />
        <TrustedBy />
        <About />
        <Timeline />
        <GlobalImpact />
        <Expertise />
        <Achievements />
        <LegacyImpact />
        <Standards />
        <Mentorship />
        <Insights />
        <Advisory />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
