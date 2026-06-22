import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/1711126551904_1782102099986.jfif";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Info & Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Start a Conversation</h2>
            <div className="w-12 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground font-sans text-lg mb-12">
              Available for strategic consulting, board advisory roles, executive mentorship, and speaking engagements globally.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:manick@manick.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">manick@manick.com</span>
              </a>
              <a href="tel:+16099759085" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">+1 (609) 975-9085</span>
                  <span className="text-sm text-muted-foreground">+91 95662 80530</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/manickrajendran" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">linkedin.com/in/manickrajendran</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border shadow-sm">
                <img src={portraitImg} alt="Manick Rajendran" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-foreground">Manick Rajendran</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Healthcare Transformation Leader</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Schedule a Strategic Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wide">Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground uppercase tracking-wide">Organization</label>
                    <input type="text" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Company Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wide">Subject</label>
                  <select className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-foreground">
                    <option value="consulting">Strategic Consultation</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full rounded bg-primary hover:bg-secondary text-primary-foreground font-bold text-lg h-14">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}