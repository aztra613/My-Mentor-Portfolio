import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STANDARDS = [
  { org: "Bureau of Indian Standards (BIS)", role: "Chairman, Informatics AYUSH Subcommittee", region: "India" },
  { org: "HITSP", role: "Co-Chairman, Admin & Finance Domain TC", region: "USA" },
  { org: "ISO", role: "Delegation Head", region: "Sweden, South Korea, USA" },
  { org: "CCHIT", role: "Interoperability Workgroup Member", region: "USA" },
  { org: "HIMSS India", role: "Board Member", region: "India" },
  { org: "Telemedicine Society of India", role: "Joint Secretary", region: "India" },
  { org: "Digital Health India", role: "Member", region: "India" }
];

export function Standards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Healthcare Standards & Policy</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-sans text-lg">
            Shaping the interoperability frameworks and digital health policies that power modern healthcare systems globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS.map((item, i) => (
            <motion.div
              key={i}
              className="bg-muted/30 border border-border p-8 rounded-sm hover:bg-muted/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                {item.region}
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.org}</h3>
              <p className="text-primary font-medium font-sans">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}