import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomTypesSection from "@/components/RoomTypesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoomTypesSection />
      <FacilitiesSection />
      <LocationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;