import { useState, useEffect, useCallback } from 'react';
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
  const [paused, setPaused] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const activeContent = tabs.find((tab) => tab.id === activeTab);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const goToNextTab = useCallback(() => {
    const nextIndex = (activeIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
    setProgress(0);
  }, [activeIndex]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  useEffect(() => {
    if (paused) return;
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
  }, [goToNextTab, paused]);

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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Header */}
          <div className="mb-10">
            <p className="text-primary font-medium mb-3">
              Driven by Purpose
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Committed to Building Enduring Software Leaders
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Software Growth Partners' (SGP's) primary mission is to build great software companies. We do this by being very selective about 
              where we invest, and being very engaged in where we do invest. Unlike traditional private equity approach, we engage with our 
              portfolio companies as true partners with only one goal: To help them achieve their true potential. In order to achieve its mission, 
              SGP intends to be:
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative px-3 py-3 text-xs md:text-sm font-medium transition-all duration-300 overflow-hidden ${
                  activeTab === tab.id
                    ? 'bg-teal text-white'
                    : 'bg-teal text-white/80 hover:text-white'
                }`}
              >
                {tab.label}
                {/* Progress bar indicator at bottom of active tab */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-white transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-muted-foreground/10 p-6 md:p-8">
            {activeContent && (
              <p
                key={activeTab}
                className="text-muted-foreground text-sm md:text-base leading-relaxed animate-in fade-in duration-500"
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
