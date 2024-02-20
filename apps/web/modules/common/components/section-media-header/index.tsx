import React from "react";
import SectionHeader from "@/modules/common/components/section-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import type {
  ComponentHeadingsHeadingMitVideo,
  ComponentUtilsHeading,
  Maybe,
  Scalars,
  UploadFileEntityResponse,
} from "@/generated/graphql";

interface SectionMediaHeaderProps {
  data: ComponentHeadingsHeadingMitVideo;
}

interface ComponentHeadingWithVideo {
  __typename?: "ComponentHeadingsHeadingMitVideo";
  id: Scalars["ID"];
  heading_media?: Maybe<UploadFileEntityResponse>;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
}

const SectionMediaHeader = ({ data }: SectionMediaHeaderProps) => {
  const headingVideoComponent: ComponentHeadingWithVideo = { ...data };

  return (
    <div className="relative bg-gray-50 py-10">
      <LayoutContainer>
        {headingVideoComponent.ueberschrift && (
          <SectionHeader
            desc={headingVideoComponent.ueberschrift?.text}
            title={headingVideoComponent.ueberschrift?.heading}
            typ={headingVideoComponent.ueberschrift.typ}
          />
        )}
        {headingVideoComponent.heading_media?.data?.attributes?.url && (
          <div className="px-0 medium:px-44 mt-6 w-full">
            <video className="w-full aspect-video medium:rounded-3xl" controls>
              <track kind="captions" />
              <source
                src={
                  headingVideoComponent.heading_media.data.attributes.url ?? ""
                }
                type={`video/${headingVideoComponent.heading_media?.data?.attributes?.ext?.replaceAll(
                  ".",
                  ""
                )}`}
              />
            </video>
          </div>
        )}
      </LayoutContainer>
    </div>
  );
};

export default SectionMediaHeader;
