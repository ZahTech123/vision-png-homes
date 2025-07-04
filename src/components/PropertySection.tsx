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

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our Latest <span className="text-primary">Property</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of premium properties available for rent and sale.
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