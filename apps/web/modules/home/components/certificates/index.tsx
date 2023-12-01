import React, { useMemo } from "react";
import Card from "@/modules/common/components/card";

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
      <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
        Certificates
      </div>
      <div className="typo-h2 mb-10 mt-4">Certificates and Awards</div>
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-5">
        {certificateData.map((val, idx) => {
          return (
            <Card
              image={val.image}
              imgClass="px-5 mb-6"
              key={idx}
              subcontent={val.subcontent}
              title={val.title}
              titleClass="typo-h4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateSection;
