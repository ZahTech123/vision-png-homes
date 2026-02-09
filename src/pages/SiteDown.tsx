import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SiteDown = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-destructive/10 p-4 rounded-full animate-pulse">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
          Site Currently Unavailable
        </h1>
        
        <p className="text-muted-foreground text-lg">
          Sorry, our site is down at the moment. We are currently working on some improvements and will be back shortly.
        </p>
        
        <div className="pt-4">
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto"
          >
            Check Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SiteDown;
