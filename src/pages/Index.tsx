import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PropertySection } from "@/components/PropertySection";
import { StatsBar } from "@/components/StatsBar";
import { AgentCard } from "@/components/AgentCard";
import { AgentCarousel } from "@/components/AgentCarousel";
import { NewsletterSection } from "@/components/NewsletterSection";
import { useEffect } from 'react';
import { Footer } from "@/components/Footer";

// Import agent images
import agentMyriam from "@/assets/agent-myriam-ortega.jpg";
import agentDavid from "@/assets/agent-david-jones.jpg";
import agentMary from "@/assets/agent-mary-garcia.jpg";
import modernVillaPool from "@/assets/modern-white-villa-pool.jpg";

const Index = () => {
  const stats = [
    { value: "Many", label: "Exclusive Vacancies at ANG Haus" },
    { value: "Grade A", label: "Commercial Office Standards" },
    { value: "High", label: "Tenant Retention & Demand" }
  ];

  const agents = [
    { 
      name: "Anna Doa", 
      title: "Commercial Property Specialist", 
      info: "Ground Floor, ANG Haus, Opposite Crowne Hotel, Port Moresby CBD", 
      imageSrc: agentMyriam 
    },
    { 
      name: "David Jones", 
      title: "Office Space Expert", 
      info: "Champion Parade, Port Moresby", 
      imageSrc: agentDavid 
    },
    { 
      name: "Mary Garcia", 
      title: "Retail & Industrial Specialist", 
      info: "Waigani Drive, Port Moresby", 
      imageSrc: agentMary 
    }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <PropertySection />
      
      {/* Trusted Partner Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-3xl">
              Your Trusted Partner in Commercial Real Estate
            </h2>
            <StatsBar stats={stats} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={modernVillaPool}
                alt="Modern white villa with a swimming pool"
                className="w-full rounded-xl shadow-card-lg"
              />
            </div>
            
            <div className="bg-primary text-primary-foreground p-12 rounded-xl">
              <h3 className="text-3xl font-bold mb-4">
                Connecting Businesses with Premium Commercial Spaces Across PNG
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                We specialize in commercial real estate solutions that drive business success. From modern office towers 
                in Port Moresby's CBD to strategic retail locations and industrial facilities, we help businesses 
                find the perfect space to grow and thrive in Papua New Guinea's dynamic market.
              </p>
              <button className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Find Commercial Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Agents Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative bg-card p-8 rounded-xl shadow-card-lg">
                <div className="inline-block bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full mb-4">
                  Our Agent
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Your Gateway to Premium Commercial Spaces in PNG
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-sm">
                  Experience exceptional commercial real estate service tailored to your business needs across Papua New Guinea.
                </p>
                <div className="max-w-xs">
                  <AgentCard
                    imageSrc={agentMyriam}
                    name="Anna Doa"
                    title="Commercial Property Specialist"
                    address="Ground Floor, ANG Haus, Opposite Crowne Hotel, Port Moresby CBD"
                    showContactButton={true}
                  />
                </div>
                <img 
                  src={agentMyriam}
                  alt="Real estate agent Anna Doa"
                  className="absolute right-4 bottom-0 w-32 h-auto opacity-20"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Contact Our Commercial Specialists
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our expert commercial real estate specialists are ready to help you find the perfect business space.
              </p>
              <AgentCarousel agents={agents} />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
