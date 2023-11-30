import Hero from "@/modules/home/components/hero";
import CertificateSection from "@/modules/home/components/certificates";
import ServicesSection from "@/modules/home/components/services";
import TestimonialSection from "@/modules/home/components/testimonial";
import IndustrySection from "@/modules/home/components/industry";

const HomeTemplate = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <IndustrySection />
      <CertificateSection />
      <TestimonialSection />
    </div>
  );
};

export default HomeTemplate;
