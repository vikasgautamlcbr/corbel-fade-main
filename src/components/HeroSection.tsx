import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1145526295?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Hero Background - SGP"
        />
        
        {/* Overlays for readability in black */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Investing in Teams Building the Future of Software
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            At SGP, we have aspired to build a different kind of investment firm - One whose primary 
            mission is to build great companies. When we do that, we deliver win-win outcomes for 
            everyone - Company Founders, their Employees, and our Limited Partners.
          </p>

          <Button
            onClick={scrollToContact}
            variant="cta"
            size="lg"
            className="px-8 py-5 text-sm"
          >
            Contact us
          </Button>
        </div>
      </div>

      {/* Scroll Mouse Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <Mouse className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}
