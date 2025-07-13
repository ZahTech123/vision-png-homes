import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  filters: Array<{
    text: string;
    active?: boolean;
  }>;
  onFilterClick: (filterText: string) => void;
  activeFilter: string;
}

export function FilterBar({ filters, onFilterClick, activeFilter }: FilterBarProps) {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {filters.map((filter) => (
        <Button
          key={filter.text}
          variant={filter.text === activeFilter ? "default" : "secondary"}
          onClick={() => onFilterClick(filter.text)}
          className="rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105"
        >
          {filter.text}
        </Button>
      ))}
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full h-10 w-10 hover:scale-105 transition-all"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}