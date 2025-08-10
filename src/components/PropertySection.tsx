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
      price: "K 6,666.00",
      period: "/month",
      title: "Premium Office Space",
      address: "Level 7, Suite 3, ANG Haus, opposite Crowne Hotel",
      beds: "180m²",
      bathrooms: "7th Floor",
      area: "external parking space"
    },
    {
      imageSrc: luxuryBeachfront,
      price: "K6,660",
      period: "/month",
      title: "Classic boardroom",
      address: "Level 7, ANG Haus, Opposite Crowne Hotel",
      beds: "200m²",
      bathrooms: "Street Level",
      area: "10 Parking"
    },
    {
      imageSrc: modernMinimalist,
      price: "K6,000.00",
      period: "/month",
      title: "Perfect Corporate Office",
      address: "Level7, Suite 1, ANG Haus, Port Moresby CBD",
      beds: "280m²",
      bathrooms: "Ground Floor",
      area: "15 Parking"
    },
    {
      imageSrc: opulentPenthouse,
      price: "K 15,000",
      period: "/month",
      title: "Executive Business Suite",
      address: "Champion Parade, Port Moresby, NCD",
      beds: "450m²",
      bathrooms: "Top Floor",
      area: "25 Parking"
    },
    {
      imageSrc: stylishStudio,
      price: "K 4,200",
      period: "/month",
      title: "Co-working Hub",
      address: "Ela Beach Road, Port Moresby, NCD",
      beds: "150m²",
      bathrooms: "Open Plan",
      area: "8 Parking"
    },
    {
      imageSrc: classicColonial,
      price: "K 18,000",
      period: "/month",
      title: "Industrial Warehouse",
      address: "Taurama Road, Port Moresby, NCD",
      beds: "800m²",
      bathrooms: "High Ceiling",
      area: "40 Parking"
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