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
  const { ref, isVisible } = useScrollAnimation(0.3);

  const stats = [
    { value: 100, prefix: '$', suffix: 'M+', label: 'Aggregate funds raised' },
    { value: 11, suffix: '', label: 'Portfolio Companies' },
    { value: 250, suffix: '+', label: 'People' },
    { value: 4, suffix: '', label: 'Offices worldwide' },
  ];

  return (
    <section ref={ref} className="bg-navy-light py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center ${
                index < stats.length - 1
                  ? 'border-r border-primary/50 pr-6 md:pr-12'
                  : ''
              } ${index > 0 ? 'pl-6 md:pl-12' : ''} py-4 md:py-0`}
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
      </div>
    </section>
  );
}
