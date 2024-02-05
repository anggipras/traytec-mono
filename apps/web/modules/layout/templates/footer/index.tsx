import React from "react";
import FooterComponent from "@/modules/layout/components/footer";
import type { SeitenEinstellung } from "@/generated/graphql";

interface FooterTemplateProps {
  footervalue?: SeitenEinstellung;
}

const FooterTemplate = ({ footervalue }: FooterTemplateProps) => {
  return (
    <footer>
      <FooterComponent footervalue={footervalue} />
    </footer>
  );
};

export default FooterTemplate;
