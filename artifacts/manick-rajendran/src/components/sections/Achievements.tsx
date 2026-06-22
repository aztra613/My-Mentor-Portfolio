import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACHIEVEMENTS = [
  {
    num: "01",
    title: "National Telemedicine Initiative",
    challenge: "Scaling specialized cardiac care to remote regions lacking cardiologists, across economically diverse populations in three countries.",
    approach: "Built a cardiac telemedicine platform enabling small hospitals to transmit ECGs digitally to a virtual committee of five cardiologists, who provide a majority opinion in real time.",
    outcome: "Deployed across India, Tanzania, and Malawi. Included in the Prime Minister's national telemedicine initiative.",
    metrics: [
      { value: "500,000", label: "Doctors Trained Nationally" },
      { value: "3", label: "Countries Deployed" },
    ]
  },
  {
    num: "02",
    title: "2,100-Bed Academic Hospital Leadership",
    challenge: "Managing one of Tamil Nadu's largest academic medical facilities while simultaneously driving corporate hospital strategy.",
    approach: "Served as CEO of Velammal Medical College Hospital & Research Institute — overseeing both clinical operations and academic administration, working directly with Trustees on long-term vision.",
    outcome: "Delivered operational stability and institutional growth for a 2,100-bed facility.",
    metrics: [
      { value: "2,100+", label: "Hospital Beds Managed" },
      { value: "1", label: "of Tamil Nadu's Largest" },
    ]
  },
  {
    num: "03",
    title: "Global Healthcare Standards Architecture",
    challenge: "Fragmented health information systems preventing interoperability between hospitals, payers, and government agencies across the US.",
    approach: "Served as Co-Chairman of HITSP Admin & Finance Domain TC and led India's ISO delegation at meetings in Gothenburg (Sweden), Daegu (South Korea), and Arlington (USA).",
    outcome: "Shaped interoperability standards — covering EHR, Claims, Referrals, and Admin workflows — that were adopted nationally in the US healthcare system.",
    metrics: [
      { value: "3", label: "Countries — ISO Delegation" },
      { value: "US+India", label: "Standards Jurisdictions" },
    ]
  },
  {
    num: "04",
    title: "Multi-Facility Hospital Group Expansion",
    challenge: "Building new specialist service lines across a tertiary-care group to capture underserved surgical markets in South India.",
    approach: "As Group CEO of LifeLine Hospitals (320-bed flagship + 4 feeders), systematically launched five new clinical programs with dedicated surgeon recruitment and facilities build-out.",
    outcome: "Successfully commissioned minimally invasive surgery, bariatric surgery, day-care surgery, and dental programs — all within a single leadership tenure.",
    metrics: [
      { value: "5", label: "New Clinical Programs" },
      { value: "320+", label: "Bed Primary Facility" },
    ]
  },
  {
    num: "05",
    title: "HealthTech Exit — Revenue Cycle Management",
    challenge: "Integrating multiple acquired billing companies and restructuring a NYC-based RCM operation for scalability and eventual exit.",
    approach: "Re-engineered end-to-end billing operations with an offshore India processing hub; standardized claim submission, coding, A/R management, and denial workflows.",
    outcome: "Achieved successful acquisition by a larger Revenue Cycle Management company.",
    metrics: [
      { value: "1", label: "Successful Acquisition" },
      { value: "Offshore", label: "Operations Model Built" },
    ]
  },
  {
    num: "06",
    title: "AI-Driven Operating Model Redesign",
    challenge: "Rising per-claim costs and operational inefficiencies in a modern RCM and Remote Patient Monitoring business.",
    approach: "As COO, redesigned the full operating model — integrating AI back-end automation, RPM service lines, and strategic AI partnerships — while maintaining regulatory compliance.",
    outcome: "Reduced cost-per-claim, increased throughput, and launched new RPM revenue line.",
    metrics: [
      { value: "AI + RPM", label: "Dual Revenue Lines" },
      { value: "2022+", label: "Ongoing Transformation" },
    ]
  }
];

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-muted/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Transformations Delivered
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Signature Achievements</h2>
          <div className="w-12 h-1 bg-primary" />
        </motion.div>

        <div className="space-y-20">
          {ACHIEVEMENTS.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start`}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                data-testid={`achievement-${i}`}
              >
                {/* Visual card — swaps order on alternating rows */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="bg-card border border-border p-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/60 to-accent/40" />
                    <div className="text-7xl md:text-8xl font-serif font-bold text-primary/10 select-none leading-none mb-[-1.5rem]">
                      {item.num}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight mb-8">
                      {item.title}
                    </h3>
                    {/* Metrics */}
                    <div className={`grid grid-cols-${item.metrics.length} gap-4`}>
                      {item.metrics.map((m, mi) => (
                        <div key={mi} className="border-l-2 border-primary/30 pl-4">
                          <div className="font-mono text-xl font-bold text-primary">{m.value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content — swaps order on alternating rows */}
                <div className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                      <span className="w-3 h-px bg-muted-foreground/50" />
                      Challenge
                    </span>
                    <p className="text-foreground/70 font-sans leading-relaxed">{item.challenge}</p>
                  </div>

                  <div className="pl-5 border-l-2 border-border">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-3">
                      Approach
                    </span>
                    <p className="text-foreground/80 font-sans leading-relaxed">{item.approach}</p>
                  </div>

                  <div className="bg-primary/5 border border-primary/15 p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                      Outcome
                    </span>
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
