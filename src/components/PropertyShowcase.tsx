import elegantVilla from "@/assets/elegant-contemporary-villa.jpg";

export function PropertyShowcase() {
  return (
    <div className="relative">
      <div className="bg-background rounded-3xl overflow-hidden shadow-card-lg border border-border">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={elegantVilla}
            alt="Featured property showcase"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-bold text-primary">K8,500</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Premium Office Tower
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4">
            Level 15, Douglas Street, Port Moresby, NCD, PNG
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>350m²</span>
            <span>15th Floor</span>
            <span>20 Parking</span>
          </div>
        </div>
      </div>
    </div>
  );
}