import { useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const propertyFilters = [
    { text: "All Properties" },
    { text: "Office Buildings" },
    { text: "Retail Spaces" },
    { text: "Warehouses" },
    { text: "Co-working Spaces" },
    { text: "Industrial Sites" }
  ];

  const allProperties = [
    {
      imageSrc: elegantVilla,
      price: "K 8,500",
      period: "/month",
      title: "Premium Office Tower",
      address: "Level 15, Douglas Street, Port Moresby, NCD",
      beds: "350m²",
      bathrooms: "15th Floor",
      area: "20 Parking",
      type: "Office Buildings",
    },
    {
      imageSrc: luxuryBeachfront,
      price: "K 6,800",
      period: "/month",
      title: "Retail Shopping Complex",
      address: "Milne Bay Road, Port Moresby, NCD",
      beds: "200m²",
      bathrooms: "Street Level",
      area: "10 Parking",
      type: "Retail Spaces",
    },
    {
      imageSrc: modernMinimalist,
      price: "K 12,500",
      period: "/month",
      title: "Modern Corporate Center",
      address: "Waigani Drive, Port Moresby, NCD",
      beds: "280m²",
      bathrooms: "Ground Floor",
      area: "15 Parking",
      type: "Office Buildings",
    },
    {
      imageSrc: opulentPenthouse,
      price: "K 15,000",
      period: "/month",
      title: "Executive Business Suite",
      address: "Champion Parade, Port Moresby, NCD",
      beds: "450m²",
      bathrooms: "Top Floor",
      area: "25 Parking",
      type: "Office Buildings",
    },
    {
      imageSrc: stylishStudio,
      price: "K 4,200",
      period: "/month",
      title: "Co-working Hub",
      address: "Ela Beach Road, Port Moresby, NCD",
      beds: "150m²",
      bathrooms: "Open Plan",
      area: "8 Parking",
      type: "Co-working Spaces",
    },
    {
      imageSrc: classicColonial,
      price: "K 18,000",
      period: "/month",
      title: "Industrial Warehouse",
      address: "Taurama Road, Port Moresby, NCD",
      beds: "800m²",
      bathrooms: "High Ceiling",
      area: "40 Parking",
      type: "Industrial Sites",
    }
  ];

  const filteredProperties = activeFilter === "All Properties"
    ? allProperties
    : allProperties.filter(property => property.type === activeFilter);

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
          
          <FilterBar
            filters={propertyFilters}
            onFilterClick={setActiveFilter}
            activeFilter={activeFilter}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}