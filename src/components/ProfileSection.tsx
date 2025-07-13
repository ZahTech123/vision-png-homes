import { Card, CardContent } from "@/components/ui/card";

interface Profile {
  name: string;
  role: string;
  imageSrc: string;
}

const profiles: Profile[] = [
  {
    name: "Ben Sarwom",
    role: "Property Manager",
    imageSrc: "/placeholder.svg",
  },
  {
    name: "Anna Doa",
    role: "Property Manager",
    imageSrc: "/placeholder.svg",
  },
  {
    name: "Johnon Tia",
    role: "CEO",
    imageSrc: "/placeholder.svg",
  },
];

export function ProfileSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The people behind Vision Real Estate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Card key={profile.name}>
              <CardContent className="p-6">
                <img
                  src={profile.imageSrc}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {profile.name}
                </h3>
                <p className="text-center text-muted-foreground">
                  {profile.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
