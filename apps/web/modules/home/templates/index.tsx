import CertificateSection from "@/modules/home/components/certificates";
import LayoutContainer from "@/modules/layout/components/layout-container";
import ServicesSection from "@/modules/home/components/process";
import TestimonialSection from "@/modules/home/components/testimonial";
import IndustrySection from "@/modules/home/components/industry";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";
import type { ComponentHerosHero1 } from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Componentutilsheading_Typ,
} from "@/generated/graphql";

const HomeTemplate = () => {
  const contentItem: ComponentHerosHero1 = {
    __typename: "ComponentHerosHero1",
    button: [
      {
        __typename: "ComponentUtilsButton",
        id: "1",
        text: "Find out your needs",
        url: "",
        variante: Enum_Componentutilsbutton_Variante.Primary,
      },
    ],
    hintergrund: {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        attributes: {
          __typename: "UploadFile",
          ext: "mp4",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 1,
          url: "/videos/traytec_home.mp4",
        },
      },
    },
    id: "1",
    sichtbar: true,
    ueberschrift: {
      __typename: "ComponentUtilsHeading",
      heading: "Service provider for high quality Plastic",
      id: "1",
      text: "Service Provider Manufacturing Trays, inserts, workpiece containers, lids and more from a variety of plastics for all applications",
      topline: "Let`s work with Traytect",
      typ: Enum_Componentutilsheading_Typ.H1,
    },
  };

  return (
    <>
      {renderDynamicContent(contentItem)}
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
