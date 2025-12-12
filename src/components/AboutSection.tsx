import { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tabs = [
  {
    id: 'performance',
    label: 'Performance Driven',
    content: 'We strive to achieve measurable gains at our portfolio companies by upholding the highest deliverable standards for ourselves as well as our management teams.',
  },
  {
    id: 'relationship',
    label: 'Relationship Centered',
    content: 'We aim to be the financial partner of choice and seek to provide continuous support to our management teams through both the good and tough phases of our investment period.',
  },
  {
    id: 'entrepreneurial',
    label: 'Entrepreneurial in Spirit',
    content: 'We are entrepreneurs at heart and aim to continue promoting this entrepreneurial spirit at our portfolio companies to drive exceptional growth.',
  },
  {
    id: 'principled',
    label: 'Principled in Approach',
    content: 'We intend to be disciplined and principled in our investment approach and strive to overcome all challenges with high integrity and professionalism.',
  },
];

const DURATION = 10000; // 10 seconds

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const activeContent = tabs.find((tab) => tab.id === activeTab);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const goToNextTab = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      const nextIndex = (activeIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].id);
      setProgress(0);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  }, [activeIndex]);

  const handleTabClick = (tabId: string) => {
    if (tabId !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setProgress(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextTab();
          return 0;
        }
        return prev + (100 / (DURATION / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [goToNextTab, isHovered]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-muted py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="mb-10">
            <p className="text-[#1cc8e0] font-medium tracking-wider uppercase text-sm mb-4">
              Driven by Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Committed to Building Enduring Software Leaders
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Software Growth Partners' (SGP's) primary mission is to build great software companies. We do this by being very selective about 
              where we invest, and being very engaged in where we do invest. Unlike traditional private equity approach, we engage with our 
              portfolio companies as true partners with only one goal: To help them achieve their true potential. In order to achieve its mission, 
              SGP intends to be:
            </p>
          </div>

          {/* Tabs */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative px-3 py-3 text-xs md:text-sm font-medium transition-all duration-300 overflow-hidden ${
                  activeTab === tab.id
                    ? 'bg-[#0c1c3d] text-white'
                    : 'bg-[#0c1c3d] text-white/80 hover:text-white hover:bg-[#142a52] hover:scale-[1.02]'
                }`}
              >
                {tab.label}
                {/* Progress bar indicator at bottom of active tab */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-[#1cc8e0] transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div 
            className="bg-muted-foreground/10 p-6 md:p-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {activeContent && (
              <p 
                className={`text-muted-foreground text-sm md:text-base leading-relaxed transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {activeContent.content}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
