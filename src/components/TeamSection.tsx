import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin } from 'lucide-react';

import sumitImg from '@/assets/team/sumit-garg.jpg';
import aniketImg from '@/assets/team/aniket-kumar.jpg';
import andrewImg from '@/assets/team/andrew-sabin.jpg';
import devanshImg from '@/assets/team/devansh-goel.jpg';
import sreenathImg from '@/assets/team/sreenath.jpg';
import tusharImg from '@/assets/team/tushar.png';

const teamMembers = [
  {
    name: 'Sumit Garg',
    role: 'Founding Partner',
    image: sumitImg,
    bio: 'Tech investor/executive with ~20 years in industry. Experience leading software companies with operational, executive, finance and technical background.',
    education: 'MBA (UC Berkeley), B.Tech CS (IIT-BHU)',
    linkedin: 'https://www.linkedin.com/in/gargsumit/',
  },
  {
    name: 'Aniket Kumar',
    role: 'Vice President',
    image: aniketImg,
    bio: 'With SGP since 2018, works across investment evaluation, due diligence, and portfolio management. Previously at PE firm and as software engineer.',
    education: 'MBA (University of Chicago)',
    linkedin: 'https://www.linkedin.com/in/aniket-kumar-/',
  },
  {
    name: 'Andrew Sabin',
    role: 'Vice President',
    image: andrewImg,
    bio: 'Joined SGP in 2024; works on investment analysis, due diligence, and supporting portfolio companies. Previously at Updata Partners, Capstone, BlackRock.',
    education: '',
    linkedin: 'https://www.linkedin.com/in/andrew-sabin/',
  },
  {
    name: 'Devansh Goel',
    role: 'Portfolio Operations Associate',
    image: devanshImg,
    bio: 'Supports growth of portfolio companies, bringing prior experience in strategy, fundraising and consulting.',
    education: 'MBA (HKUST)',
    linkedin: 'https://www.linkedin.com/in/goeldevansh',
  },
  {
    name: 'Sreenath S',
    role: 'Manager, Business Development',
    image: sreenathImg,
    bio: 'Responsible for generating proprietary deal flow, sector research, executive engagement. Background at Kingfish Group, GLG, Morgan Stanley.',
    education: '',
    linkedin: 'https://www.linkedin.com/in/sreenathsajeev/',
  },
  {
    name: 'Tushar Shahani',
    role: 'Business Development Analyst',
    image: tusharImg,
    bio: 'Focus on sourcing and evaluating startups, deal flow, and early-stage investments. Founded a live-streaming commerce startup, worked at VC firms.',
    education: '',
    linkedin: 'https://www.linkedin.com/in/tusharshahani19/',
  },
];

// Team Card with Pop on Hover
function PopCard({ 
  member, 
  isHovered, 
  onHover 
}: { 
  member: typeof teamMembers[0]; 
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <div
      className="relative cursor-pointer"
      style={{
        zIndex: isHovered ? 50 : 1,
        width: isHovered ? '280px' : '200px',
        transition: 'width 400ms cubic-bezier(0.4, 0, 0.2, 1), z-index 0ms',
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div 
        className={`relative overflow-hidden bg-gradient-to-b from-[#0c1c3d] to-[#081428] h-full ${
          isHovered ? 'shadow-2xl shadow-[#1cc8e0]/30' : ''
        }`}
        style={{
          transition: 'box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c3d] via-[#0c1c3d]/40 to-transparent z-10" />
          
          {isHovered && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1cc8e0]/15 to-transparent" />
            </div>
          )}
          
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          
          {/* LinkedIn button */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-30 p-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-[#1cc8e0] hover:border-[#1cc8e0]"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 300ms ease, background-color 200ms ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 
              className="font-bold text-white mb-1"
              style={{
                fontSize: isHovered ? '1.125rem' : '0.875rem',
                transition: 'font-size 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {member.name}
            </h3>
            <p 
              className="text-[#1cc8e0] font-medium"
              style={{
                fontSize: isHovered ? '0.875rem' : '0.75rem',
                transition: 'font-size 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {member.role}
            </p>
            {/* Details shown on hover */}
            <div 
              className="overflow-hidden"
              style={{
                maxHeight: isHovered ? '128px' : '0',
                marginTop: isHovered ? '0.75rem' : '0',
                opacity: isHovered ? 1 : 0,
                transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), margin-top 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
              }}
            >
              <p className="text-white/70 text-xs leading-relaxed">{member.bio}</p>
              {member.education && (
                <p className="text-white/50 text-xs mt-2 italic">{member.education}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Border */}
      <div 
        className="absolute inset-0 border pointer-events-none"
        style={{
          borderColor: isHovered ? 'rgba(28, 200, 224, 0.5)' : 'rgba(255, 255, 255, 0.1)',
          transition: 'border-color 300ms ease',
        }}
      />
      
      {/* Glow effect when hovered */}
      {isHovered && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#1cc8e0]/30 blur-xl" />
      )}
    </div>
  );
}

export function TeamSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
      ref={ref}
      className="relative bg-navy py-20 md:py-28 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#1cc8e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#1cc8e0]/3 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1cc8e0 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16 px-6">
            <p className="text-[#1cc8e0] font-medium tracking-wider uppercase text-sm mb-4">
              The People Behind SGP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A diverse team of investors, operators, and technologists united by a shared 
              passion for building exceptional software companies.
            </p>
          </div>

          {/* Team Cards - Desktop */}
          <div className="hidden md:flex justify-center items-center px-6">
            <div className="flex items-center justify-center py-8">
              {teamMembers.map((member, index) => (
                <PopCard
                  key={member.name}
                  member={member}
                  isHovered={hoveredIndex === index}
                  onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
                />
              ))}
            </div>
          </div>

          {/* Team Cards - Mobile with tap to expand */}
          <div className="md:hidden px-4">
            <div className="grid grid-cols-2 gap-3">
              {teamMembers.map((member, index) => {
                const isExpanded = expandedMobileIndex === index;
                  return (
                    <div 
                      key={member.name}
                      className={`relative overflow-hidden bg-gradient-to-b from-[#0c1c3d] to-[#081428] border ${
                        isExpanded ? 'border-[#1cc8e0]/50 col-span-2' : 'border-white/10'
                      }`}
                      style={{
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onClick={() => setExpandedMobileIndex(isExpanded ? null : index)}
                    >
                      <div className={`flex ${isExpanded ? 'flex-row' : 'flex-col'}`} style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                        <div 
                          className={`relative overflow-hidden ${isExpanded ? 'w-1/3 aspect-square' : 'aspect-[3/4]'}`}
                          style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c3d] via-[#0c1c3d]/40 to-transparent z-10" />
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            style={{ 
                              transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
                            }}
                          />
                          <div 
                            className="absolute bottom-0 left-0 right-0 p-3 z-20"
                            style={{
                              opacity: isExpanded ? 0 : 1,
                              transition: 'opacity 0.3s ease',
                            }}
                          >
                            <h3 className="font-bold text-white text-xs mb-0.5">{member.name}</h3>
                            <p className="text-[#1cc8e0] text-[10px] font-medium">{member.role}</p>
                          </div>
                        </div>
                      
                        <div 
                          className="flex-1 p-4 flex flex-col justify-between"
                          style={{
                            opacity: isExpanded ? 1 : 0,
                            transform: isExpanded ? 'translateX(0)' : 'translateX(20px)',
                            transition: 'opacity 0.4s ease 0.1s, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
                            display: isExpanded ? 'flex' : 'none',
                          }}
                        >
                          <div>
                            <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                            <p className="text-[#1cc8e0] text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-white/70 text-xs leading-relaxed">{member.bio}</p>
                            {member.education && (
                              <p className="text-white/50 text-xs mt-2 italic">{member.education}</p>
                            )}
                          </div>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-[#1cc8e0] text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>View LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    
                    {!isExpanded && (
                      <div className="absolute bottom-2 right-2 z-20">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-white text-xs">+</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
