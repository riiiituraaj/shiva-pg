import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/front -1.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/pnzr89", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Shiva Men's Hostel - Your Second Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span className="body-md font-medium">Opposite JEC Main Gate, Garmur, Jorhat, Assam</span>
          </div>
          
          <h1 className="heading-xl text-white mb-6 leading-tight">
            Shiva Men's Hostel
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light italic font-heading">
            Your second home, right opposite JEC, Jorhat
          </p>
          
          <p className="body-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Shiva Men's Hostel is a calm, student-friendly PG located just across the main gate of 
            Jorhat Engineering College. Designed to offer a homely atmosphere with all essential 
            facilities, it's the perfect place for students who value comfort, quiet, and proximity to college life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="warm"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Us Now
            </Button>
            
            <Button 
              size="xl" 
              variant="cozy"
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Rooms
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;