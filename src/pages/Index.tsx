import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PropertySection } from "@/components/PropertySection";
import { StatsBar } from "@/components/StatsBar";
import { AgentCard } from "@/components/AgentCard";
import { AgentCarousel } from "@/components/AgentCarousel";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

// Import agent images
import agentMyriam from "@/assets/agent-myriam-ortega.jpg";
import agentDavid from "@/assets/agent-david-jones.jpg";
import agentMary from "@/assets/agent-mary-garcia.jpg";
import modernVillaPool from "@/assets/modern-white-villa-pool.jpg";

const Index = () => {
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
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <PropertySection />
      
      {/* Trusted Partner Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-3xl">
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
              <button className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Choose Your Property
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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
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

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
