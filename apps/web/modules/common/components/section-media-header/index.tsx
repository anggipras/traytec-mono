import React from "react";
import SectionHeader from "@/modules/common/components/section-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import type { ComponentHeadingsHeadingMitVideo } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface SectionMediaHeaderProps {
  data: ComponentHeadingsHeadingMitVideo;
}

const SectionMediaHeader = ({ data }: SectionMediaHeaderProps) => {
  return (
    <div className="relative bg-gray-50 py-10">
      <LayoutContainer>
        <SectionHeader
          desc={data.ueberschrift?.text}
          title={data.ueberschrift?.heading}
        />
        {data.heading_media?.data?.attributes?.url ? (
          <div className="px-0 medium:px-44 mt-6 w-full">
            <video className="w-full aspect-video medium:rounded-3xl" controls>
              <track kind="captions" />
              <source
                src={`${serverBaseUrl}${data.heading_media?.data?.attributes?.url}`}
                type={`video/${data.heading_media?.data?.attributes?.ext?.replaceAll(
                  ".",
                  ""
                )}`}
              />
            </video>
          </div>
        ) : null}
      </LayoutContainer>
    </div>
  );
};

export default SectionMediaHeader;
