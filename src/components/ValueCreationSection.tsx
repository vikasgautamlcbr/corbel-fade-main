import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';

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
  const [tabsHovered, setTabsHovered] = useState(false);

  const icons = useMemo(() => {
    return import.meta.glob('/src/assets/icons/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
  }, []);

  const getIconUrl = (title: string) => {
    const key = `/src/assets/icons/${title}.svg`;
    return icons[key];
  };

  return (
    <section id="value-creation" ref={ref} className="relative bg-black overflow-hidden py-16 md:py-24 snap-start">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-6 relative z-10">
        <style>{`
          @keyframes numberPop {
            0% { transform: translateY(8px) scale(0.96); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          .number-animate { animation: numberPop 260ms ease-out; }
          @keyframes fadeUp {
            0% { transform: translateY(6px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .fade-up { animation: fadeUp 220ms ease-out; }
        `}</style>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="md:px-0 md:order-2 order-1 md:self-stretch">
              <div className="text-left mb-10">
                <p className={`font-medium tracking-wider uppercase text-sm mb-4 text-[#00FFFF] ${isVisible ? 'animate-fade-in-up delay-100' : ''}`}>Value Creation</p>
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in-up delay-150' : ''}`}>Partnering for Lasting Outcomes</h2>
                <p className={`text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
                  We focus on building enduring software leaders by delivering value to both owners and intermediaries—through growth, flexibility, and an efficient process.
                </p>
              </div>

              <div className="mb-6">
                <div className={`flex items-center gap-6 ${isVisible ? 'animate-fade-in-up delay-250' : ''}`}>
                  {[
                    { id: 'owners', label: 'For Owners' },
                    { id: 'intermediaries', label: 'For Intermediaries' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onMouseEnter={() => {
                        setActiveTab(tab.id as 'owners' | 'intermediaries');
                        setActiveIndex(0);
                        setTabsHovered(true);
                      }}
                      className={`px-3 py-2 text-sm font-medium rounded-none border border-white/20 ${
                        activeTab === tab.id ? 'bg-[#0c1c3d] text-white' : 'bg-white/10 text-white/80 hover:bg-white/15'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <ul className={`grid grid-cols-2 gap-x-6 gap-y-4 ${tabsHovered ? 'animate-fade-in-up delay-200' : 'opacity-0 pointer-events-none'}`}>
                {(activeTab === 'owners' ? owners : intermediaries).map((item, idx) => (
                  <li key={`${activeTab}-${item.title}`} className="flex items-center gap-3">
                    <ArrowRight
                      className={`w-4 h-4 text-[#00FFFF] transition-opacity duration-200 ${activeIndex === idx ? 'opacity-100' : 'opacity-70'}`}
                    />
                    <button
                      onMouseEnter={() => setActiveIndex(idx)}
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
                const iconUrl = getIconUrl(selected.title);
                return (
                  <div
                    className={`p-6 md:p-8 rounded-none ${isVisible ? 'animate-fade-in-up delay-300' : ''} md:h-full w-full flex flex-col items-center justify-center`}
                    style={{
                      background: 'linear-gradient(45deg, rgba(0,255,255,0.08), rgba(255,255,255,0.03) 60%, rgba(255,255,255,0.02))'
                    }}
                  >
                    <div className="space-y-4 w-full">
                      <div className="select-none flex items-center justify-center">
                        {iconUrl ? (
                          <div
                            key={`${activeTab}-${activeIndex}-icon`}
                            className="fade-up w-16 h-16 md:w-[120px] md:h-[120px]"
                            style={{
                              backgroundColor: '#00FFFF',
                              WebkitMaskImage: `url(${iconUrl})`,
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              WebkitMaskSize: 'contain',
                              maskImage: `url(${iconUrl})`,
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              maskSize: 'contain',
                            }}
                            aria-label={selected.title}
                          />
                        ) : (
                          <ArrowRight className="fade-up w-16 h-16 text-[#00FFFF]" />
                        )}
                      </div>
                      <p key={`${activeTab}-${activeIndex}-title`} className="fade-up text-white text-xl md:text-2xl font-semibold">{selected.title}</p>
                      <p key={`${activeTab}-${activeIndex}-desc`} className="fade-up text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">{selected.desc}</p>
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
