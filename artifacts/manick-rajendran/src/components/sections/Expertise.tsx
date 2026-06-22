import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Building2, Activity, Cpu, Stethoscope, 
  Network, Scale, DollarSign, Lightbulb, 
  Users, Rocket
} from "lucide-react";

const EXPERTISE = [
  { icon: Building2, title: "Healthcare Strategy", desc: "Organizational transformation, M&A strategy, growth planning for hospital systems." },
  { icon: Activity, title: "Hospital Operations", desc: "Led 2,100-bed facilities; standardized clinical and administrative workflows." },
  { icon: Cpu, title: "Digital Health & AI", desc: "AI-powered RCM, remote patient monitoring, EHR systems architecture." },
  { icon: Stethoscope, title: "Telemedicine", desc: "Built multi-country telemedicine platforms; trained 500K+ clinicians nationally." },
  { icon: Network, title: "Healthcare Interoperability", desc: "HITSP Co-Chairman; CCHIT workgroup member; HL7 & FHIR advocate." },
  { icon: Scale, title: "Healthcare Standards & Policy", desc: "BIS Chairman; ISO Delegation Head; shaped national digital health policy." },
  { icon: DollarSign, title: "Revenue Cycle Management", desc: "Built and operated medical billing companies; achieved successful exit." },
  { icon: Lightbulb, title: "Startup Mentorship", desc: "Chief Mentor at Velammal Knowledge Park; guided multiple HealthTech startups." },
  { icon: Users, title: "Leadership Development", desc: "Executive coaching, academic visiting faculty, innovation workshops." },
  { icon: Rocket, title: "Innovation Management", desc: "Design thinking, 21st Century Skills, STEM curriculum integration." },
];

export function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Areas of Expertise</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-card border border-border p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}