import Hero from "@/modules/home/components/hero";
import CertificateSection from "@/modules/home/components/certificates";
import ServicesSection from "@/modules/home/components/services";
import TestimonialSection from "@/modules/home/components/testimonial";

const HomeTemplate = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <CertificateSection />
      <TestimonialSection />
    </div>
  );
};

export default HomeTemplate;
