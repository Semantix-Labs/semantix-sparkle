import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  MessageSquare, 
  Camera, 
  Users, 
  Target,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SemanixLogo from '@/components/SemanixLogo';
import { ContactForm } from '@/components/ContactForm';

// Client Logos
// ... (import statements for logos are unchanged)

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/semantixlabs/30min' });
    } else {
      window.open('https://calendly.com/semantixlabs/30min', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-6xl">
        <div className="glass-card rounded-full shadow-elegant px-4 sm:px-6 md:px-8 py-3">
          {/* Mobile & Tablet */}
          <div className="flex md:hidden justify-between items-center">
            <a href="/">
              <SemanixLogo className="h-10 w-auto" theme="dark" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center">
            <a href="/">
              <SemanixLogo className="h-12 w-auto" theme="dark" />
            </a>
            <div className="flex justify-center">
              <div className="flex items-center gap-6 lg:gap-8">
                <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Services</button>
                <a href="/our-work" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Our Work</a>
                <button onClick={() => scrollToSection('clients')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Clients</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Contact</button>
              </div>
            </div>
            <div className="justify-self-end">
              <Button size="sm" className="btn-primary px-4 py-2 text-sm" onClick={openCalendly}>
                Start Project
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 shadow-elegant">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">About</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Services</button>
              <a href="/our-work" className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Our Work</a>
              <button onClick={() => scrollToSection('clients')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Contact</button>
              <Button className="btn-primary w-full justify-center mt-2" onClick={openCalendly}>
                Start Project
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-dark">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative z-20 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            <div className="lg:col-span-7 text-center lg:text-left">
              <Badge className="mb-6 bg-primary/20 text-primary-glow border-primary/30 hover:bg-primary/30 transition-colors">
                Sri Lankan Tech Excellence
              </Badge>
              <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
                All in one
                <br />
                <span className="gradient-text bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                  Digital Service
                </span>
                <br />
                Agency
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                People do not buy goods and services. They buy relations, stories, and magic.
              </p>
              <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                - Seth Godin
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="btn-primary text-lg px-8 py-4 w-3/4 sm:w-auto" onClick={openCalendly}>
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (rest of the Index.tsx file is unchanged) */}
    </div>
  );
};

export default Index;
