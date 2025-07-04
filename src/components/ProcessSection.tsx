export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Find Your Perfect Property",
      description: "Browse through our curated selection of premium properties tailored to your needs."
    },
    {
      number: "02", 
      title: "Complete Your Information",
      description: "Provide your details to secure availability and schedule viewings."
    },
    {
      number: "03",
      title: "Instant Confirmation",
      description: "Complete your transaction and receive instant confirmation for your property."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything Should be <span className="text-primary">This Easy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes finding and securing your dream property simple and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}