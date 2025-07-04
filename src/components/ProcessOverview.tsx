interface ProcessOverviewProps {
  steps: Array<{
    title: string;
  }>;
}

export function ProcessOverview({ steps }: ProcessOverviewProps) {
  return (
    <div className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}