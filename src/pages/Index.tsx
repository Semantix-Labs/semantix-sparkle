import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code, 
  Palette, 
  MessageSquare, 
  Camera, 
  Users, 
  Search,
  Zap,
  Shield,
  Target,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import SemanixLogo from '@/components/SemanixLogo';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-6 py-3 rounded-full shadow-elegant">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <SemanixLogo className="h-6 w-auto" theme="dark" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Services</button>
              <button onClick={() => scrollToSection('clients')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Contact</button>
              <Button size="sm" className="btn-primary px-4 py-2 text-sm">
                Start Project
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
              <button onClick={() => scrollToSection('clients')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Contact</button>
              <Button className="btn-primary w-full justify-center mt-2">
                Start Project
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Split Screen Layout */}
      <section className="min-h-screen flex pt-20">
        {/* Left Panel - Dark */}
        <div className="w-full lg:w-1/2 bg-gradient-dark flex flex-col justify-center items-start p-8 lg:p-16 text-white">
          <div className="max-w-lg">
            <Badge className="mb-6 bg-primary/20 text-primary-glow border-primary/30 hover:bg-primary/30 transition-colors">
              Sri Lankan Tech Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              WEB & SOFTWARE
              <br />
              <span className="gradient-text bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                DEVELOPMENT
              </span>
              <br />
              AGENCY
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              People do not buy goods and services. They buy relations, stories, and magic.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              - Seth Godin
            </p>
            
            {/* Client Logos */}
            <div className="flex flex-wrap items-center gap-6 opacity-60">
              {["Dinemore", "KeKu", "Mingle Box", "CARE SL", "HuraOman"].map((client, index) => (
                <div key={index} className="text-sm font-medium">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Light */}
        <div className="hidden lg:flex w-1/2 bg-gradient-subtle flex-col justify-center p-16">
          {/* Stats Section */}
          <div className="mb-12">
            <div className="grid grid-cols-3 gap-8 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">416%</div>
                <div className="text-sm text-muted-foreground">Facebook reach</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <p className="text-muted-foreground mb-4 italic">
              "Semantix Labs delivered exceptional results for our digital transformation. Their expertise and dedication made a real impact. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-sm">Rajesh Kumar</div>
                <div className="text-xs text-muted-foreground">CEO Dynamic Group</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">DISCUSS WITH OUR TEAM</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We are passionate marketers and strategists dedicated to helping your business thrive online. Let's build your digital future together.
            </p>
            <Button className="btn-primary">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Hero Content */}
      <div className="lg:hidden bg-gradient-subtle py-16 px-4 mt-20">
        <div className="container-custom max-w-2xl text-center">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">416%</div>
              <div className="text-xs text-muted-foreground">Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
          
          <Button size="lg" className="btn-primary">
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Making Technology <span className="gradient-text">Accessible to All</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is to create user-friendly tech products that empower individuals and businesses, while providing exceptional client service that stands the test of time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Dynamic and forward-thinking approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Long-term client relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Based in Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technologies to deliver solutions that exceed expectations and drive real business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web & Software Development",
                description: "Custom web applications and software solutions built with modern technologies"
              },
              {
                icon: Palette,
                title: "Online Branding & Graphics",
                description: "Complete brand identity and visual design services that make you stand out"
              },
              {
                icon: MessageSquare,
                title: "Social Media Management",
                description: "Strategic social media campaigns that boost engagement and reach"
              },
              {
                icon: Camera,
                title: "Product Photography",
                description: "Professional photography services to showcase your products beautifully"
              },
              {
                icon: Target,
                title: "Video Production",
                description: "High-quality video content for marketing, training, and corporate communications"
              },
              {
                icon: Users,
                title: "Consultation & Product Review",
                description: "Expert guidance and comprehensive product analysis to optimize performance"
              }
            ].map((service, index) => (
              <Card key={index} className="glass-card p-6 hover-lift hover-glow group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your goals, target audience, and unique requirements to set the foundation."
              },
              {
                step: "02", 
                title: "Design & Development",
                description: "Crafting visually appealing designs and bringing them to life with robust coding."
              },
              {
                step: "03",
                title: "Testing & Deployment", 
                description: "Rigorous testing ensures functionality, security, and user-friendliness before launch."
              },
              {
                step: "04",
                title: "Support & Growth",
                description: "Ongoing support and relationship building for continuous improvement and success."
              }
            ].map((step, index) => (
              <div key={index} className="glass-card p-6 hover-lift text-center group">
                <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in modern technologies to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
            {[
              { name: "JavaScript", color: "bg-yellow-500" },
              { name: "React", color: "bg-blue-500" },
              { name: "Next.js", color: "bg-gray-900" },
              { name: "Figma", color: "bg-purple-500" },
              { name: "Meta", color: "bg-blue-600" },
              { name: "WordPress", color: "bg-blue-700" },
              { name: "Azure", color: "bg-blue-400" }
            ].map((tech, index) => (
              <div key={index} className="glass-card p-4 rounded-lg hover-lift text-center group">
                <div className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-2 group-hover:scale-110 transition-transform`}></div>
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              "Dinemore", "KeKu", "Mingle Box", "CARE SL", "HuraOman",
              "Box It", "OnBoard Trading", "River View Villas", "Bamba", "Cuddles & Co"
            ].map((client, index) => (
              <div key={index} className="glass-card p-6 rounded-lg hover-lift text-center">
                <div className="font-semibold text-foreground/80">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Get to Know <span className="gradient-text">Each Other</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">hello@semantixlabs.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+94 77 522 2493</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Colombo, Sri Lanka</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Leadership Team</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">S. Shobian</div>
                    <div className="text-sm text-muted-foreground">Chief Executive Officer</div>
                    <div className="text-sm text-primary">s.shobian@semantixlabs.com</div>
                  </div>
                  <div>
                    <div className="font-semibold">Umair Shukri</div>
                    <div className="text-sm text-muted-foreground">Chief Operating Officer</div>
                    <div className="text-sm text-primary">umairshukri@semantixlabs.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Start Your Project</h3>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Project Budget" className="w-full" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                <Button className="w-full btn-primary text-lg py-3">
                  Send Message <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-dark-foreground">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <SemanixLogo className="h-8 w-auto" theme="light" />
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-muted-foreground mb-2">
                www.semantixlabs.com
              </div>
              <div className="text-sm text-muted-foreground">
                © 2024 Semantix Labs. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;