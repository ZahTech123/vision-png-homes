import { ArrowRight, Bed, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  imageSrc: string;
  price: string;
  period: string;
  title: string;
  address: string;
  beds: string;
  bathrooms: string;
  area: string;
}

export function PropertyCard({
  imageSrc,
  price,
  period,
  title,
  address,
  beds,
  bathrooms,
  area,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {address}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
            </svg>
            <span>{area}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}