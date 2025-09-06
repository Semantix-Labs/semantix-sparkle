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
  X,
  Globe,
  Megaphone,
  Monitor,
  Settings,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp
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
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-6xl">
        <div className="glass-card rounded-full shadow-elegant px-4 sm:px-6 md:px-8 py-3">
          {/* Mobile & Tablet: [logo | hamburger] */}
          <div className="flex md:hidden justify-between items-center">
            <SemanixLogo className="h-10 w-auto" theme="dark" />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop: [logo | center menu | CTA] */}
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center">
            {/* Logo (left) */}
            <SemanixLogo className="h-12 w-auto" theme="dark" />

            {/* Menu (center) */}
            <div className="flex justify-center">
              <div className="flex items-center gap-6 lg:gap-8">
                <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Services</button>
                <button onClick={() => scrollToSection('clients')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Clients</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Contact</button>
              </div>
            </div>

            {/* CTA (right) */}
            <div className="justify-self-end">
              <Button size="sm" className="btn-primary px-4 py-2 text-sm">
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
              <button onClick={() => scrollToSection('clients')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Contact</button>
              <Button className="btn-primary w-full justify-center mt-2">
                Start Project
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Full Width Horizontal Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Video Container - Ready for video implementation */}
        <div className="absolute inset-0 bg-gradient-dark">
          {/* Video will go here */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            
            {/* Main Content - Left Side */}
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
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            
              </div>
              
              
            </div>

            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

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
            {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-xs lg:text-sm gradient/80">Projects done</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">416%</div>
                  <div className="text-xs lg:text-sm gradient/80">Facebook reach</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-xs lg:text-sm gradient/80">Client satisfaction</div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5856D6] to-[#00C9A7]"></div>
        
        <div className="relative z-10 container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              OUR FEATURES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The unique qualities that make Semantix Labs special.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "cube",
                title: "Innovating products and solutions within your time and budget.",
                description: "We deliver cutting-edge technology solutions that align perfectly with your timeline and budget constraints."
              },
              {
                icon: "sphere",
                title: "World-class development with pixel-perfect user interface designs.",
                description: "Our development team creates stunning, responsive interfaces that provide exceptional user experiences."
              },
              {
                icon: "cylinder",
                title: "Strategic, performance-driven, and comprehensive digital marketing.",
                description: "Data-driven marketing strategies that boost your online presence and drive measurable business growth."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all group">
                <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {/* Geometric Icons */}
                  {feature.icon === "cube" && (
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 border-2 border-cyan-400 transform rotate-12 rounded-lg"></div>
                      <div className="absolute inset-1 border-2 border-cyan-300 transform -rotate-12 rounded-lg"></div>
                      <div className="absolute inset-2 bg-cyan-400/30 rounded-lg"></div>
                    </div>
                  )}
                  {feature.icon === "sphere" && (
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 border-2 border-green-400 rounded-full"></div>
                      <div className="absolute inset-1 border-2 border-green-300 rounded-full transform rotate-45"></div>
                      <div className="absolute inset-3 bg-green-400/30 rounded-full"></div>
                    </div>
                  )}
                  {feature.icon === "cylinder" && (
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      <div className="w-10 h-8 border-2 border-pink-400 rounded-full"></div>
                      <div className="absolute w-6 h-10 border-2 border-pink-400 border-t-0 border-b-0 rounded-b-lg"></div>
                      <div className="absolute w-6 h-2 bg-pink-400/30 rounded-full top-2"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">{feature.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{feature.description}</p>
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white p-0 h-auto font-medium">
                  MORE INFO <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
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

      {/* Grow Business Section */}
      <section className="section bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Grow business with creative ideas
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Professional Agency</h3>
                    <p className="text-gray-300">
                      Comprehensive digital solutions with modern technologies and creative expertise to elevate your brand presence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Solutions Provider</h3>
                    <p className="text-gray-300">
                      Expert consultation and tailored digital solutions that drive measurable results for your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="text-center lg:text-right">
              <div className="mb-8">
                <h3 className="text-lg text-gray-300 mb-4">We have worked for you</h3>
                <div className="text-6xl md:text-8xl font-bold text-white/20 tracking-widest">
                  SINCE 2023
                </div>
              </div>
            </div>
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

      {/* Our Digital Experience Section */}
      <section className="section bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary-glow border-primary/30">
                OUR DIGITAL EXPERIENCE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Leading the best digital agency in Sri Lanka
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-white">Professional staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-white">100% Satisfaction guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-white">Innovative ideas & solutions</span>
                </div>
              </div>
              
              {/* Progress Circles */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="40" stroke="hsl(var(--primary))" strokeWidth="8" fill="none" 
                        strokeDasharray={`${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.85)}`}
                        className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">85%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white">Company Growth</h4>
                </div>
                
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="40" stroke="hsl(var(--primary))" strokeWidth="8" fill="none" 
                        strokeDasharray={`${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.98)}`}
                        className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">98%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white">Satisfied Clients</h4>
                </div>
              </div>
            </div>
            
            {/* Right Content - FAQ */}
            <div className="space-y-4">
              {[
                {
                  question: "How long have you been in business?",
                  answer: "Semantix Labs was founded in 2023 with a vision to make technology accessible to all. Despite being relatively new, our team brings years of collective experience in web development, digital marketing, and creative design."
                },
                {
                  question: "What makes your approach different?",
                  answer: "We focus on building long-term relationships with our clients, providing personalized solutions that grow with your business. Our Sri Lankan roots combined with global standards ensure quality at competitive rates."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes, while we're based in Colombo, Sri Lanka, we work with clients globally. Our diverse portfolio includes businesses from various countries and industries."
                }
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = React.useState(false);
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h4 className="font-semibold text-white">{faq.question}</h4>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
                      <div className="text-muted-foreground">+94 72 813 3311</div>
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
                    <div className="text-sm text-primary">+94 77 522 2493</div>
                    <div className="text-sm text-primary">s.shobian@semantixlabs.com</div>
                  </div>
                  <div>
                    <div className="font-semibold">Umair Shukri</div>
                    <div className="text-sm text-muted-foreground">Chief Operating Officer</div>
                    <div className="text-sm text-primary">+94 76 882 9986</div>
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
              <div className="text-sm  mb-2">
                www.semantixlabs.com
              </div>
              <div className="text-sm ">
                © 2026 Semantix Labs. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;