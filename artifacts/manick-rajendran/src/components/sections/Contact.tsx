import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/1711126551904_1782102099986.jfif";

const ENGAGEMENT_TYPES = [
  "Board Advisory",
  "Healthcare Transformation",
  "Digital Health Strategy",
  "Hospital Turnarounds",
  "Healthcare Interoperability",
  "Executive Mentorship",
  "Speaking Engagements",
  "Strategic Collaboration",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 bg-muted/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Portrait + Statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] mb-10">
              <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 rounded-sm pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-xl bg-muted">
                <img
                  src={portraitImg}
                  alt="Manick Rajendran"
                  className="w-full h-full object-cover object-top"
                  data-testid="contact-portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <motion.div
                className="absolute -left-3 top-[10%] bottom-[10%] w-1 bg-accent rounded-full"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              />
            </div>

            <div className="max-w-sm">
              <p className="font-serif font-bold text-xl text-foreground mb-1">Manick Rajendran</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-sans mb-5">
                Healthcare Transformation Leader
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Available for board advisory engagements, healthcare transformation consulting, digital health strategy, and executive mentorship — globally.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact info + engagement types */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Initiate a Conversation
            </h2>
            <div className="w-12 h-1 bg-primary mb-10" />

            {/* Contact channels */}
            <div className="flex flex-col gap-5 mb-12">
              <a
                href="mailto:manick@manick.com"
                className="group flex items-center gap-5 p-5 bg-card border border-border hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                data-testid="link-email"
              >
                <div className="w-12 h-12 bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    manick@manick.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/manickrajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 bg-card border border-border hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                data-testid="link-linkedin"
              >
                <div className="w-12 h-12 bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                  <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/manickrajendran
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
              </a>
            </div>

            {/* Engagement types */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Available For
              </p>
              <div className="flex flex-wrap gap-2">
                {ENGAGEMENT_TYPES.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-medium px-3 py-1.5 bg-muted text-foreground/70 border border-border/50 font-sans"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-medium"
                data-testid="button-connect-linkedin"
              >
                <a href="https://linkedin.com/in/manickrajendran" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
