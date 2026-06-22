import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROLES = [
  {
    title: "Chief Strategy Officer",
    org: "BillingParadise",
    type: "Healthcare RCM & AI",
    since: "Current"
  },
  {
    title: "Chief Strategy Officer",
    org: "Anatta IT Solutions",
    type: "HealthTech Consulting",
    since: "Current"
  },
  {
    title: "Chief Operating Officer",
    org: "iSource ITES",
    type: "Digital Health Services",
    since: "Current"
  },
  {
    title: "Founder",
    org: "iMMi Life",
    type: "Healthcare Innovation",
    since: "Current"
  }
];

export function CurrentRoles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="current" className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-white/50 uppercase">
            Active Today
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">
            Current Leadership Roles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              className="group bg-white/10 border border-white/20 hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 p-6 rounded-sm"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              data-testid={`role-card-${i}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-sans font-bold text-accent uppercase tracking-wider">
                  {role.since}
                </span>
              </div>
              <p className="text-sm font-sans font-semibold text-white/60 uppercase tracking-wide mb-1">
                {role.title}
              </p>
              <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                {role.org}
              </h3>
              <p className="text-sm text-white/50 font-sans">
                {role.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
