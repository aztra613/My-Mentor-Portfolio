import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LOCATIONS = [
  {
    id: "india",
    name: "India",
    x: "71%",
    y: "47%",
    highlights: ["Hospital CEO — 2,100-bed facility", "National Telemedicine Initiative", "BIS Chairman — Informatics AYUSH", "500,000 doctors trained", "Punjab Govt healthcare roadmap", "HIMSS India Board Member"],
    tag: "Primary Base"
  },
  {
    id: "usa",
    name: "United States",
    x: "22%",
    y: "36%",
    highlights: ["VP, Deutsche Bank — Retirement Services", "VP, Bankers Trust", "Co-Founder & CEO, MedAZ (EMR startup)", "CEO, Medical Billing Company, NYC", "HITSP Co-Chairman", "CCHIT Interoperability Workgroup"],
    tag: "Career Foundation"
  },
  {
    id: "sweden",
    name: "Sweden",
    x: "51%",
    y: "20%",
    highlights: ["ISO Delegation Head", "Standards meetings — Gothenburg", "Healthcare interoperability frameworks"],
    tag: "Standards Work"
  },
  {
    id: "korea",
    name: "South Korea",
    x: "80%",
    y: "36%",
    highlights: ["ISO Delegation Head", "Standards meetings — Daegu", "Digital health policy discussions"],
    tag: "Standards Work"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    x: "58%",
    y: "57%",
    highlights: ["Cardiac telemedicine platform deployment", "Founder — Cardiac Advisory Company", "ECG-to-cardiologist digital transmission", "Rural hospital network support"],
    tag: "Telemedicine"
  },
  {
    id: "malawi",
    name: "Malawi",
    x: "58%",
    y: "64%",
    highlights: ["Cardiac telemedicine platform deployment", "Founder — Cardiac Advisory Company", "Multi-specialty telemedicine services"],
    tag: "Telemedicine"
  }
];

const TAG_COLORS: Record<string, string> = {
  "Primary Base": "bg-primary/20 text-primary",
  "Career Foundation": "bg-secondary/20 text-secondary",
  "Standards Work": "bg-accent/20 text-accent",
  "Telemedicine": "bg-orange-500/20 text-orange-600",
};

export function GlobalImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(LOCATIONS[0]);

  return (
    <section id="impact" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Operating Footprint
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Global Impact</h2>
          <div className="w-12 h-1 bg-primary mb-5" />
          <p className="text-muted-foreground font-sans max-w-2xl text-lg leading-relaxed">
            Deploying platforms, establishing standards, and driving healthcare excellence across 7 countries over three decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="lg:col-span-2 relative aspect-[16/9] bg-muted/20 border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Grid dot background */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "20px 20px" }}
            />
            {/* SVG connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path d="M 22 36 Q 45 15 71 47" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.8 }} />
              <motion.path d="M 71 47 Q 65 52 58 57" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 1.5 }} />
              <motion.path d="M 71 47 Q 65 55 58 64" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 1.8 }} />
              <motion.path d="M 22 36 Q 35 25 51 20" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 2 }} />
              <motion.path d="M 22 36 Q 50 20 80 36" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.4" strokeDasharray="1.5 1.5" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 1.2 }} />
            </svg>

            {/* Country labels on map */}
            {LOCATIONS.map((loc, i) => (
              <motion.button
                key={loc.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 flex flex-col items-center"
                style={{ left: loc.x, top: loc.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                onClick={() => setActive(loc)}
                onMouseEnter={() => setActive(loc)}
                data-testid={`map-marker-${loc.id}`}
              >
                {/* Pulse rings */}
                <motion.span
                  className={`absolute w-5 h-5 rounded-full ${active.id === loc.id ? "border-accent" : "border-primary"} border`}
                  animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className={`w-3 h-3 rounded-full shadow-sm transition-all duration-200 ${active.id === loc.id ? "bg-accent scale-125" : "bg-primary group-hover:bg-accent group-hover:scale-110"}`} />
                <span className={`mt-1 text-[9px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors ${active.id === loc.id ? "text-accent" : "text-foreground/50 group-hover:text-foreground"}`}>
                  {loc.name === "United States" ? "USA" : loc.name}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background border border-border p-7 h-full">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${TAG_COLORS[active.tag]}`}>
                  {active.tag}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-5">{active.name}</h3>
              <ul className="space-y-2.5">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Country selector buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActive(loc)}
                  className={`text-xs font-medium px-3 py-1.5 border transition-all ${active.id === loc.id ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                  data-testid={`country-btn-${loc.id}`}
                >
                  {loc.name === "United States" ? "USA" : loc.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
