import { FilterBar } from "@/components/FilterBar";
import { PropertyCard } from "@/components/PropertyCard";

// Import property images
import elegantVilla from "@/assets/elegant-contemporary-villa.jpg";
import luxuryBeachfront from "@/assets/luxury-beachfront-retreat.jpg";
import modernMinimalist from "@/assets/modern-minimalist-home.jpg";
import opulentPenthouse from "@/assets/opulent-penthouse.jpg";
import stylishStudio from "@/assets/stylish-studio-apartment.jpg";
import classicColonial from "@/assets/classic-colonial-house.jpg";

export function PropertySection() {
  const propertyFilters = [
    { text: "All Properties", active: true },
    { text: "Office Buildings", active: false },
    { text: "Retail Spaces", active: false },
    { text: "Warehouses", active: false },
    { text: "Co-working Spaces", active: false },
    { text: "Industrial Sites", active: false }
  ];

  const properties = [
    {
      imageSrc: elegantVilla,
      price: "K21,666/month",
      period: "",
      title: "Level 1 Suite 2 - Premium Office Space",
      address: "Level 1, Suite 2, ANG Haus, opposite Crowne Hotel",
      beds: "260m²",
      bathrooms: "1st Floor",
      area: "external parking space"
    },
    {
      imageSrc: luxuryBeachfront,
      price: "K6,666",
      period: " per month",
      title: "Level 7 Suite 2 - Classic Office Space",
      address: "Level 7, Suite 2, ANG Haus, opposite Crowne Hotel",
      beds: "180m²",
      bathrooms: "7th Floor",
      area: "external parking"
    },
    {
      imageSrc: modernMinimalist,
      price: "K6,666",
      period: " per month",
      title: "Level 8 Suite 1 - Perfect Corporate Office",
      address: "Level 8, Suite 1, ANG Haus",
      beds: "80m²",
      bathrooms: "8th Floor",
      area: "external parking"
    },
    {
      imageSrc: opulentPenthouse,
      price: "K6,666",
      period: " per month",
      title: "Executive Business Suite",
      address: "Level 8, Suite 2, ANG Haus, Port Moresby CBD",
      beds: "80m²",
      bathrooms: "8th Floor",
      area: "external parking"
    },
    {
      imageSrc: stylishStudio,
      price: "K6,666",
      period: " per month",
      title: "Level 8 Suite 3 - Co-working Hub",
      address: "Level 8, Suite 3, ANG Haus, POM CBD",
      beds: "80m²",
      bathrooms: "8th Floor",
      area: "external parking"
    },
    {
      imageSrc: classicColonial,
      price: "K6,666",
      period: " per month",
      title: "Level 8 Suite 4 - Corporate office",
      address: "Level 8, Suite 4, ANG Haus, Ela Beach view",
      beds: "80m²",
      bathrooms: "8th Floor",
      area: "external parking"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our Latest <span className="text-primary">Commercial Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover premium commercial spaces with modern amenities and strategic locations across PNG.
          </p>
          
          <FilterBar filters={propertyFilters} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
