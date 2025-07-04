export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Vision Real Estate PNG</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in finding exceptional properties across Papua New Guinea.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>+675 123 4567</p>
              <p>info@visionrealestate.pg</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Properties</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">For Rent</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Sale</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Luxury</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Property Guides</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Investment Tips</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Vision Real Estate PNG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}