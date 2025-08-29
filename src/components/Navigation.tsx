
import logo from "@/assets/VREL_Logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src={logo} alt="Vision Real Estate Logo" className="h-10 w-auto mr-3" />
            <h1 className="text-xl font-bold text-foreground">Vision Real Estate PNG</h1>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/level-selection" className="text-muted-foreground hover:text-foreground transition-colors">Properties</a>
              <a href="/about" onClick={() => navigate('/about')} className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">+675 320 0664</span>
            <a href="mailto:sales@visionrealestatepng.com">
              <Button variant="outline" size="sm">Contact Us</Button>
            </a>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
