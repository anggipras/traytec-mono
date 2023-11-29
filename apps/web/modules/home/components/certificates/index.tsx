/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React, { useMemo } from "react";

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
    <div className="mx-15">
      <div className="w-fit px-3.5 py-2 bg-primary-100 rounded-md">
        Certificates
      </div>
      <div className="typo-h2 mb-10 mt-4">Certificates and Awards</div>
      <div className="flex flex-wrap gap-5">
        {certificateData.map((val) => {
          return (
            <div className="max-w-md" key={val.id}>
              <Image
                alt="certificate-img"
                className="max-w-full h-auto mb-6"
                src={val.image}
              />
              <div className="typo-h4 mb-4">DIN EN ISO 9001:2015 DE</div>
              <div className="typo-copy-normal">
                Frame stacking trays are designed with a frame system to store
                more workpieces per footprint
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificateSection;
