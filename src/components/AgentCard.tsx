import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AgentCardProps {
  imageSrc: string;
  name: string;
  title: string;
  address: string;
  showContactButton?: boolean;
  onContactClick?: (agentName: string) => void;
}

export function AgentCard({ imageSrc, name, title, address, showContactButton = false, onContactClick }: AgentCardProps) {
  return (
    <Card className="shadow-card hover:shadow-card-lg transition-all duration-300 max-w-xs">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {address}
        </p>
        {showContactButton && (
          <Button variant="outline" size="sm" className="w-full" onClick={() => onContactClick?.(name)}>
            Contact Me
          </Button>
        )}
      </CardContent>
    </Card>
  );
}