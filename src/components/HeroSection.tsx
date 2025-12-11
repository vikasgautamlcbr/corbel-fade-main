import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full pointer-events-none relative">
          <iframe
            src="https://player.vimeo.com/video/1145526295?background=1&autoplay=1&muted=1&loop=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh]"
            title="Hero Background - SGP"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001E22]/90 via-[#001E22]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001E22]/30 via-transparent to-[#001E22]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="hero-content max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Focus helps us get it right
          </h1>
          
          <p className="hero-subtitle text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            At SGP, we have aspired to build a different kind of investment firm - One whose primary 
            mission is to build great companies. When we do that, we deliver win-win outcomes for 
            everyone - Company Founders, their Employees, and our Limited Partners.
          </p>

          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="hero-cta border border-white/80 text-white bg-transparent hover:bg-white hover:text-navy px-8 py-5 text-sm transition-all duration-300"
          >
            Contact us
          </Button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 z-20 pointer-events-none"
      >
        <div className="mouse-icon">
          <div className="mouse-wheel animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
