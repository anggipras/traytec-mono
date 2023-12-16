import React from "react";
import Hero from "@/modules/home/components/hero";
import type { ComponentHerosHero1 } from "@/generated/graphql";

export const renderDynamicContent = (contentItem: any) => {
  const { __typename } = contentItem || {};

  let item: React.ReactNode;

  switch (__typename) {
    case "ComponentHerosHero1":
      item = <Hero data={contentItem as ComponentHerosHero1} />;
      break;
    default:
      console.log("No component found for: ", __typename);
      return null;
  }

  return item;
};
