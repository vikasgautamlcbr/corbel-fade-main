import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const items = [
  {
    id: 'performance',
    title: 'Performance Driven',
    subtitle: 'Excellence in Execution',
    content:
      'We strive to achieve measurable gains at our portfolio companies by upholding the highest deliverable standards for ourselves as well as our management teams.',
  },
  {
    id: 'relationship',
    title: 'Relationship Centered',
    subtitle: 'Partnership First',
    content:
      'Building lasting partnerships is at the core of our approach. We believe in transparent communication and mutual respect with all stakeholders.',
  },
  {
    id: 'entrepreneurial',
    title: 'Entrepreneurial in Spirit',
    subtitle: 'Innovation Driven',
    content:
      'We embrace innovation and calculated risk-taking, empowering our portfolio companies to pursue bold strategies and breakthrough growth.',
  },
  {
    id: 'principled',
    title: 'Principled in Approach',
    subtitle: 'Integrity Always',
    content:
      'Integrity guides every decision we make. We maintain unwavering ethical standards in all our business dealings and partnerships.',
  },
];

const ExpandablePanels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const mq = typeof window !== 'undefined' ? window.matchMedia('(hover: hover) and (pointer: fine)') : null;
    const update = () => setIsHoverable(mq ? mq.matches : true);
    update();
    mq?.addEventListener('change', update);
    return () => {
      mq?.removeEventListener('change', update);
    };
  }, []);

  return (
    <div className="space-y-px">
      {items.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={isHoverable ? () => setActiveIndex(index) : undefined}
          onClick={() => setActiveIndex(index)}
          onTouchStart={() => setActiveIndex(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index);
          }}
          className={cn(
            'group cursor-pointer transition-all duration-700 relative overflow-hidden',
            activeIndex === index ? 'bg-[#0a0a0a]' : 'bg-transparent hover:bg-[#0a0a0a]/50',
          )}
        >
          {activeIndex === index && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--cyan) / 0.12), hsl(var(--cyan) / 0.05), transparent)' }}
            />
          )}
          <div className="relative z-10 flex items-center justify-between pl-4 pr-0 md:px-12 py-6 md:py-8">
            <div className="flex items-center gap-0 md:gap-16">
              <span
                className={cn(
                  'hidden md:inline-block w-16 md:w-24 text-right text-5xl md:text-6xl font-extralight transition-colors duration-500',
                  activeIndex === index ? 'text-[hsl(var(--cyan))]' : 'text-gray-700',
                )}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0">
                <h3
                  className={cn(
                    'text-xl md:text-2xl font-light transition-colors duration-300 truncate',
                    activeIndex === index ? 'text-white' : 'text-gray-500',
                  )}
                >
                  {item.title}
                </h3>
                <span
                  className={cn(
                    'text-xs tracking-[0.2em] uppercase transition-all duration-500',
                    activeIndex === index ? 'text-[hsl(var(--cyan))] opacity-100 block mt-1' : 'hidden',
                  )}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>

            <ArrowRight
              className={cn(
                'w-6 h-6 transition-all duration-500 hidden md:block',
                activeIndex === index ? 'text-[hsl(var(--cyan))] translate-x-0 opacity-100' : 'text-gray-500 translate-x-0 opacity-100',
              )}
            />
          </div>

          <div
            className={cn('overflow-hidden transition-all duration-700 ease-out', activeIndex === index ? 'max-h-60 md:max-h-48' : 'max-h-0')}
          >
            <div className="pr-0 md:pr-12 pb-6 md:pb-8 pl-4 md:pl-52">
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-full md:max-w-3xl">{item.content}</p>
            </div>
          </div>

          {activeIndex === index ? (
            <div
              className="absolute bottom-0 left-0 h-px w-full transition-all duration-500"
              style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--cyan)), hsl(var(--cyan) / 0.5), transparent)' }}
            />
          ) : (
            <div className="absolute bottom-0 left-0 h-px w-full md:w-1/3 bg-gradient-to-r from-gray-800 to-transparent transition-all duration-500" />
          )}
        </div>
      ))}
    </div>
  );
};

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section id="about" ref={ref} className="bg-black site-section">
      <div className="section-container">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
        <div className="px-6 md:px-6 md:col-span-2">
          <div className="mb-10 text-center">
            <p
              className={`section-eyebrow mb-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Driven by Purpose
            </p>
            <h2
              className={`section-title mb-6 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Committed to Building Enduring Software Leaders
            </h2>
            <p
              className={`section-body transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Software Growth Partners' (SGP's) primary mission is to build great software companies. We do this by being very selective about
              where we invest, and being very engaged in where we do invest. Unlike traditional private equity approach, we engage with our
              portfolio companies as true partners with only one goal: To help them achieve their true potential. In order to achieve its mission,
              SGP intends to be:
            </p>
          </div>

          <div
            className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="-mx-6 md:mx-0">
              <ExpandablePanels />
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </section>
  );
}
