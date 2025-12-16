import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import all portfolio logos
import netreoLogo from '@/assets/portfolio/netreo.jpg';
import stackifyLogo from '@/assets/portfolio/stackify.jpg';
import venioLogo from '@/assets/portfolio/venio.jpg';
import appsianLogo from '@/assets/portfolio/appsian.jpg';
import clearlyratedLogo from '@/assets/portfolio/clearlyrated.jpg';
import cleoLogo from '@/assets/portfolio/cleo.jpg';
import clientsavvyLogo from '@/assets/portfolio/clientsavvy.jpg';
import cloudmonixLogo from '@/assets/portfolio/cloudmonix.jpg';
import extolLogo from '@/assets/portfolio/extol.jpg';
import meshiqLogo from '@/assets/portfolio/meshiq.jpg';
import xpandionLogo from '@/assets/portfolio/xpandion.jpg';
type Company = {
  name: string;
  logo: string;
  tagline: string;
};
const currentInvestments: Company[] = [{
  name: 'Venio',
  logo: venioLogo,
  tagline: 'eDiscovery Software Platform'
}, {
  name: 'MeshIQ',
  logo: meshiqLogo,
  tagline: 'Intelligence From Integration'
}, {
  name: 'ClearlyRated',
  logo: clearlyratedLogo,
  tagline: 'Client Experience Platform'
}];
const priorInvestments: Company[] = [{
  name: 'Netreo',
  logo: netreoLogo,
  tagline: 'IT Network Monitoring Software'
}, {
  name: 'Appsian',
  logo: appsianLogo,
  tagline: 'PeopleSoft Security & UX/UI Solutions'
}, {
  name: 'Cleo',
  logo: cleoLogo,
  tagline: 'Integration Platform that Never Stops'
}];
const addons: Company[] = [{
  name: 'Stackify',
  logo: stackifyLogo,
  tagline: 'Acquired by Netreo – 2021'
}, {
  name: 'CloudMonix',
  logo: cloudmonixLogo,
  tagline: 'Acquired by Netreo – 2020'
}, {
  name: 'Extol',
  logo: extolLogo,
  tagline: 'Acquired by Cleo – 2016'
}, {
  name: 'Xpandion',
  logo: xpandionLogo,
  tagline: 'Acquired by Appsian – 2021'
}, {
  name: 'ClientSavvy',
  logo: clientsavvyLogo,
  tagline: 'Acquired by ClearlyRated – 2025'
}];
type ColumnType = 'current' | 'prior' | 'addon' | null;
export function PortfolioSection() {
  const [hoveredColumn, setHoveredColumn] = useState<ColumnType>(null);
  const [hoveredCompany, setHoveredCompany] = useState<Company | null>(null);
  const [mobileFilter, setMobileFilter] = useState<ColumnType>(null);
  const {
    ref,
    isVisible
  } = useScrollAnimation(0.85);

  const getMobileCompanies = () => {
    if (mobileFilter === 'current') return currentInvestments;
    if (mobileFilter === 'prior') return priorInvestments;
    if (mobileFilter === 'addon') return addons;
    return [...currentInvestments, ...priorInvestments, ...addons];
  };

  return <section id="portfolio" ref={ref} className="relative bg-black overflow-hidden site-section">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p
              className={`section-eyebrow mb-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >Our Portfolio</p>
            <h2
              className={`section-title mb-6 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Building Tomorrow's Leaders
            </h2>
            <p
              className={`section-body mb-8 hidden lg:block transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              We partner with exceptional B2B software companies to accelerate their growth. 
              Our portfolio spans current investments, successful exits, and strategic add-on acquisitions.
            </p>
            
            {/* Stats - Desktop hover, Mobile tap to filter */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center gap-4 cursor-pointer transition-opacity duration-300 hover:opacity-100" style={{
              opacity: hoveredColumn && hoveredColumn !== 'current' ? 0.5 : 1
            }} onMouseEnter={() => setHoveredColumn('current')} onMouseLeave={() => setHoveredColumn(null)}>
                <p className="text-3xl font-bold text-[#00FFFF]">{currentInvestments.length}</p>
                <p className="text-white/80 text-lg">Current Investments</p>
              </div>
              <div className="flex items-center gap-4 cursor-pointer transition-opacity duration-300 hover:opacity-100" style={{
              opacity: hoveredColumn && hoveredColumn !== 'prior' ? 0.5 : 1
            }} onMouseEnter={() => setHoveredColumn('prior')} onMouseLeave={() => setHoveredColumn(null)}>
                <p className="text-3xl font-bold text-white">{priorInvestments.length}</p>
                <p className="text-white/80 text-lg">Prior Investments</p>
              </div>
              <div className="flex items-center gap-4 cursor-pointer transition-opacity duration-300 hover:opacity-100" style={{
              opacity: hoveredColumn && hoveredColumn !== 'addon' ? 0.5 : 1
            }} onMouseEnter={() => setHoveredColumn('addon')} onMouseLeave={() => setHoveredColumn(null)}>
                <p className="text-3xl font-bold text-white/50">{addons.length}</p>
                <p className="text-white/80 text-lg">Add-ons</p>
              </div>
            </div>

            {/* Mobile Filter Tabs */}
            <div className="lg:hidden flex flex-col gap-2">
              <button
                onClick={() => setMobileFilter(mobileFilter === 'current' ? null : 'current')}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${
                  mobileFilter === 'current' 
                    ? 'bg-[#00FFFF] text-black' 
                    : 'bg-white/10 text-white/80 border border-white/20'
                }`}
              >
                <span className="text-lg font-bold">{currentInvestments.length}</span>
                <span>Current Investments</span>
              </button>
              <button
                onClick={() => setMobileFilter(mobileFilter === 'prior' ? null : 'prior')}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${
                  mobileFilter === 'prior' 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 text-white/80 border border-white/20'
                }`}
              >
                <span className="text-lg font-bold">{priorInvestments.length}</span>
                <span>Prior Investments</span>
              </button>
              <button
                onClick={() => setMobileFilter(mobileFilter === 'addon' ? null : 'addon')}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${
                  mobileFilter === 'addon' 
                    ? 'bg-white/70 text-black' 
                    : 'bg-white/10 text-white/80 border border-white/20'
                }`}
              >
                <span className="text-lg font-bold">{addons.length}</span>
                <span>Add-ons</span>
              </button>
            </div>
          </div>

          {/* Right Side - Three Column Layout (Desktop) / Horizontal Rows (Mobile) */}
          <div
            className={`hidden lg:flex justify-center items-stretch gap-2 md:gap-3 h-[500px] transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            {/* Prior - Left */}
            <LogoColumn title="Prior" companies={priorInvestments} color="primary" direction="up" columnType="prior" hoveredColumn={hoveredColumn} setHoveredColumn={setHoveredColumn} hoveredCompany={hoveredCompany} setHoveredCompany={setHoveredCompany} size="medium" />
            {/* Current - Middle (largest) */}
            <LogoColumn title="Current" companies={currentInvestments} color="teal" direction="down" columnType="current" hoveredColumn={hoveredColumn} setHoveredColumn={setHoveredColumn} hoveredCompany={hoveredCompany} setHoveredCompany={setHoveredCompany} size="large" />
            {/* Add-ons - Right */}
            <LogoColumn title="Add-ons" companies={addons} color="white" direction="up" columnType="addon" hoveredColumn={hoveredColumn} setHoveredColumn={setHoveredColumn} hoveredCompany={hoveredCompany} setHoveredCompany={setHoveredCompany} size="small" />
          </div>

          {/* Mobile Layout - Marquee style continuous scroll */}
          <div
            className={`lg:hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <MobileMarquee companies={getMobileCompanies()} key={mobileFilter || 'all'} />
          </div>
        </div>
      </div>
    </section>;
}
function LogoColumn({
  title,
  companies,
  color,
  direction,
  columnType,
  hoveredColumn,
  setHoveredColumn,
  hoveredCompany,
  setHoveredCompany,
  size
}: {
  title: string;
  companies: Company[];
  color: 'teal' | 'primary' | 'white';
  direction: 'up' | 'down';
  columnType: ColumnType;
  hoveredColumn: ColumnType;
  setHoveredColumn: (col: ColumnType) => void;
  hoveredCompany: Company | null;
  setHoveredCompany: (company: Company | null) => void;
  size: 'small' | 'medium' | 'large';
}) {
  const isHovered = hoveredColumn === columnType;
  const isOtherHovered = hoveredColumn !== null && hoveredColumn !== columnType;
  const colorClasses = {
    teal: {
      text: 'text-[#00FFFF]',
      glow: 'shadow-[0_0_40px_rgba(0,255,255,0.5)]'
    },
    primary: {
      text: 'text-white',
      glow: 'shadow-[0_0_40px_rgba(255,255,255,0.3)]'
    },
    white: {
      text: 'text-white/50',
      glow: 'shadow-[0_0_40px_rgba(255,255,255,0.15)]'
    }
  };
  const sizeClasses = {
    small: 'w-28 md:w-36',
    medium: 'w-32 md:w-40',
    large: 'w-40 md:w-52'
  };
  const styles = colorClasses[color];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipSide, setTooltipSide] = useState<'left' | 'right'>(columnType === 'addon' ? 'left' : 'right');

  useEffect(() => {
    if (!hoveredCompany || !isHovered) return;
    const el = tooltipRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 4;
    if (rect.right > vw - margin) {
      setTooltipSide('left');
    } else if (rect.left < margin) {
      setTooltipSide('right');
    }
  }, [hoveredCompany, isHovered]);

  // Create duplicated companies for scrolling effect
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  
  return <div ref={containerRef} className={`relative flex flex-col h-full
        ${sizeClasses[size]}
        ${isHovered ? `scale-105 z-10 ${styles.glow}` : 'scale-100'}
        ${isOtherHovered ? 'opacity-40 scale-95' : 'opacity-100'}
        bg-white/5 backdrop-blur-sm
        transition-all duration-500 ease-out
      `} onMouseEnter={() => setHoveredColumn(columnType)} onMouseLeave={() => {
    setHoveredColumn(null);
    setHoveredCompany(null);
  }}>
      {/* Column Label */}
      <div className="py-4 px-2 text-center">
        <h3 className={`font-semibold text-sm md:text-base ${styles.text}`}>{title}</h3>
      </div>

      {/* Scrolling Logo Container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Strong gradient masks - creates spotlight effect keeping center logos in focus */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Logo Trail - all logos full opacity, gradient handles the fade */}
        <div 
          className={`flex flex-col gap-5 py-4 ${direction === 'down' ? 'animate-scroll-down' : 'animate-scroll-up'}`} 
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
        >
          {duplicatedCompanies.map((company, index) => (
            <LogoCard 
              key={`${company.name}-${index}`} 
              company={company} 
              color={color} 
              isHovered={hoveredCompany?.name === company.name} 
              onHover={setHoveredCompany} 
              size={size}
            />
          ))}
        </div>
      </div>

      {/* Tooltip - rendered outside overflow container */}
      {hoveredCompany && isHovered && (
        <div ref={tooltipRef} className={`absolute top-1/2 -translate-y-1/2 ${tooltipSide === 'left' ? 'right-full mr-4' : 'left-full ml-4'} z-50 animate-fade-in pointer-events-none`}>
          <div className="bg-black border border-white/30 rounded-lg px-4 py-3 whitespace-nowrap shadow-2xl">
            <p className="text-white font-semibold text-sm">{hoveredCompany.name}</p>
            <p className="text-white/70 text-xs mt-1">{hoveredCompany.tagline}</p>
          </div>
        </div>
      )}
    </div>;
}
function LogoCard({
  company,
  color,
  isHovered,
  onHover,
  size
}: {
  company: Company;
  color: 'teal' | 'primary' | 'white';
  isHovered: boolean;
  onHover: (company: Company | null) => void;
  size: 'small' | 'medium' | 'large';
}) {
  const borderColors = {
    teal: 'border-teal',
    primary: 'border-primary',
    white: 'border-white/60'
  };
  const logoHeights = {
    small: 'h-10 md:h-12',
    medium: 'h-12 md:h-14',
    large: 'h-14 md:h-16'
  };
  return <div 
    className="mx-3 relative group cursor-pointer" 
    onMouseEnter={() => onHover(company)} 
    onMouseLeave={() => onHover(null)}
  >
      {/* Logo Container */}
      <div className={`bg-white p-2 border-2 transition-all duration-200
          ${isHovered ? `${borderColors[color]} shadow-lg scale-105` : 'border-transparent'}
        `}>
        <img src={company.logo} alt={company.name} className={`w-full object-contain ${logoHeights[size]}`} />
      </div>
    </div>;
}

// Mobile marquee - continuous horizontal scroll
function MobileMarquee({ companies }: { companies: Company[] }) {
  // Triple the companies for seamless loop
  const tripled = [...companies, ...companies, ...companies];
  
  return (
    <div className="relative overflow-hidden py-2">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-4"
        style={{
          animation: 'mobile-marquee 12s linear infinite',
          width: 'max-content'
        }}
      >
        {tripled.map((company, index) => (
          <div 
            key={`${company.name}-${index}`}
            className="flex-shrink-0 bg-white p-3 w-24 h-16 flex items-center justify-center"
          >
            <img 
              src={company.logo} 
              alt={company.name} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes mobile-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
