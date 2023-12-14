import React, { useMemo } from "react";
import Card from "@/modules/common/components/card";
import SectionHeader from "@/modules/common/components/section-header";

const CertificateSection: React.FC = () => {
  const certificateData = useMemo(
    () => [
      {
        id: 1,
        image: require("@/assets/images/common/img_example_certificate.png"),
        title: "DIN EN ISO 9001:2015 DE",
        subcontent:
          "Frame stacking trays are designed with a frame system to store more workpieces per footprint",
      },
      {
        id: 2,
        image: require("@/assets/images/common/img_example_certificate.png"),
        title: "DIN EN ISO 9001:2015 DE",
        subcontent:
          "Frame stacking trays are designed with a frame system to store more workpieces per footprint",
      },
      {
        id: 3,
        image: require("@/assets/images/common/img_example_certificate.png"),
        title: "DIN EN ISO 9001:2015 DE",
        subcontent:
          "Frame stacking trays are designed with a frame system to store more workpieces per footprint",
      },
      {
        id: 4,
        image: require("@/assets/images/common/img_example_certificate.png"),
        title: "DIN EN ISO 9001:2015 DE",
        subcontent:
          "Frame stacking trays are designed with a frame system to store more workpieces per footprint",
      },
    ],
    []
  );
  return (
    <div className="flex flex-col items-center mx-6 medium:mx-15">
      <SectionHeader intro="Certificates" title="Certificates and Awards" />
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-5 mt-10">
        {certificateData.map((val, idx) => {
          return (
            <Card
              additionalclass="flex-col"
              image={val.image}
              imgclass="px-5 mb-6"
              imgstyle="max-w-full"
              key={idx}
              subcontent={val.subcontent}
              title={val.title}
              titleclass="typo-h4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateSection;
