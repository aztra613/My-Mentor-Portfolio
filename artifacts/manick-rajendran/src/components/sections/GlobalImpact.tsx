import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LOCATIONS = [
  { id: "usa", name: "USA", x: "25%", y: "35%", desc: "Deutsche Bank, Bankers Trust, HITSP standards, MedAZ EMR startup, billing company" },
  { id: "sweden", name: "Sweden", x: "52%", y: "25%", desc: "ISO delegation, Gothenburg standards meetings" },
  { id: "korea", name: "South Korea", x: "82%", y: "35%", desc: "ISO delegation, Daegu standards meetings" },
  { id: "india", name: "India", x: "70%", y: "45%", desc: "Hospital leadership, national telemedicine, BIS standards, startup mentorship" },
  { id: "tanzania", name: "Tanzania", x: "58%", y: "58%", desc: "Cardiac telemedicine platform deployment" },
  { id: "malawi", name: "Malawi", x: "57%", y: "63%", desc: "Cardiac telemedicine platform deployment" }
];

export function GlobalImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <section id="impact" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Global Impact</h2>
          <div className="w-12 h-1 bg-primary mb-8" />
          <p className="text-muted-foreground font-sans max-w-2xl text-lg">
            Deploying platforms, establishing standards, and driving healthcare excellence across borders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Map Area */}
          <motion.div 
            className="lg:col-span-2 relative aspect-[16/9] w-full bg-muted/30 rounded-sm border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Simple abstract map background using generic SVG dots or paths could go here, 
                for now we use a clean stylized background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            {/* Animated Connection Lines (Abstract) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M 25 35 Q 40 10 70 45" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path 
                d="M 70 45 Q 65 55 58 58" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 2.5 }}
              />
              <motion.path 
                d="M 25 35 Q 35 50 58 63" 
                fill="none" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.path 
                d="M 52 25 Q 55 30 58 58" 
                fill="none" 
                stroke="hsl(var(--accent))" 
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </svg>

            {/* Markers */}
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.id}
                className="absolute w-6 h-6 -ml-3 -mt-3 cursor-pointer group z-10"
                style={{ left: loc.x, top: loc.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                onClick={() => setActiveLoc(loc)}
                onMouseEnter={() => setActiveLoc(loc)}
              >
                <div className={`w-3 h-3 m-1.5 rounded-full transition-colors ${activeLoc.id === loc.id ? 'bg-accent' : 'bg-primary'}`} />
                <motion.div 
                  className={`absolute inset-0 rounded-full border-2 ${activeLoc.id === loc.id ? 'border-accent' : 'border-primary'}`}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="lg:col-span-1 bg-card border border-border p-8 rounded-sm shadow-sm h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="font-mono text-sm text-accent uppercase tracking-widest mb-2">Location</div>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-6">{activeLoc.name}</h3>
            <p className="text-muted-foreground font-sans leading-relaxed text-lg">
              {activeLoc.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}