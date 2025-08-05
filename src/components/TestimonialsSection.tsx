import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arjun, 3rd Year Student",
      quote: "Best part? I roll out of bed and I'm in class in 2 minutes.",
      rating: 5
    },
    {
      name: "Rohan, 2nd Year Student", 
      quote: "Clean, peaceful, and the food reminds me of home.",
      rating: 5
    },
    {
      name: "Vikash, Final Year Student",
      quote: "I got a single room and it's perfect for focused study.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            What Our Students Say
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what current and former residents 
            have to say about their experience at Shiva Men's Hostel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 gentle-shadow hover:soft-shadow transition-smooth relative group"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="body-md text-card-foreground leading-relaxed italic font-heading">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 soft-shadow max-w-2xl mx-auto">
            <h3 className="heading-sm text-card-foreground mb-4">
              Join Our Happy Family
            </h3>
            <p className="body-md text-muted-foreground mb-6">
              Over 50+ students have called Shiva Men's Hostel their home away from home. 
              Be part of our growing family and create your own success story.
            </p>
            <div className="flex items-center justify-center gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;