import { Button } from "@/components/ui/button";
import { User, Users, Users2, Bed, Wifi, BookOpen } from "lucide-react";
import singleRoomImage from "@/assets/single-room.jpg";
import doubleRoomImage from "@/assets/double-room.jpg";

const RoomTypesSection = () => {
  const rooms = [
    {
      type: "Single Rooms",
      description: "For students who prefer privacy and space",
      image: singleRoomImage,
      icon: User,
      features: [
        "Cot, study table, chair, fan",
        "Attached bathroom",
        "Regular cleaning and maintenance",
        "High-speed Wi-Fi",
        "Peaceful study environment"
      ],
      popular: true
    },
    {
      type: "Double Sharing", 
      description: "Ideal for roommates or study buddies",
      image: doubleRoomImage,
      icon: Users,
      features: [
        "Cot, study table, chair, fan for each",
        "Shared or attached bathroom",
        "Regular cleaning and maintenance",
        "High-speed Wi-Fi",
        "Community-focused living"
      ],
      popular: false
    },
  
  ];

  const handleWhatsAppInquiry = (roomType: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${roomType} room at Shiva Men's Hostel. Could you provide more details?`);
    window.open(`https://wa.link/pnzr89?text=${message}`, "_blank");
  };

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            Choose Your Perfect Room
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you prefer privacy or enjoy company, we have comfortable accommodation 
            options to suit your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => {
            const IconComponent = room.icon;
            return (
              <div key={index} className={`relative bg-card rounded-2xl overflow-hidden gentle-shadow hover:soft-shadow transition-smooth ${room.popular ? 'ring-2 ring-primary/30' : ''}`}>
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={`${room.type} room at Shiva Men's Hostel`}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-sm text-card-foreground">{room.type}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{room.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-card-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={room.popular ? "warm" : "default"}
                    onClick={() => handleWhatsAppInquiry(room.type)}
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomTypesSection;