import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  filters: Array<{
    text: string;
    active?: boolean;
  }>;
}

export function FilterBar({ filters: initialFilters }: FilterBarProps) {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterClick = (index: number) => {
    setFilters(prev => prev.map((filter, i) => ({
      ...filter,
      active: i === index
    })));
  };

  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {filters.map((filter, index) => (
        <Button
          key={filter.text}
          variant={filter.active ? "default" : "secondary"}
          onClick={() => handleFilterClick(index)}
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