import React from "react";
import SubHeader from "../sub-header";
import GridList from "../grid-list";
import { Enum_Componentheadingsheadingminimalistisch_Ausrichtung } from "@/generated/graphql";
import type {
  ComponentListenGridListe,
  ComponentHeadingsHeadingMinimalistisch,
  IndustrieEntity,
  ComponentUtilsGridElement,
} from "@/generated/graphql";
import LayoutContainer from "@/modules/layout/components/layout-container";

interface IndustryDetailProps {
  data: IndustrieEntity;
}

const IndustryDetail = ({ data }: IndustryDetailProps) => {
  const headerMinimalist: ComponentHeadingsHeadingMinimalistisch = {
    __typename: "ComponentHeadingsHeadingMinimalistisch",
    ausrichtung:
      Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Zentriert,
    beschreibung: data.attributes?.beschreibung,
    bild: data.attributes?.vorschau,
    dekoration_anzeigen: true,
    id: data.id || "",
    titel: data.attributes?.titel || "",
  };

  const gridList: ComponentListenGridListe = {
    __typename: "ComponentListenGridListe",
    id: data.id || "",
    inhalt: data.attributes?.produkte?.data.map((prodDt) => {
      return {
        __typename: "ComponentUtilsGridElement",
        bild: prodDt.attributes?.vorschau,
        id: prodDt.id,
        text: prodDt.attributes?.beschreibung,
        titel: prodDt.attributes?.titel,
      };
    }) as ComponentUtilsGridElement[],
    ueberschrift: null,
  };

  return (
    <>
      <SubHeader data={headerMinimalist} />
      <LayoutContainer>
        <GridList data={gridList} />
      </LayoutContainer>
    </>
  );
};

export default IndustryDetail;
