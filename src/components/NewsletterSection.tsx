import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    if (email) {
      toast.success("You've been subscribed to our newsletter!");
      (e.currentTarget.elements[0] as HTMLInputElement).value = "";
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Stay Updated with Our Latest Properties
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new listings, exclusive deals, and market insights.
        </p>
        
        <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Enter your email address"
            className="bg-background text-foreground border-none"
          />
          <Button type="submit" variant="secondary" size="lg" className="whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}