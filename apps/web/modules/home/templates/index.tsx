import Hero from "@/modules/home/components/hero";
import CertificateSection from "@/modules/home/components/certificates";
import LayoutContainer from "@/modules/layout/components/layout-container";
import ServicesSection from "@/modules/home/components/process";
import TestimonialSection from "@/modules/home/components/testimonial";
import IndustrySection from "@/modules/home/components/industry";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <LayoutContainer>
        <ServicesSection />
        <IndustrySection />
        <CertificateSection />
        <TestimonialSection />
      </LayoutContainer>
    </>
  );
};

export default HomeTemplate;
