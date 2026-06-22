import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    "BIS Chairman",
    "HIMSS Board",
    "ISO Delegation Head",
    "IIM Bangalore MBA",
    "Lean Sigma Green Belt"
  ];

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Executive Summary</h2>
          <div className="w-12 h-1 bg-primary mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote className="text-muted w-16 h-16 rotate-180 mb-[-2rem] opacity-50" />
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              "Bridging the gap between visionary technology and clinical operations at the highest levels to drive sustainable healthcare transformation."
            </p>
            <div className="mt-8 text-muted-foreground font-sans leading-relaxed space-y-4">
              <p>
                With an MBA from IIM Bangalore and 35 years of global experience, Manick Rajendran's career is defined by taking complex, large-scale systems and driving them toward operational excellence and technological advancement.
              </p>
              <p>
                His journey spans from serving as a Vice President and IT Systems Architect in top-tier banking (Deutsche Bank, Bankers Trust) to pioneering healthcare entrepreneurship, leading multi-facility hospital networks as CEO, and ultimately shaping global digital health standards.
              </p>
              <p>
                Recognized globally for his strategic foresight, he is a sought-after advisor for hospital systems, HealthTech innovators, and national standards bodies.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card border border-border p-8 rounded-sm shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-lg font-serif font-bold text-foreground mb-6 uppercase tracking-wider">Key Credentials</h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground border border-border/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-12 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Education</h4>
                  <p className="text-muted-foreground">MBA, IIM Bangalore (1986)</p>
                  <p className="text-muted-foreground">BE Mechanical, College of Engineering, Chennai (1984)</p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}