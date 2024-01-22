/* eslint-disable @typescript-eslint/no-misused-promises -- disable no misuses promises */
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubHeader from "../sub-header";
import GridList from "../grid-list";
import PaginationSection from "../pagination";
import {
  Enum_Componentheadingsheadingminimalistisch_Ausrichtung,
  GetProductsDocument,
} from "@/generated/graphql";
import type {
  ComponentListenGridListe,
  ComponentHeadingsHeadingMinimalistisch,
  IndustrieEntity,
  ComponentUtilsGridElement,
  ProduktEntityResponseCollection,
  ProduktEntity,
  GetProductsQuery,
} from "@/generated/graphql";
import LayoutContainer from "@/modules/layout/components/layout-container";
import { getApolloClient } from "@/lib/with-apollo";

interface IndustryDetailProps {
  data: IndustrieEntity;
}

const IndustryDetail = ({ data }: IndustryDetailProps) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(
    data.attributes?.alle_anzeigen
      ? (data.attributes.produkte as ProduktEntityResponseCollection).meta
          .pagination.pageCount
      : 0
  );
  const [currentData, setCurrentData] = useState<ProduktEntity[] | undefined>(
    data.attributes?.produkte?.data
  );

  useEffect(() => {
    setCurrentData(data.attributes?.produkte?.data);
  }, [data]);

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
    inhalt: currentData?.map((prodDt) => {
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

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePage(1);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const activePageHandler = async (clickedActivePage: string) => {
    setActivePage(parseInt(clickedActivePage));
    const paginatedData = await fetchProductsWithFilter(
      router.locale ?? "de",
      parseInt(clickedActivePage)
    );
    setTotalPages(
      (
        (paginatedData.data as GetProductsQuery)
          .produkte as ProduktEntityResponseCollection
      ).meta.pagination.pageCount
    );
    setCurrentData(
      (
        (paginatedData.data as GetProductsQuery)
          .produkte as ProduktEntityResponseCollection
      ).data
    );
  };

  const fetchProductsWithFilter = useCallback(
    (locale: string, actPage?: number) => {
      const apolloClient = getApolloClient();
      const productVariable: {
        locale: string;
        pagination: Record<string, unknown>;
      } = {
        locale,
        pagination: {
          page: actPage ?? activePage,
          pageSize: 4,
        },
      };
      return apolloClient.query({
        query: GetProductsDocument,
        variables: productVariable,
      });
    },
    [activePage]
  );

  return (
    <>
      <SubHeader data={headerMinimalist} />
      {currentData && currentData.length > 0 && (
        <LayoutContainer>
          <GridList data={gridList} />
          {data.attributes?.alle_anzeigen && (
            <div className="my-6 medium:my-10">
              <PaginationSection
                active={activePage}
                onClickHandler={activePageHandler}
                size={totalPages}
                step={1}
              />
            </div>
          )}
        </LayoutContainer>
      )}
    </>
  );
};

export default IndustryDetail;
