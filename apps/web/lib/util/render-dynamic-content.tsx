import React from "react";
import Hero from "@/modules/home/components/hero";
import type {
  ComponentHerosHero1,
  ComponentIntegrationenFormular,
  ComponentListenGridListe,
  ComponentSliderHorizontalerSlider,
  ComponentSliderHorizontalerSliderFokus,
} from "@/generated/graphql";
import HorizontalSlider from "@/modules/common/components/slider/horizontal-slider";
import FocusSlider from "@/modules/common/components/slider/focus-slider";
import AskQuestion from "@/modules/layout/components/footer/ask-question";
import LayoutContainer from "@/modules/layout/components/layout-container";
import GridList from "@/modules/common/components/grid-list";

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
