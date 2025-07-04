import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-foreground">Vision Real Estate PNG</h1>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Properties</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">+675 123 4567</span>
            <Button variant="outline" size="sm">Contact Us</Button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}