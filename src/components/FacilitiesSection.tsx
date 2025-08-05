import { 
  ChefHat, 
  Wifi, 
  Droplets, 
  BookOpen, 
  ShieldCheck, 
  Car,
  Utensils,
  Clock,
  Home
} from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: ChefHat,
      title: "Homemade Meals",
      description: "Nutritious and freshly prepared, served 3 times a day",
      color: "text-orange-600"
    },
    {
      icon: Wifi,
      title: "Wi-Fi",
      description: "Stay connected for classes, study, and leisure",
      color: "text-blue-600"
    },
    {
      icon: Droplets,
      title: "Filtered Drinking Water",
      description: "Clean, safe drinking water available throughout the day",
      color: "text-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Peaceful Study Environment",
      description: "Quiet, well-maintained spaces designed for focused studying",
      color: "text-green-600"
    },
    {
      icon: ShieldCheck,
      title: "Caretaker & Support Staff",
      description: "Always available to help with any needs or concerns",
      color: "text-purple-600"
    },
    {
      icon: Car,
      title: "CCTV Surveillance",
      description: "24/7 security monitoring for your safety and peace of mind",
      color: "text-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            Facilities That Make It Home
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            We've thoughtfully curated amenities to ensure your comfort, 
            convenience, and peace of mind during your stay with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 gentle-shadow hover:soft-shadow transition-smooth group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className={`w-6 h-6 ${facility.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                      {facility.title}
                    </h3>
                    <p className="body-md text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 soft-shadow max-w-3xl mx-auto">
            <h3 className="heading-sm text-card-foreground mb-4">
              Why Choose Shiva Men's Hostel?
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              All facilities are included in your stay to ensure a comfortable, 
              worry-free living experience. We take care of the details so you can 
              focus on what matters most - your studies and personal growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                All-Inclusive
              </span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                Student-Friendly
              </span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                Safe & Secure
              </span>
              <span className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                Homely Atmosphere
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;