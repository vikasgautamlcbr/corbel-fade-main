import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import partnershipAbstract from '@/assets/Partnership Abstract.mp4';

export function PartnershipSection() {
  const { ref, isVisible } = useScrollAnimation(0.85);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="growth" ref={ref} className="relative bg-black overflow-hidden site-section">
      {/* Edge-to-edge background video */}
      <video
        src={partnershipAbstract}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="section-container relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className={`section-eyebrow mb-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Focused on Growth
            </p>
            <h2
              className={`section-title mb-6 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              A Partnership Built for Growth
            </h2>
            <p
              className={`section-body mb-6 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Software Growth Partners (SGP) is a Silicon Valley–based private equity 
              firm focused on lower-middle market software companies. We take a 
              partnership-driven, hands-on investment approach, working closely with 
              founders who seek liquidity while retaining meaningful upside in their next 
              stage of growth.
            </p>
            <p
              className={`section-body mb-8 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              As an operationally involved investor, SGP supports portfolio companies 
              across product, go-to-market, and operations—helping management 
              teams address key scaling challenges and unlock their full potential.
            </p>
            <Button
              onClick={scrollToContact}
              variant="cta"
              size="lg"
              className={`px-6 py-5 text-sm w-fit mx-auto transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
