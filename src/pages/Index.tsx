import { Button } from "@/components/ui/button";
import { ProcessOverview } from "@/components/ProcessOverview";
import { FilterBar } from "@/components/FilterBar";
import { PropertyCard } from "@/components/PropertyCard";
import { StatsBar } from "@/components/StatsBar";
import { AgentCard } from "@/components/AgentCard";
import { AgentCarousel } from "@/components/AgentCarousel";

// Import property images
import elegantVilla from "@/assets/elegant-contemporary-villa.jpg";
import luxuryBeachfront from "@/assets/luxury-beachfront-retreat.jpg";
import modernMinimalist from "@/assets/modern-minimalist-home.jpg";
import opulentPenthouse from "@/assets/opulent-penthouse.jpg";
import stylishStudio from "@/assets/stylish-studio-apartment.jpg";
import classicColonial from "@/assets/classic-colonial-house.jpg";
import modernVillaPool from "@/assets/modern-white-villa-pool.jpg";

// Import agent images
import agentMyriam from "@/assets/agent-myriam-ortega.jpg";
import agentDavid from "@/assets/agent-david-jones.jpg";
import agentMary from "@/assets/agent-mary-garcia.jpg";

const Index = () => {
  const processSteps = [
    { title: "Find Your Perfect Home Tailored To Your Needs." },
    { title: "Complete Your Information To Secure Check-In Availability." },
    { title: "Complete Your Transaction For Instant Confirmation." }
  ];

  const propertyFilters = [
    { text: "All Type", active: true },
    { text: "Apartments/Flats", active: false },
    { text: "Villas", active: false },
    { text: "Duplex Homes", active: false },
    { text: "Penthouse Suites", active: false },
    { text: "Bungalows", active: false },
    { text: "Farmhouses", active: false }
  ];

  const properties = [
    {
      imageSrc: elegantVilla,
      price: "$ 3,499.00",
      period: "/month",
      title: "Elegant Contemporary Villa with Garden",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    },
    {
      imageSrc: luxuryBeachfront,
      price: "$ 3,499.00",
      period: "/month",
      title: "Luxury Beachfront Retreat with Terrace",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    },
    {
      imageSrc: modernMinimalist,
      price: "$ 3,499.00",
      period: "/month",
      title: "Modern Minimalist Home with Smart Features",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    },
    {
      imageSrc: opulentPenthouse,
      price: "$ 3,499.00",
      period: "/month",
      title: "Opulent Penthouse with Rooftop Deck",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    },
    {
      imageSrc: stylishStudio,
      price: "$ 3,499.00",
      period: "/month",
      title: "Stylish Studio Apartment with Balcony",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    },
    {
      imageSrc: classicColonial,
      price: "$ 3,499.00",
      period: "/month",
      title: "Classic Colonial House with Spacious Porch",
      address: "400 Ventura Pl, San Ramon, CA 94583, USA",
      beds: "3 Beds",
      bathrooms: "3 Bathrooms",
      area: "68m²"
    }
  ];

  const stats = [
    { value: "200k", label: "Causal Related" },
    { value: "65k", label: "Happy Customers" },
    { value: "150k", label: "Properties" }
  ];

  const agents = [
    { 
      name: "Myriam Ortega", 
      title: "Agents", 
      info: "2648 Don Jackson Lane Nas...", 
      imageSrc: agentMyriam 
    },
    { 
      name: "David Jones", 
      title: "Agents", 
      info: "2648 Don Jackson Lane Nas...", 
      imageSrc: agentDavid 
    },
    { 
      name: "Mary Garcia", 
      title: "Agents", 
      info: "2648 Don Jackson Lane Nas...", 
      imageSrc: agentMary 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground">Vision Real Estate PNG</h1>
        </div>
      </header>

      {/* Process Overview */}
      <ProcessOverview steps={processSteps} />

      {/* Find Your Dream Property Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-8">
            Find Your Dream Property
          </h2>
          
          <div className="mb-12">
            <FilterBar filters={propertyFilters} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-foreground mb-4 max-w-3xl">
              Your Trusted Partner in Elite Property Brokerage
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
                Showcasing Premium Properties to Discriminating Buyers Globally
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <Button variant="secondary" size="lg" className="font-semibold">
                Choose Your Property
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Agents Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative bg-card p-8 rounded-xl shadow-card-lg">
                <div className="inline-block bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full mb-4">
                  Our Agent
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Your Gateway to Exceptional Properties Around the World
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-sm">
                  Discover a different kind of real estate journey, where exceptional properties meet unmatched service.
                </p>
                <div className="max-w-xs">
                  <AgentCard
                    imageSrc={agentMyriam}
                    name="Myriam Ortega"
                    title="Agents"
                    address="2648 Don Jackson Lane Nas..."
                    showContactButton={true}
                  />
                </div>
                <img 
                  src={agentMyriam}
                  alt="Real estate agent Myriam Ortega"
                  className="absolute right-4 bottom-0 w-32 h-auto opacity-20"
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h2 className="text-5xl font-bold text-foreground mb-4">
                Contact With Our Top Agents
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our expert real estate agents are here to guide you every step of the way.
              </p>
              <AgentCarousel agents={agents} />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-8">
            Our Recent Projects
          </h2>
          <div className="text-center text-muted-foreground py-12">
            <p className="text-lg">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Vision Real Estate PNG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
