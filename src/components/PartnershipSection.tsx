import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function PartnershipSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="growth"
      ref={ref}
      className="bg-[#0c1c3d]"
    >
      <div className="container mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Video */}
          <div className="relative aspect-square md:aspect-auto min-h-[400px] overflow-hidden bg-[#0c1c3d]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/partnership-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="bg-[#0c1c3d] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-secondary-foreground/70 text-sm mb-3">
              Focused on Growth
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              A Partnership Built for Growth
            </h2>
            <p className="text-secondary-foreground/80 text-sm md:text-base mb-6 leading-relaxed">
              Software Growth Partners (SGP) is a Silicon Valley–based private equity 
              firm focused on lower-middle market software companies. We take a 
              partnership-driven, hands-on investment approach, working closely with 
              founders who seek liquidity while retaining meaningful upside in their next 
              stage of growth.
            </p>
            <p className="text-secondary-foreground/80 text-sm md:text-base mb-8 leading-relaxed">
              As an operationally involved investor, SGP supports portfolio companies 
              across product, go-to-market, and operations—helping management 
              teams address key scaling challenges and unlock their full potential.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border border-secondary-foreground text-secondary-foreground bg-transparent hover:bg-secondary-foreground hover:text-navy px-6 py-5 text-sm w-fit transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
