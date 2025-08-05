import { Heart, Shield, Home } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-foreground mb-8">
            About Shiva Men's Hostel
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Comfort</h3>
              <p className="body-md text-muted-foreground">
                We believe in providing a warm, comfortable environment where you feel at home away from home.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Simplicity</h3>
              <p className="body-md text-muted-foreground">
                Clean, organized living spaces with all essential amenities for a hassle-free stay.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Proximity</h3>
              <p className="body-md text-muted-foreground">
                Located right opposite JEC main gate for ultimate convenience and easy access to college.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 soft-shadow">
            <p className="body-lg text-card-foreground leading-relaxed italic font-heading">
              "At Shiva Men's Hostel, we understand that being away from home can be challenging. 
              That's why we've created a space that combines the comfort of home with the convenience 
              of modern living. Our goal is simple: to provide JEC students with a peaceful, 
              supportive environment where they can thrive academically and personally."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;