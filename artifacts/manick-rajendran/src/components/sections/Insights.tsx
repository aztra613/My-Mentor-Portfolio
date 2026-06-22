import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TOPICS = [
  { title: "Healthcare Digital Transformation", category: "Digital Transformation" },
  { title: "Telemedicine Deployment at Scale", category: "Telemedicine" },
  { title: "Hospital Operations Excellence", category: "Hospital Operations" },
  { title: "Healthcare Interoperability Standards", category: "Standards & Policy" },
  { title: "AI in Revenue Cycle Management", category: "Digital Transformation" },
  { title: "Startup Mentorship in HealthTech", category: "Mentorship" },
  { title: "Leadership in Healthcare Reform", category: "Hospital Operations" },
  { title: "Lean Sigma for Healthcare", category: "Hospital Operations" },
  { title: "STEM Education Innovation", category: "Mentorship" },
];

export function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Thought Leadership</h2>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <p className="text-muted-foreground font-sans max-w-md text-lg">
            Perspectives and strategies shaping the future of global healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic, i) => (
            <motion.a
              href="#"
              key={i}
              className="group block bg-card border border-border p-8 rounded-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={(e) => e.preventDefault()}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                {topic.category}
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-8 group-hover:text-primary transition-colors leading-tight">
                {topic.title}
              </h3>
              <div className="mt-auto flex items-center text-sm font-medium text-primary uppercase tracking-wide gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Explore Topic <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}