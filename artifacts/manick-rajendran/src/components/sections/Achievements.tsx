import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "National Telemedicine Initiative",
    challenge: "Scaling specialized cardiac care to remote regions lacking specialists.",
    approach: "Built a cardiac telemedicine platform to digitally transmit ECGs to a virtual cardiologist committee.",
    outcome: "Adopted across India, Tanzania, and Malawi. Trained 500,000 doctors nationwide as part of PM's initiative."
  },
  {
    title: "2,100-Bed Hospital Leadership",
    challenge: "Managing massive scale while ensuring clinical excellence and financial viability.",
    approach: "Led Velammal Medical College Hospital as CEO, driving both administrative and corporate strategy.",
    outcome: "Successfully oversaw one of Tamil Nadu's largest academic medical facilities."
  },
  {
    title: "Global Healthcare Standards",
    challenge: "Fragmented health information systems preventing interoperability.",
    approach: "Served as ISO Delegation Head and Co-Chairman of HITSP in the USA.",
    outcome: "Shaped interoperability standards adopted across the US healthcare system (EHR, Claims, Referrals)."
  },
  {
    title: "Hospital Group Transformation",
    challenge: "Expanding clinical services across a multi-facility network.",
    approach: "As Group CEO of LifeLine Hospitals, launched 5 new clinical programs across the tertiary network.",
    outcome: "Successfully integrated minimally invasive surgery, bariatric, day-care, and dental programs."
  },
  {
    title: "HealthTech Exit",
    challenge: "Scaling a NYC medical billing company for acquisition.",
    approach: "Re-engineered operations with an offshore India hub and integrated acquired billing companies.",
    outcome: "Achieved successful acquisition by a larger Revenue Cycle Management company."
  },
  {
    title: "AI-Driven Operating Model",
    challenge: "Rising costs and inefficiencies in modern RCM operations.",
    approach: "Redesigned operations around AI and Remote Patient Monitoring as COO.",
    outcome: "Reduced cost-per-claim and significantly increased operational throughput."
  }
];

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Signature Achievements</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="space-y-16 lg:space-y-32">
          {ACHIEVEMENTS.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-card border border-border rounded-sm shadow-sm flex items-center justify-center p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                      <div className="text-6xl md:text-8xl font-serif font-bold text-primary/20 select-none">0{i+1}</div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-[-2rem]">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> Challenge
                    </h4>
                    <p className="text-muted-foreground font-sans leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="pl-4 border-l-2 border-border">
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Approach</h4>
                    <p className="text-foreground/80 font-sans leading-relaxed">{item.approach}</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-sm border border-primary/10">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Outcome
                    </h4>
                    <p className="text-foreground font-sans font-medium leading-relaxed">{item.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}