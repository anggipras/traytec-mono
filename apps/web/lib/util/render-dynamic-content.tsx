import React from "react";
import { DataProvider } from "../hooks/use-data-context";
import Hero from "@/modules/common/components/hero-bg";
import type {
  ComponentHeadingsHeadingMinimalistisch,
  ComponentHeadingsHeadingMitVideo,
  ComponentHerosHero1,
  ComponentIntegrationenBewertungen,
  ComponentIntegrationenFormular,
  ComponentIntegrationenJobs,
  ComponentListenGridListe,
  ComponentListenIndustrieListe,
  ComponentListenTimelineListe,
  ComponentSektionenInhaltMitMedia,
  ComponentSliderHorizontalerSlider,
  ComponentSliderHorizontalerSliderFokus,
  ComponentUtilsText,
  IndustrieEntity,
  JobEntity,
} from "@/generated/graphql";
import HorizontalSlider from "@/modules/common/components/slider/horizontal-slider";
import FocusSlider from "@/modules/common/components/slider/focus-slider";
import LayoutContainer from "@/modules/layout/components/layout-container";
import GridList from "@/modules/common/components/grid-list";
import SubHeader from "@/modules/common/components/sub-header";
import SectionMediaContent from "@/modules/common/components/section-media-content";
import TimelineList from "@/modules/common/components/timeline-list";
import SectionMediaHeader from "@/modules/common/components/section-media-header";
import IndustryList from "@/modules/common/components/industry-list";
import JobList from "@/modules/common/components/job-list";
import JobDetail from "@/modules/common/components/job-detail";
import SalesForm from "@/modules/common/components/forms/sales-form/sales-form";
import IndustryDetail from "@/modules/common/components/industry-detail";
import HorizontalSliderDefault from "@/modules/common/components/slider/horizontal-slider-default";
import GeneralContent from "@/modules/common/components/general-content";

export const renderDynamicContent = (contentItem: any) => {
  const { __typename } = contentItem || {};

  let item: React.ReactNode;

  switch (__typename) {
    case "ComponentHerosHero1":
      item = <Hero data={contentItem as ComponentHerosHero1} />;
      break;
    case "ComponentSliderHorizontalerSlider":
      item = (
        <HorizontalSlider
          data={contentItem as ComponentSliderHorizontalerSlider}
        />
      );
      break;
    case "ComponentSliderHorizontalerSliderFokus":
      item = (
        <FocusSlider
          data={contentItem as ComponentSliderHorizontalerSliderFokus}
        />
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
    case "JobEntity":
      item = (
        <LayoutContainer>
          <JobDetail data={contentItem as JobEntity} />
        </LayoutContainer>
      );
      break;
    case "ComponentIntegrationenFormular":
      item = (
        <DataProvider>
          <SalesForm
            salesform={contentItem as ComponentIntegrationenFormular}
          />
        </DataProvider>
      );
      break;
    case "IndustrieEntity":
      item = <IndustryDetail data={contentItem as IndustrieEntity} />;
      break;
    case "ComponentIntegrationenBewertungen":
      item = (
        <LayoutContainer>
          <HorizontalSliderDefault
            data={contentItem as ComponentIntegrationenBewertungen}
          />
        </LayoutContainer>
      );
      break;
    case "ComponentUtilsText":
      item = (
        <LayoutContainer>
          <GeneralContent data={contentItem as ComponentUtilsText} />
        </LayoutContainer>
      );
      break;
    default:
      console.log("No component found for: ", __typename);
      return null;
  }

  return item;
};
