import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/StatsBar";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const stats = [
    { value: "Seven", label: "Premium Spaces Available" },
    { value: "Flexible", label: "Customizable Office Sizes & Layouts" },
    { value: "24/7", label: "Security & Access" }
  ];

  const navigate = useNavigate();

const handleExploreClick = () => {
  navigate('/level-selection');
};

  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Find at ANG Haus <span className="text-primary">Your Perfect Commercial Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Connecting businesses with premium commercial properties in Port Moresby’s CBD.
              </p>
              <Button size="lg" className="text-lg px-8 py-3" onClick={handleExploreClick}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
