import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const TIMELINE_DATA = [
  { year: "2022–Present", role: "COO", org: "Medical Billing Company (USA)", desc: "Overhauled operating model to integrate AI and Remote Patient Monitoring. Led strategic planning, process improvement, client relations, and regulatory compliance." },
  { year: "2021–2022", role: "COO", org: "Office-Based Laboratory (OBL)", desc: "Established Standard Operating Procedures for outpatient endovascular procedures; set up infusion clinic, wound care center, and screening center for diabetic patients." },
  { year: "2016–2021", role: "Founder & CEO", org: "Cardiac Advisory Company", desc: "Built a telemedicine platform allowing small hospitals to transmit ECGs digitally to a virtual cardiologist committee. Deployed across India, Tanzania, and Malawi. Included in PM's national telemedicine initiative. Trained 500,000 doctors nationwide." },
  { year: "2014–Present", role: "Chief Mentor", org: "Velammal Knowledge Park", desc: "Traveled globally to bring best practices from USA, UK, Australia, Singapore. Integrated STEM learning, visiting faculty, and 21st Century Skills competitions." },
  { year: "2013–2014", role: "President", org: "Xcode Life Sciences", desc: "Mentored founder, created go-to-market strategy for pharmacogenomics testing (Clopidogrel Resistance)." },
  { year: "2012–2014", role: "Director Strategy & CEO", org: "Velammal Hospitals / Medical College Hospital", desc: "Led a 2,100-bed facility as CEO. Responsible for administrative and corporate strategy of academic and corporate hospital verticals." },
  { year: "2011–2012", role: "Group CEO", org: "LifeLine Group of Hospitals", desc: "Led group of tertiary-care hospitals (320-bed primary + 4 feeder facilities). Expanded services including minimally invasive surgery, bariatric surgery, day-care surgery, and dental." },
  { year: "2007–2010", role: "CEO & Co-owner", org: "Medical Billing Company, New York", desc: "Integrated acquired billing companies, re-engineered operations with offshore India hub. Led company to acquisition by a larger RCM company. Served as Co-Chairman, HITSP Admin & Finance Domain TC." },
  { year: "2003–2006", role: "Co-Founder & CEO", org: "MedAZ", desc: "Led beta development of Practice Management EMR product MedAZ. CCHIT-certified, Canada Collaboratory approved." },
  { year: "1999–2005", role: "VP / IT Controls Systems Architect", org: "Deutsche Bank (USA)", desc: "Led Retirement Services Technology team (40-person staff). Co-architect of GSS Technology Roadmap. Reduced baseline costs 20% while maintaining SLA. Managed Global Billing System architecture." },
  { year: "1998–1999", role: "Vice President / Group Project Manager", org: "Bankers Trust (USA)", desc: "Led critical technology initiatives prior to Deutsche Bank acquisition." }
];

function TimelineItem({ item, index, inView }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="relative pl-8 md:pl-0 w-full mb-8 cursor-pointer group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
        {/* Left side (Year) */}
        <div className="hidden md:block text-right pt-1">
          <span className="font-mono text-primary font-medium">{item.year}</span>
        </div>

        {/* Center Node */}
        <div className="absolute left-0 md:static flex justify-center pt-1.5 md:pt-1 z-10">
          <div className="w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(44,182,125,0.4)]" />
        </div>

        {/* Right side (Content) */}
        <div className="md:text-left bg-card hover:bg-muted/50 transition-colors p-6 rounded-sm border border-border/50 shadow-sm relative">
          <div className="md:hidden font-mono text-primary font-medium mb-2">{item.year}</div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-1">{item.role}</h3>
          <h4 className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-wide mb-3">{item.org}</h4>
          
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-foreground/80 leading-relaxed font-sans pb-4">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="absolute bottom-4 right-4 text-muted-foreground/50 group-hover:text-primary transition-colors">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Career Timeline</h2>
          <div className="w-12 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Line */}
          <motion.div 
            className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-full bg-primary shadow-[0_0_15px_rgba(15,76,129,0.8)]"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </motion.div>

          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}