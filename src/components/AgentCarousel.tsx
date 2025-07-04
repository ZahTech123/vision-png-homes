import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentCard } from "./AgentCard";

interface Agent {
  name: string;
  title: string;
  info: string;
  imageSrc: string;
}

interface AgentCarouselProps {
  agents: Agent[];
}

export function AgentCarousel({ agents }: AgentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAgent = () => {
    setCurrentIndex((prev) => (prev + 1) % agents.length);
  };

  const prevAgent = () => {
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <AgentCard
          imageSrc={agents[currentIndex].imageSrc}
          name={agents[currentIndex].name}
          title={agents[currentIndex].title}
          address={agents[currentIndex].info}
        />
      </div>
      
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevAgent}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextAgent}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center gap-2">
        {agents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}