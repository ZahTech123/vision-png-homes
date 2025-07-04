interface StatsBarProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="flex gap-16 justify-start">
      {stats.map((stat, index) => (
        <div key={index} className="text-left">
          <div className="text-4xl font-bold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-muted-foreground text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}