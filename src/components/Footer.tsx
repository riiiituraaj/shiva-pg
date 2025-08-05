import { MapPin, Phone, Mail, MessageCircle, Clock, Heart } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/pnzr89", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+918638983093", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@shivamenshostel.com", "_self");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="heading-sm mb-6 text-primary-foreground">
              Shiva Men's Hostel
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Address</p>
                  <p className="text-sm text-background/80 leading-relaxed">
                    Opp. JEC Main Gate, Garmur<br />
                    Jorhat, Assam - 785007
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Phone</p>
                  <button 
                    onClick={handleCallClick}
                    className="text-sm text-background/80 hover:text-primary transition-smooth"
                  >
                    +91 98765 43210
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Email</p>
                  <button 
                    onClick={handleEmailClick}
                    className="text-sm text-background/80 hover:text-primary transition-smooth"
                  >
                    shivamenshostel@gmail.com
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-sm mb-6 text-primary-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-background/80 hover:text-primary transition-smooth"
              >
                Room Types & Pricing
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-sm text-background/80 hover:text-primary transition-smooth"
              >
                About Us
              </button>
              <button className="block text-sm text-background/80 hover:text-primary transition-smooth">
                Facilities
              </button>
              <button className="block text-sm text-background/80 hover:text-primary transition-smooth">
                Location
              </button>
              <button className="block text-sm text-background/80 hover:text-primary transition-smooth">
                Testimonials
              </button>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="heading-sm mb-6 text-primary-foreground">
              Get In Touch
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Visit Hours</p>
                  <p className="text-sm text-background/80">Mon-Sat: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">WhatsApp</p>
                  <p className="text-sm text-background/80">24/7 Available</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-smooth font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © 2024 Shiva Men's Hostel. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for JEC students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;