import React from "react";
import Hero from "@/modules/home/components/hero";
import type {
  ComponentHerosHero1,
  ComponentSliderHorizontalerSlider,
  ComponentSliderHorizontalerSliderFokus,
} from "@/generated/graphql";
import HorizontalSlider from "@/modules/common/components/slider/horizontal-slider";
import FocusSlider from "@/modules/common/components/slider/focus-slider";

export const renderDynamicContent = (
  contentItem: any,
  sliderSectionType: "normal" | "nowrap" | null
) => {
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
          type={sliderSectionType}
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
    default:
      console.log("No component found for: ", __typename);
      return null;
  }

  return item;
};
