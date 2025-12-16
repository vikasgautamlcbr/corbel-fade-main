import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import leftToRight from '@/assets/Left to right (1).mp4';

const metrics = [
  { label: 'Revenue', value: '$2M – $30M (>50% recurring)' },
  { label: 'Growth', value: '10%+' },
  { label: 'EBITDA', value: '$500K+' },
  { label: 'Churn', value: '< 10%' },
];

const characteristics = [
  'Large and growing addressable market',
  'Sustainable competitive advantage',
  'Fragmented customer base',
  'High switching cost',
];

const sectors = [
  'Logistics and Supply Chain Management',
  'Healthcare',
  'Data Aggregation and Insights',
  'Security, Big Data and IOT',
  'Financial Services',
  'Business Services',
  'ERP, HCM, CRM',
];

const process = [
  { title: 'Management Call and CIM Review (when available)', detail: 'Go/No-Go Decision within 48 hours' },
  { title: 'Initial Data Request', detail: '' },
  { title: 'Initial offer with summary terms (LOI)', detail: 'Targeted within 4–6 weeks' },
  { title: 'Detailed Due Diligence (LOI)', detail: '' },
  { title: 'Purchase Agreement', detail: 'Targeted within 16–24 weeks' },
];


export function InvestmentApproachSection() {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const [activeTab, setActiveTab] = useState<'metrics' | 'characteristics' | 'sectors'>('metrics');

  return (
    <section id="approach" ref={ref} className="relative bg-black overflow-hidden py-16 md:py-24 snap-start">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-black/30" />

      <style>{`
        @keyframes stepShimmer {
          0% { left: -40%; }
          100% { left: 120%; }
        }
        .step-shimmer { position: relative; overflow: hidden; }
        .step-shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -40%;
          width: 40%;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0));
          animation: stepShimmer 2.2s linear infinite;
          pointer-events: none;
          z-index: 0;
          will-change: left;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,35%)_minmax(0,65%)] gap-8 items-start">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-left mb-10">
                <p className={`font-medium tracking-wider uppercase text-sm mb-4 text-[#00FFFF] ${isVisible ? 'animate-fade-in-up delay-100' : ''}`}>Investment Approach</p>
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in-up delay-150' : ''}`}>Criteria & Process</h2>
                <p className={`text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
                  We invest in B2B software and software-enabled services companies with durable economics and strong market fit.
                </p>
              </div>
              
            </div>

            <div className={`transition-all duration-700 min-w-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className={`${isVisible ? 'animate-fade-in-up delay-300' : ''}`}>
                <div className="w-full mb-0 min-w-0">
                  <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'metrics', label: 'Business Metrics' },
                    { id: 'characteristics', label: 'Business Characteristics' },
                    { id: 'sectors', label: 'Industry Sectors' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onMouseEnter={() => setActiveTab(tab.id as 'metrics' | 'characteristics' | 'sectors')}
                      className={`px-3 py-3 text-xs md:text-sm font-medium transition-all rounded-none border ${
                        activeTab === tab.id
                          ? 'bg-[#00FFFF] text-black border-[#00FFFF]'
                          : 'bg-white/10 text-white/80 hover:bg-white/15 border-white/20'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                  </div>
                </div>

                <div className={`bg-white/5 border border-white/15 p-6 md:p-8 mt-0 w-full overflow-hidden`}>
                {activeTab === 'metrics' && (
                  <div>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">Recurring revenue, healthy margins, and clear visibility into sustainable, profitable growth.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 justify-items-start">
                      {metrics.map((m, idx) => (
                        <div key={m.label} className={`text-left ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${idx * 80}ms` }}>
                          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wide">{m.label}</p>
                          <p className="text-white text-lg md:text-xl font-semibold mt-1">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'characteristics' && (
                  <div>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">Differentiated businesses with strong leadership, loyal customers, and durable competitive advantages.</p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {characteristics.map((c, idx) => (
                        <div key={c} className={`w-fit px-4 py-1.5 border border-white/20 text-white/80 text-sm md:text-base rounded-none leading-snug ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${idx * 80}ms` }}>
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'sectors' && (
                  <div>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">B2B software and software-enabled services. Representative sectors include:</p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {sectors.map((s, idx) => (
                        <div key={s} className={`w-fit px-4 py-1.5 border border-white/20 text-white/80 text-sm md:text-base rounded-none leading-snug ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${idx * 70}ms` }}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16">
            <div className={`w-full ${isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
              <div className="text-left">
                <h3 className="text-[#00FFFF] text-xl font-semibold mb-3">Quick & Efficient Process</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6">
                  We understand that investment processes can be distracting for critical management team members. Therefore, we have designed a process that ensures minimal distraction and quick decision making.
                </p>
              </div>
              <div className="relative border border-white/10 rounded-none p-6 min-h-[140px] lg:min-h-[160px] flex items-center w-full overflow-hidden">
                <video
                  src={leftToRight}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" aria-hidden="true" />
                <div className="w-full relative z-10 flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
                  {process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-4">
                      <div className="flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-[140px]">
                        <div className="step-shimmer relative overflow-hidden px-2.5 py-0.5 text-[11px] md:text-xs font-semibold border border-white/25 rounded-none text-white/80">
                          <span className="relative z-10">{`Step ${idx + 1}`}</span>
                        </div>
                        <p className="text-white text-sm md:text-base font-medium mt-2 max-w-[200px] md:max-w-[220px] leading-tight mx-auto">{step.title}</p>
                        {step.detail ? (
                          <p className="text-muted-foreground text-[11px] md:text-xs mt-1 leading-snug text-center">{step.detail}</p>
                        ) : (
                          <span className="block mt-1" style={{ height: '14px' }} />
                        )}
                      </div>
                      {idx !== process.length - 1 && (
                        <div className="flex-none w-16 sm:w-20 md:w-24 lg:w-28 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span className="h-px bg-white/15 w-full" />
                          <ArrowRight className="w-4 h-4 text-white/50 justify-self-center" />
                          <span className="h-px bg-white/15 w-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
