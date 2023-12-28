import React from "react";
import Hero from "@/modules/common/components/hero-bg";
import type {
  ComponentHeadingsHeadingMinimalistisch,
  ComponentHeadingsHeadingMitVideo,
  ComponentHerosHero1,
  ComponentIntegrationenFormular,
  ComponentIntegrationenJobs,
  ComponentListenGridListe,
  ComponentListenIndustrieListe,
  ComponentListenTimelineListe,
  ComponentSektionenInhaltMitMedia,
  ComponentSliderHorizontalerSlider,
  ComponentSliderHorizontalerSliderFokus,
} from "@/generated/graphql";
import HorizontalSlider from "@/modules/common/components/slider/horizontal-slider";
import FocusSlider from "@/modules/common/components/slider/focus-slider";
import AskQuestion from "@/modules/layout/components/footer/ask-question";
import LayoutContainer from "@/modules/layout/components/layout-container";
import GridList from "@/modules/common/components/grid-list";
import SubHeader from "@/modules/common/components/sub-header";
import SectionMediaContent from "@/modules/common/components/section-media-content";
import TimelineList from "@/modules/common/components/timeline-list";
import SectionMediaHeader from "@/modules/common/components/section-media-header";
import IndustryList from "@/modules/common/components/industry-list";
import JobList from "@/modules/common/components/job-list";

export const renderDynamicContent = (contentItem: any) => {
  const { __typename } = contentItem || {};

  let item: React.ReactNode;

  switch (__typename) {
    case "ComponentHerosHero1":
      item = <Hero data={contentItem as ComponentHerosHero1} />;
      break;
    case "ComponentSliderHorizontalerSlider":
      item = (
        <LayoutContainer>
          <HorizontalSlider
            data={contentItem as ComponentSliderHorizontalerSlider}
          />
        </LayoutContainer>
      );
      break;
    case "ComponentSliderHorizontalerSliderFokus":
      item = (
        <LayoutContainer>
          <FocusSlider
            data={contentItem as ComponentSliderHorizontalerSliderFokus}
          />
        </LayoutContainer>
      );
      break;
    case "ComponentListenGridListe":
      item = (
        <LayoutContainer>
          <GridList data={contentItem as ComponentListenGridListe} />
        </LayoutContainer>
      );
      break;
    case "ComponentHeadingsHeadingMinimalistisch":
      item = (
        <SubHeader
          data={contentItem as ComponentHeadingsHeadingMinimalistisch}
        />
      );
      break;
    case "ComponentSektionenInhaltMitMedia":
      item = (
        <LayoutContainer>
          <SectionMediaContent
            data={contentItem as ComponentSektionenInhaltMitMedia}
          />
        </LayoutContainer>
      );
      break;
    case "ComponentListenTimelineListe":
      item = (
        <LayoutContainer>
          <TimelineList data={contentItem as ComponentListenTimelineListe} />
        </LayoutContainer>
      );
      break;
    case "ComponentHeadingsHeadingMitVideo":
      item = (
        <SectionMediaHeader
          data={contentItem as ComponentHeadingsHeadingMitVideo}
        />
      );
      break;
    case "ComponentListenIndustrieListe":
      item = (
        <LayoutContainer>
          <IndustryList data={contentItem as ComponentListenIndustrieListe} />
        </LayoutContainer>
      );
      break;
    case "ComponentIntegrationenJobs":
      item = (
        <LayoutContainer>
          <JobList data={contentItem as ComponentIntegrationenJobs} />
        </LayoutContainer>
      );
      break;
    case "ComponentIntegrationenFormular":
      item = (
        <AskQuestion data={contentItem as ComponentIntegrationenFormular} />
      );
      break;
    default:
      console.log("No component found for: ", __typename);
      return null;
  }

  return item;
};
