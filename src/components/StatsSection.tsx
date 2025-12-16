import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isVisible: boolean;
}

function StatItem({ value, prefix = '', suffix = '', label, isVisible }: StatItemProps) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="flex flex-col items-center text-center px-4 md:px-8">
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-2">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs md:text-sm text-secondary-foreground/70 capitalize">
        {label}
      </span>
    </div>
  );
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.6);

  const stats = [
    { value: 100, prefix: '$', suffix: 'M+', label: 'Aggregate funds raised' },
    { value: 11, suffix: '', label: 'Portfolio Companies' },
    { value: 250, suffix: '+', label: 'People' },
    { value: 4, suffix: '', label: 'Offices worldwide' },
  ];

  return (
    <section ref={ref} className="bg-black py-12 md:py-16 snap-start">
      <div className="container mx-auto px-6">
        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center py-4 border-b border-primary/20 last:border-b-0 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-r-primary/20"
            >
              <StatItem
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>

        {/* Desktop: equal-width grid with consistent separators */}
        <div className="hidden md:grid grid-cols-4 divide-x divide-primary/30">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center px-6 md:px-12 py-4 md:py-8">
              <StatItem
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
