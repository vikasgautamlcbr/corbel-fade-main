import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState, useRef, useEffect } from 'react';

const owners = [
  {
    title: 'Growth Focus',
    desc: 'Help companies grow via access to capital and management expertise so they achieve their true potential.',
  },
  {
    title: 'Flexible',
    desc: 'Flexible deal structures addressing buyouts, recaps, and most situations.',
  },
  {
    title: 'Efficient Process',
    desc: 'Quick and efficient so you stay focused on running the business.',
  },
  {
    title: 'Building a Legacy',
    desc: 'Invest to build lasting organizations, not just to reduce costs or maximize short‑term profits.',
  },
  {
    title: 'Value Adding',
    desc: 'Make every interaction valuable by bringing industry insights to each conversation.',
  },
  {
    title: 'Long Term',
    desc: 'Long‑term investors, not driven by strict exit timelines; flexibility to do what is right for the company.',
  },
];

const intermediaries = [
  {
    title: 'Attractive Fees',
    desc: 'Market‑attractive success fees for introductions that lead to investments.',
  },
  {
    title: 'Reliable',
    desc: 'Years of deal‑making experience; know what it takes to get deals done beyond financial modeling.',
  },
  {
    title: 'Efficient Process',
    desc: 'Quick and efficient; initial yes/no indication within 48 hours.',
  },
  {
    title: 'Capital',
    desc: 'High certainty of closing backed by access to significant capital and committed funds.',
  },
  {
    title: 'Flexible',
    desc: 'Flexible deal structures addressing buyouts, recaps, and most situations.',
  },
  {
    title: 'Long Term Partners',
    desc: 'Build long‑term partnerships and recreate successes beyond transactional engagements.',
  },
];

export function ValueCreationSection() {
  const { ref, isVisible } = useScrollAnimation(0.85);
  const [activeTab, setActiveTab] = useState<'owners' | 'intermediaries'>('owners');
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabsHovered, setTabsHovered] = useState(true);
  const [reveal, setReveal] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [nextTab, setNextTab] = useState<'owners' | 'intermediaries' | null>(null);
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

  const icons = useMemo(() => {
    return import.meta.glob('/src/assets/icons/*.svg', { eager: true, as: 'raw' }) as Record<string, string>;
  }, []);

  const getIconRaw = (title: string) => {
    const key = `/src/assets/icons/${title}.svg`;
    return icons[key];
  };

  return (
    <section id="value-creation" ref={ref} className="relative bg-black overflow-hidden py-16 md:py-24 snap-start">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="section-container relative z-10">
        <style>{`
          @keyframes numberPop {
            0% { transform: translateY(8px) scale(0.96); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          .number-animate { animation: numberPop 260ms ease-out both; will-change: transform, opacity; backface-visibility: hidden; }
          @keyframes fadeUp {
            0% { transform: translateY(6px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .fade-up { animation: fadeUp 220ms ease-out both; will-change: transform, opacity; backface-visibility: hidden; }
        `}</style>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="md:px-0 md:order-2 order-1 md:self-stretch">
              <div className="text-left mb-10">
                <p
                  className={`section-eyebrow mb-4 transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >Value Creation</p>
                <h2
                  className={`section-title mb-6 transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >Partnering for Lasting Outcomes</h2>
                <p
                  className={`section-body max-w-3xl transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  We focus on building enduring software leaders by delivering value to both owners and intermediaries—through growth, flexibility, and an efficient process.
                </p>
              </div>

              <div className="mb-6">
                <div
                  className={`flex items-center gap-6 transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: '250ms',
                    opacity: reveal ? 1 : 0,
                    transition: reveal ? 'opacity 160ms ease-out' : 'none',
                    pointerEvents: isSwitching ? 'none' : 'auto',
                    willChange: 'opacity',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {[
                    { id: 'owners', label: 'For Owners' },
                    { id: 'intermediaries', label: 'For Intermediaries' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onMouseEnter={isHoverable ? () => {
                        const next = tab.id as 'owners' | 'intermediaries';
                        if (next === activeTab || isSwitching) return;
                        setTabsHovered(true);
                        setNextTab(next);
                        setIsSwitching(true);
                        setReveal(false);
                        window.setTimeout(() => {
                          setActiveTab(next);
                          setActiveIndex(0);
                          setReveal(true);
                          setIsSwitching(false);
                          setNextTab(null);
                        }, 40);
                      } : undefined}
                      onClick={() => {
                        const next = tab.id as 'owners' | 'intermediaries';
                        if (next === activeTab || isSwitching) return;
                        setTabsHovered(true);
                        setNextTab(next);
                        setIsSwitching(true);
                        setReveal(false);
                        window.setTimeout(() => {
                          setActiveTab(next);
                          setActiveIndex(0);
                          setReveal(true);
                          setIsSwitching(false);
                          setNextTab(null);
                        }, 40);
                      }}
                      onTouchStart={() => {
                        const next = tab.id as 'owners' | 'intermediaries';
                        if (next === activeTab || isSwitching) return;
                        setTabsHovered(true);
                        setNextTab(next);
                        setIsSwitching(true);
                        setReveal(false);
                        window.setTimeout(() => {
                          setActiveTab(next);
                          setActiveIndex(0);
                          setReveal(true);
                          setIsSwitching(false);
                          setNextTab(null);
                        }, 40);
                      }}
                      className="relative px-3 py-2 text-sm font-medium rounded-none border"
                      aria-pressed={activeTab === tab.id}
                      style={{
                        transition: 'background-color 120ms ease-out, border-color 120ms ease-out, color 120ms ease-out',
                        backfaceVisibility: 'hidden',
                        pointerEvents: isSwitching ? 'none' : 'auto',
                        backgroundColor:
                          reveal && activeTab === tab.id ? '#00FFFF' : 'rgba(255,255,255,0.10)',
                        borderColor:
                          reveal && activeTab === tab.id ? '#00FFFF' : 'rgba(255,255,255,0.20)',
                      }}
                    >
                      <span
                        className="relative z-10"
                        style={{ color: reveal && activeTab === tab.id ? '#000000' : 'rgba(255,255,255,0.8)' }}
                      >
                        {tab.label}
                      </span>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{
                          backgroundColor: 'transparent',
                          opacity: 0,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <ul
                ref={listRef}
                className="grid grid-cols-2 gap-x-6 gap-y-4"
                style={{
                  opacity: reveal ? 1 : 0,
                  transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                  transition: reveal ? 'opacity 220ms ease-out, transform 220ms ease-out' : 'none',
                  visibility: reveal ? 'visible' : 'hidden',
                }}
                onTransitionEnd={(e) => {
                  if (!reveal && isSwitching && e.target === e.currentTarget && (e.propertyName === 'opacity' || e.propertyName === 'transform')) {
                    if (nextTab) {
                      setActiveTab(nextTab);
                      setActiveIndex(0);
                    }
                    setReveal(true);
                    setIsSwitching(false);
                    setNextTab(null);
                  }
                }}
              >
                {(activeTab === 'owners' ? owners : intermediaries).map((item, idx) => (
                  <li
                    key={`${activeTab}-${item.title}`}
                    className="flex items-center gap-3"
                    style={{
                      opacity: reveal ? 1 : 0,
                      transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                      transition: reveal ? 'opacity 200ms ease-out, transform 200ms ease-out' : 'none',
                      transitionDelay: reveal ? `${idx * 60}ms` : '0ms',
                      willChange: 'opacity, transform',
                      backfaceVisibility: 'hidden',
                      visibility: reveal ? 'visible' : 'hidden',
                    }}
                  >
                    <ArrowRight
                      className={`w-4 h-4 text-[#00FFFF] transition-opacity duration-200 ${activeIndex === idx ? 'opacity-100' : 'opacity-70'}`}
                    />
                    <button
                      onMouseEnter={isHoverable ? () => setActiveIndex(idx) : undefined}
                      onClick={() => setActiveIndex(idx)}
                      onTouchStart={() => setActiveIndex(idx)}
                      className="inline-flex items-center text-left py-1 transition hover:translate-x-0.5 duration-200"
                    >
                      <span
                        className={`text-sm md:text-base font-medium ${activeIndex === idx ? 'text-white' : 'text-white/80'}`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:px-0 md:order-1 order-2 text-center md:self-stretch flex">
              {(() => {
                const items = activeTab === 'owners' ? owners : intermediaries;
                const selected = items[activeIndex];
                const iconRaw = getIconRaw(selected.title);
                return (
                  <div
                    className={`p-6 md:p-8 rounded-none md:h-full w-full flex flex-col items-center justify-center`}
                    style={{
                      background: 'linear-gradient(45deg, rgba(0,255,255,0.08), rgba(255,255,255,0.03) 60%, rgba(255,255,255,0.02))',
                      opacity: reveal ? 1 : 0,
                      transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                      transition: reveal ? 'opacity 160ms ease-out, transform 160ms ease-out' : 'none',
                      transitionDelay: reveal ? '80ms' : '0ms',
                      willChange: 'opacity, transform',
                      backfaceVisibility: 'hidden',
                      visibility: reveal ? 'visible' : 'hidden',
                    }}
                  >
                    <div className="space-y-4 w-full">
                      <div className="select-none flex items-center justify-center">
                        {iconRaw ? (
                          <div
                            key={`${activeTab}-${activeIndex}-icon`}
                            className="w-16 h-16 md:w-[120px] md:h-[120px]"
                            style={{
                              color: '#00FFFF',
                              opacity: reveal ? 1 : 0,
                              transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                              transition: reveal ? 'opacity 140ms ease-out, transform 140ms ease-out' : 'none',
                              transitionDelay: reveal ? '120ms' : '0ms',
                              willChange: 'opacity, transform',
                              backfaceVisibility: 'hidden',
                              visibility: reveal ? 'visible' : 'hidden',
                            }}
                            dangerouslySetInnerHTML={{
                              __html: iconRaw
                                .replace('width="24"', 'width="100%"')
                                .replace('height="24"', 'height="100%"')
                            }}
                          />
                        ) : (
                          <ArrowRight
                            className="w-16 h-16 text-[#00FFFF]"
                            style={{
                              opacity: reveal ? 1 : 0,
                              transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                              transition: reveal ? 'opacity 140ms ease-out, transform 140ms ease-out' : 'none',
                              transitionDelay: reveal ? '120ms' : '0ms',
                              willChange: 'opacity, transform',
                              backfaceVisibility: 'hidden',
                              visibility: reveal ? 'visible' : 'hidden',
                            }}
                          />
                        )}
                      </div>
                      <p
                        key={`${activeTab}-${activeIndex}-title`}
                        className="text-white text-xl md:text-2xl font-semibold"
                        style={{
                          opacity: reveal ? 1 : 0,
                          transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                          transition: reveal ? 'opacity 160ms ease-out, transform 160ms ease-out' : 'none',
                          transitionDelay: reveal ? '140ms' : '0ms',
                          willChange: 'opacity, transform',
                          backfaceVisibility: 'hidden',
                          visibility: reveal ? 'visible' : 'hidden',
                        }}
                      >
                        {selected.title}
                      </p>
                      <p
                        key={`${activeTab}-${activeIndex}-desc`}
                        className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed"
                        style={{
                          opacity: reveal ? 1 : 0,
                          transform: reveal ? 'translateY(0)' : 'translateY(6px)',
                          transition: reveal ? 'opacity 160ms ease-out, transform 160ms ease-out' : 'none',
                          transitionDelay: reveal ? '160ms' : '0ms',
                          willChange: 'opacity, transform',
                          backfaceVisibility: 'hidden',
                          visibility: reveal ? 'visible' : 'hidden',
                        }}
                      >
                        {selected.desc}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
