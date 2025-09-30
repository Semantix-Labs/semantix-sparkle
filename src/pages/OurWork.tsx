import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Monitor, Palette, Menu, X, Camera } from 'lucide-react';
import SemanixLogo from '@/components/SemanixLogo';

const OurWork: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const videos = [
    { id: 1, title: 'Reel 1', url: '/videos/reel1.mp4' },
    { id: 2, title: 'Reel 2', url: '/videos/reel2.mp4' },
    { id: 3, title: 'Reel 3', url: '/videos/reel3.mp4' },
    { id: 4, title: 'Reel 4', url: '/videos/reel4.mp4' },
    { id: 5, title: 'Reel 5', url: '/videos/KBC.mp4' },
    { id: 6, title: 'Reel 6', url: '/videos/reel7.mp4' },
    { id: 7, title: 'Reel 7', url: '/videos/RV1.mp4' },
    { id: 8, title: 'Reel 8', url: '/videos/la_beirut.mp4' },
    { id: 9, title: 'Reel 9', url: '/videos/Shanmugas.mp4' },
  ];

  const creativeCaptures = [
    { id: 1, title: 'Creative Capture 1', imageUrl: 'public/images/AV7A1924.jpg' },
    { id: 2, title: 'Creative Capture 2', imageUrl: 'public/images/6W7A5765.jpg' },
    { id: 3, title: 'Creative Capture 3', imageUrl: 'public/images/finall (21 of 21).jpg' },
    { id: 4, title: 'Creative Capture 4', imageUrl: 'public/images/finall (14 of 21).jpg' },
    { id: 5, title: 'Creative Capture 5', imageUrl: 'public/images/Bed-Setup-13.jpg' },
    { id: 6, title: 'Creative Capture 6', imageUrl: 'public/images/RV2.jpg' },
  ];

  const websites = [
    { id: 1, title: 'River View Villas', imageUrl: '/images/Riverview.png', description: 'An e-commerce platform for a fashion brand.' },
    { id: 2, title: 'PGTC', imageUrl: '/images/PGTC.png', description: 'A corporate website for a tech startup.' },
    { id: 3, title: 'Tabroscapes Tours', imageUrl: '/images/tabro.png', description: 'A portfolio website for a creative agency.' },
    { id: 2, title: 'Mingle Box', imageUrl: '/images/PGTC.png', description: 'A corporate website for a tech startup.' },
    { id: 3, title: 'Cuddles and Co', imageUrl: '/images/tabro.png', description: 'A portfolio website for a creative agency.' },
    { id: 3, title: 'Olinda Galle', imageUrl: '/images/tabro.png', description: 'A portfolio website for a creative agency.' },
  ];

  // const brandingKits = [
  //   { id: 1, title: 'Branding Kit 1', description: 'A complete branding kit for a modern tech company.', imageUrl: 'https://via.placeholder.com/800x600.png?text=Branding+Kit+1' },
  //   { id: 2, title: 'Branding Kit 2', description: 'Elegant and minimalist branding for a fashion label.', imageUrl: 'https://via.placeholder.com/800x600.png?text=Branding+Kit+2' },
  //   { id: 3, title: 'Branding Kit 3', description: 'Vibrant and playful branding for a new startup.', imageUrl: 'https://via.placeholder.com/800x600.png?text=Branding+Kit+3' },
  // ];

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
                <a href="/" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Home</a>
                <button onClick={() => scrollToSection('reels')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Reels</button>
                <button onClick={() => scrollToSection('captures')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Photography</button>
                <button onClick={() => scrollToSection('websites')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Websites</button>
                <button onClick={() => scrollToSection('branding')} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Branding</button>
              </div>
            </div>

            {/* CTA (right) */}
            <div className="justify-self-end">
              <Button size="sm" className="btn-primary px-4 py-2 text-sm" onClick={() => window.open('https://calendly.com/semantixlabs/30min', '_blank')}>
                Start Project
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 shadow-elegant">
            <div className="flex flex-col space-y-3">
                <a href="/" className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Home</a>
                <button onClick={() => scrollToSection('reels')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Reels</button>
                <button onClick={() => scrollToSection('captures')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Photography</button>
                <button onClick={() => scrollToSection('websites')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Websites</button>
                <button onClick={() => scrollToSection('branding')} className="text-left text-foreground/80 hover:text-primary transition-colors text-sm font-medium py-2">Branding</button>
              <Button className="btn-primary w-full justify-center mt-2" onClick={() => window.open('https://calendly.com/semantixlabs/30min', '_blank')}>
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
        <div className="relative z-20 container-custom text-center">
          <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
            Our Creative <span className="gradient-text bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            A showcase of our passion for design, development, and storytelling.
          </p>
        </div>
      </section>

      {/* Reel Format Videos */}
      <section id="reels" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="gradient-text">Reel Format</span> Videos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Engaging short-form video content for social media.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {videos.map(video => (
              <div key={video.id} className="w-[270px] h-[480px] sm:w-[300px] sm:h-[533px]">
                <Card className="glass-card hover-lift hover-glow group w-full h-full overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src={video.url}
                    title={video.title}
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Captures (Photographic Services) */}
      <section id="captures" className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative <span className="gradient-text">Captures</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeCaptures.map(capture => (
              <Card key={capture.id} className="glass-card p-0 overflow-hidden hover-lift hover-glow group">
                <img src={capture.imageUrl} alt={capture.title} className="w-full h-80 object-cover" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Projects */}
      <section id="websites" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pixel-perfect websites with exceptional user experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map(website => (
              <Card key={website.id} className="glass-card p-0 overflow-hidden hover-lift hover-glow group">
                <img src={website.imageUrl} alt={website.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><Monitor className="w-5 h-5 mr-2 text-primary" />{website.title}</h3>
                  <p className="text-muted-foreground mb-4">{website.description}</p>
                  <Button variant="outline" className="w-full">View Project <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Kit Projects
      <section id="branding" className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Branding Kit <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive brand identities that tell a story.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingKits.map(kit => (
              <Card key={kit.id} className="glass-card p-0 overflow-hidden hover-lift hover-glow group">
                <img src={kit.imageUrl} alt={kit.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center"><Palette className="w-5 h-5 mr-2 text-primary" />{kit.title}</h3>
                  <p className="text-muted-foreground mb-4">{kit.description}</p>
                  <Button variant="outline" className="w-full">View Branding <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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

export default OurWork;
