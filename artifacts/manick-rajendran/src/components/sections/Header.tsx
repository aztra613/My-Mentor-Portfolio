import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Impact", href: "#impact" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Insights", href: "#insights" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-[60px] bg-background/80 backdrop-blur-md border-b shadow-sm" : "h-[80px] bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#top")}
          className="flex items-center gap-3 z-50 group"
          data-testid="link-logo"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded group-hover:bg-secondary transition-colors">
            <span className="font-serif font-bold text-lg tracking-wider">MR</span>
          </div>
          <span className="font-sans font-medium text-lg text-foreground tracking-tight hidden sm:block">
            Manick Rajendran
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            onClick={(e) => scrollToSection(e as any, "#contact")}
            className="rounded-full px-6 font-medium bg-primary hover:bg-secondary transition-colors"
            data-testid="btn-nav-contact"
          >
            Schedule Consultation
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 lg:hidden transition-transform duration-300 flex flex-col pt-24 px-6 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 items-start">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-2xl font-serif text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 w-full border-t border-border pt-8">
              <Button 
                onClick={(e) => scrollToSection(e as any, "#contact")}
                className="w-full rounded-full bg-primary py-6 text-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}