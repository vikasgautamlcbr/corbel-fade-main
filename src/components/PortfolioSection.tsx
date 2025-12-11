import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type Investment = {
  name: string;
  logo?: string;
  blurb?: string;
};

const currentInvestments: Investment[] = [
  { name: 'Company Alpha', logo: '/placeholder.svg', blurb: 'Vertical SaaS' },
  { name: 'Company Beta', logo: '/placeholder.svg', blurb: 'Data Platform' },
  { name: 'Company Gamma', logo: '/placeholder.svg', blurb: 'Dev Tools' },
  { name: 'Company Delta', logo: '/placeholder.svg', blurb: 'FinTech' },
];

const priorInvestments: Investment[] = [
  { name: 'Company Echo', logo: '/placeholder.svg', blurb: 'Security' },
  { name: 'Company Foxtrot', logo: '/placeholder.svg', blurb: 'Analytics' },
  { name: 'Company Hotel', logo: '/placeholder.svg', blurb: 'ERP' },
  { name: 'Company Indigo', logo: '/placeholder.svg', blurb: 'eCommerce' },
];

function InvestmentCard({ name, logo, blurb }: Investment) {
  return (
    <Card className="bg-card/80">
      <CardHeader className="items-center text-center">
        {logo && (
          <img src={logo} alt={name} className="h-12 w-12 rounded object-contain mb-3" />
        )}
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      {blurb && (
        <CardContent className="text-center">
          <p className="text-muted-foreground text-sm">{blurb}</p>
        </CardContent>
      )}
    </Card>
  );
}

export function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="portfolio" ref={ref} className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wider uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Focused on Growth</h2>
          </div>

          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Current Investments</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {currentInvestments.map((inv, idx) => (
                <div
                  key={inv.name}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <InvestmentCard {...inv} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Prior Investments</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {priorInvestments.map((inv, idx) => (
                <div
                  key={inv.name}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <InvestmentCard {...inv} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
