import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { Expertise } from "@/components/sections/Expertise";
import { Achievements } from "@/components/sections/Achievements";
import { Insights } from "@/components/sections/Insights";
import { Mentorship } from "@/components/sections/Mentorship";
import { Standards } from "@/components/sections/Standards";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <GlobalImpact />
        <Expertise />
        <Achievements />
        <Insights />
        <Mentorship />
        <Standards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;