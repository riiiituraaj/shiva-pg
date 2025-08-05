import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/pnzr89"_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+918638983093", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-foreground mb-6">
            Ready to Make It Your Home?
          </h2>
          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visit us anytime to see the rooms, meet our team, and experience the warm 
            atmosphere yourself. We're always happy to show you around and answer any questions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 gentle-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm text-card-foreground mb-2">WhatsApp Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quick response for instant queries and room availability
              </p>
              <Button variant="outline" size="sm" onClick={handleWhatsAppClick}>
                Chat Now
              </Button>
            </div>

            <div className="bg-card rounded-xl p-6 gentle-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm text-card-foreground mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drop by anytime to see the facilities and meet our team
              </p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </div>

            <div className="bg-card rounded-xl p-6 gentle-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm text-card-foreground mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our team for detailed information
              </p>
              <Button variant="outline" size="sm" onClick={handleCallClick}>
                Call Now
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 soft-shadow">
            <h3 className="heading-sm text-card-foreground mb-4">
              Special Offer for New Students
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Book your room this month! 
              Perfect for trying out our services before committing long-term.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="warm"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Room Now
              </Button>
              
              <Button 
                size="xl" 
                variant="cozy"
                onClick={handleCallClick}
              >
                Ask Questions First
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              * Offer valid for new residents only. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
