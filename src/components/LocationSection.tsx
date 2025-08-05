import { MapPin, Clock, Navigation, Bus } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            Perfect Location Advantage
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Our strategic location right opposite JEC main gate offers unmatched convenience 
            for students, saving time and making daily commute effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Location Benefits */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="heading-sm text-foreground mb-2">
                  Right Opposite JEC Main Gate
                </h3>
                <p className="body-md text-muted-foreground">
                  Less than a 2-minute walk to college campus. No more rushing or worrying about being late for classes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="heading-sm text-foreground mb-2">
                  Save Time, Focus on Studies
                </h3>
                <p className="body-md text-muted-foreground">
                  Extra hours of sleep and study time. Quick access means you can even come back during breaks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="heading-sm text-foreground mb-2">
                  Easy Access to City Center
                </h3>
                <p className="body-md text-muted-foreground">
                  Nearby access to grocery shops, pharmacies, printing services, tea stalls, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bus className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="heading-sm text-foreground mb-2">
                  Public Transport Hub
                </h3>
                <p className="body-md text-muted-foreground">
                  Multiple bus routes and auto-rickshaw stands nearby for easy travel to other parts of the city.
                </p>
              </div>
            </div>
          </div>

          {/* Map/Location Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 soft-shadow">
              <div className="text-center mb-6">
                <h3 className="heading-sm text-card-foreground mb-2">Our Address</h3>
                <p className="body-md text-muted-foreground">
                  Shiva Men's Hostel<br />
                  Opp. JEC Main Gate, Garmur<br />
                  Jorhat, Assam - 785007
                </p>
              </div>
              
              {/* Simple visual representation */}
              <div className="relative bg-accent/30 rounded-xl p-6 h-64">
                <div className="absolute inset-6 bg-gradient-to-br from-primary/20 to-accent/40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 soft-shadow">
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Shiva Men's Hostel</p>
                    <p className="text-xs text-muted-foreground mt-1">Opposite JEC Gate</p>
                  </div>
                </div>
                
                {/* JEC indicator */}
                <div className="absolute bottom-4 right-4 bg-card rounded-lg px-3 py-2 gentle-shadow">
                  <p className="text-xs font-medium text-card-foreground">JEC Main Gate</p>
                  <p className="text-xs text-muted-foreground">2 min walk</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-accent/20 rounded-lg p-3">
                  <p className="text-lg font-bold text-primary">2 min</p>
                  <p className="text-xs text-muted-foreground">Walk to College</p>
                </div>
                <div className="bg-accent/20 rounded-lg p-3">
                  <p className="text-lg font-bold text-primary">5 min</p>
                  <p className="text-xs text-muted-foreground">To City Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;