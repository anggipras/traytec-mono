import React from "react";
import FooterComponent from "@/modules/layout/components/footer";
import type { FormularEntityResponseCollection } from "@/generated/graphql";

interface FooterTemplateProps {
  salesForm: FormularEntityResponseCollection;
}

const FooterTemplate = ({
  footervalue,
}: {
  footervalue?: FooterTemplateProps;
}) => {
  return (
    <footer>
      <FooterComponent footerdata={footervalue?.salesForm} />
    </footer>
  );
};

export default FooterTemplate;
