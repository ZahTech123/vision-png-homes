import officeBuildingImage from "@/assets/office-building.jpg";

export function PropertyShowcase() {
  return (
    <div className="relative">
      <div className="bg-background rounded-3xl overflow-hidden shadow-card-lg border border-border">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={officeBuildingImage}
            alt="Modern office building showcase"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-2">ANG Haus</h2>
          <p className="text-muted-foreground text-base mb-4 leading-relaxed">
            Conveniently situated in the heart of Town CBD, opposite the Crowne Hotel.
            With many available office suites for commercial leasing. See our listing below.
          </p>
        </div>
      </div>
    </div>
  );
}
