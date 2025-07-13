import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/StatsBar";
import { SearchForm } from "@/components/SearchForm";
import { PropertyShowcase } from "@/components/PropertyShowcase";

export function HeroSection() {
  const stats = [
    { value: "500+", label: "Business Clients" },
    { value: "250+", label: "Commercial Properties" },
    { value: "1200+", label: "Successful Leases" }
  ];

  const handleScrollToProperties = () => {
    const element = document.getElementById("properties");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Find Your Perfect <span className="text-primary">Commercial Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Connecting businesses with premium commercial properties across Papua New Guinea.
              </p>
              <Button size="lg" className="text-lg px-8 py-3" onClick={handleScrollToProperties}>
                Explore Properties
              </Button>
            </div>
            
            <div className="pt-8">
              <StatsBar stats={stats} />
            </div>
          </div>
          
          {/* Right Column - Property Preview */}
          <div className="relative">
            <PropertyShowcase />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}