import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

export function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="w-full bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-foreground">Vision Real Estate PNG</h1>

              <div className="hidden md:flex items-center space-x-6">
                <a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="#properties" onClick={(e) => handleScroll(e, "properties")} className="text-muted-foreground hover:text-foreground transition-colors">Properties</a>
                <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">+675 123 4567</span>
              <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}