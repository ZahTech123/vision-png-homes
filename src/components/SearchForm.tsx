import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchForm() {
  return (
    <div className="bg-background rounded-2xl shadow-card-lg p-6 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Select Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="office">Office Building</SelectItem>
              <SelectItem value="retail">Retail Space</SelectItem>
              <SelectItem value="warehouse">Warehouse</SelectItem>
              <SelectItem value="coworking">Co-working Space</SelectItem>
              <SelectItem value="industrial">Industrial Site</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Location
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="port-moresby">Port Moresby</SelectItem>
              <SelectItem value="lae">Lae</SelectItem>
              <SelectItem value="mount-hagen">Mount Hagen</SelectItem>
              <SelectItem value="madang">Madang</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button size="lg" className="w-full">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}