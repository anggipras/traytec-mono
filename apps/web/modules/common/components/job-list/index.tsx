/* eslint-disable react-hooks/exhaustive-deps -- disable exh deps */
import React, { useCallback, useEffect, useState } from "react";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useTranslation } from "next-i18next";
import NativeSelect from "@/modules/common/components/native-select";
import SearchBox from "@/modules/common/components/search-box";
import PaginationSection from "@/modules/common/components/pagination";
import {
  Enum_Componentintegrationenjobs_Style,
  GetJobDocument,
} from "@/generated/graphql";
import type {
  ComponentIntegrationenJobs,
  JobEntity,
  JobEntityResponseCollection,
} from "@/generated/graphql";
import ApplicationCard from "@/modules/common/components/card/application";
import { getApolloClient } from "@/lib/with-apollo";

interface JobListProps {
  data: ComponentIntegrationenJobs;
}

const JobList = ({ data }: JobListProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(
    data.alle_anzeigen
      ? (data.jobs as JobEntityResponseCollection).meta.pagination.pageCount
      : 0
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentData, setCurrentData] = useState<JobEntity[] | undefined>(
    data.jobs?.data
  );
  const [selectOption, setSelectOption] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePage(1);
    };
    setCurrentData(data.jobs?.data);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, data]);

  useEffect(() => {
    if (selectOption.length) {
      const selectedOptResp = async () => {
        const selectedOptData = await fetchJobWithFilter(
          router.locale ?? "de",
          searchQuery,
          activePage,
          selectOption
        );
        setTotalPages(
          (selectedOptData.data.jobs as JobEntityResponseCollection).meta
            .pagination.pageCount
        );
        setCurrentData(
          (selectedOptData.data.jobs as JobEntityResponseCollection).data
        );
      };
      void selectedOptResp();
    }
  }, [selectOption]);

  const activePageHandler = async (clickedActivePage: string) => {
    setActivePage(parseInt(clickedActivePage));
    const paginatedData = await fetchJobWithFilter(
      router.locale ?? "de",
      searchQuery,
      parseInt(clickedActivePage),
      selectOption
    );
    setTotalPages(
      (paginatedData.data.jobs as JobEntityResponseCollection).meta.pagination
        .pageCount
    );
    setCurrentData(
      (paginatedData.data.jobs as JobEntityResponseCollection).data
    );
  };

  const debouncedSearch = debounce(async (q: string) => {
    const debounceData = await fetchJobWithFilter(
      router.locale ?? "de",
      q.toLocaleLowerCase(),
      1,
      selectOption
    );

    setTotalPages(
      (debounceData.data.jobs as JobEntityResponseCollection).meta.pagination
        .pageCount
    );
    setCurrentData(
      (debounceData.data.jobs as JobEntityResponseCollection).data
    );
    setActivePage(1);
  }, 800);

  const fetchJobWithFilter = useCallback(
    (locale: string, qstring: string, actPage?: number, optstring?: string) => {
      const apolloClient = getApolloClient();
      const jobVariable: {
        locale: string;
        pagination: Record<string, unknown>;
        filters?: any;
      } = {
        locale,
        pagination: {
          page: actPage ?? activePage,
          pageSize: 10,
        },
      };
      if (qstring.length && optstring?.length && optstring !== "ALL") {
        jobVariable.filters = {
          or: [
            {
              titel: {
                containsi: qstring,
              },
              art: {
                eq: optstring,
              },
            },
          ],
        };
      } else if (qstring.length && optstring?.length && optstring === "ALL") {
        jobVariable.filters = {
          or: [
            {
              titel: {
                containsi: qstring,
              },
            },
          ],
        };
      } else if (optstring?.length && optstring !== "ALL" && !qstring.length) {
        jobVariable.filters = {
          or: [
            {
              art: {
                eq: optstring,
              },
            },
          ],
        };
      }

      return apolloClient.query({
        query: GetJobDocument,
        variables: jobVariable,
      });
    },
    [activePage, selectOption]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
    if (e.target.value.length > 3 || !e.target.value)
      void debouncedSearch(e.target.value);
  };

  const flexAlignment = clsx({
    "flex flex-col":
      data.STYLE === Enum_Componentintegrationenjobs_Style.VolleBreite,
    "grid medium:grid-cols-2":
      data.STYLE === Enum_Componentintegrationenjobs_Style.Grid,
  });

  const artData = [
    { name: t("career-selection.all"), value: "ALL" },
    { name: t("career-selection.fullTime"), value: "VOLLZEIT" },
    { name: t("career-selection.partTime"), value: "TEILZEIT" },
    { name: t("career-selection.ausbildung"), value: "AUSBILDUNG" },
    { name: t("career-selection.miniJob"), value: "MINI-JOB" },
  ];

  const selectJobEnum = (dt: Record<string, string>) => {
    setSelectOption(dt.value);
  };

  return (
    <div className="my-10 mx-6 medium:mx-15 medium:mt-32.5">
      {data.alle_anzeigen && (
        <div className="flex flex-col medium:flex-row medium:justify-between w-full gap-4 medium:gap-0">
          <div className="flex flex-col medium:flex-row gap-4 medium:gap-6">
            <NativeSelect data={artData} onSelectDt={selectJobEnum} />
          </div>
          <SearchBox
            onChange={handleSearchChange}
            placeholder="Search..."
            type="text"
            value={searchQuery}
          />
        </div>
      )}
      {currentData && currentData.length > 0 && (
        <>
          <div
            className={clsx(
              "my-6 medium:my-10 gap-6 medium:gap-4",
              flexAlignment
            )}
          >
            {currentData.map((val, idx) => (
              <ApplicationCard
                componentstyle={data.STYLE}
                data={val.attributes}
                indexcard={idx}
                key={idx}
              />
            ))}
          </div>
          {data.alle_anzeigen && (
            <PaginationSection
              active={activePage}
              onClickHandler={activePageHandler}
              size={totalPages}
              step={1}
            />
          )}
        </>
      )}
    </div>
  );
};

export default JobList;
