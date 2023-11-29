import Hero from "@/modules/home/components/hero";
import CertificateSection from "@/modules/home/components/certificates";
import ServicesSection from "@/modules/home/components/services";

const HomeTemplate = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <CertificateSection />
    </div>
  );
};

export default HomeTemplate;
