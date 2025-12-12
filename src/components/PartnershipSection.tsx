import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function PartnershipSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="bg-[#0c1c3d]"
    >
      <div className="container mx-auto px-0 md:px-6">
        <div
          className={`grid md:grid-cols-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Video */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[400px] overflow-hidden bg-[#0c1c3d]">
            {/* Loading placeholder */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0c1c3d]">
                <div className="w-10 h-10 border-2 border-[#1cc8e0]/30 border-t-[#1cc8e0] rounded-full animate-spin" />
              </div>
            )}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/videos/partnership-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="bg-[#0c1c3d] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-[#1cc8e0] font-medium tracking-wider uppercase text-sm mb-4">
              Focused on Growth
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Partnership Built for Growth
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-6 leading-relaxed">
              Software Growth Partners (SGP) is a Silicon Valley–based private equity 
              firm focused on lower-middle market software companies. We take a 
              partnership-driven, hands-on investment approach, working closely with 
              founders who seek liquidity while retaining meaningful upside in their next 
              stage of growth.
            </p>
            <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
              As an operationally involved investor, SGP supports portfolio companies 
              across product, go-to-market, and operations—helping management 
              teams address key scaling challenges and unlock their full potential.
            </p>
            <Button
              onClick={scrollToContact}
              variant="cta"
              size="lg"
              className="px-6 py-5 text-sm w-fit"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
