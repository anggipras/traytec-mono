import React, { useEffect, useState } from "react";
// import NativeSelect from "@/modules/common/components/native-select";
// import SearchBox from "@/modules/common/components/search-box";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import PaginationSection from "@/modules/common/components/pagination";
import { Enum_Componentintegrationenjobs_Style } from "@/generated/graphql";
import type {
  ComponentIntegrationenJobs,
  JobEntity,
} from "@/generated/graphql";
import ApplicationCard from "@/modules/common/components/card/application";

interface JobListProps {
  data: ComponentIntegrationenJobs;
}

const JobList = ({ data }: JobListProps) => {
  const router = useRouter();
  const itemsPerPage = 3;
  const [active, setActive] = useState(1);
  const totalPages = data.jobs?.data?.length
    ? Math.ceil(data.jobs.data.length / itemsPerPage)
    : 0;
  const [currentData, setCurrentData] = useState<JobEntity[]>();

  useEffect(() => {
    const handleRouteChange = () => {
      setActive(1);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (data.jobs?.data?.length) {
      const slicedData = data.jobs.data.slice(
        (active - 1) * itemsPerPage,
        active * itemsPerPage
      );
      setCurrentData(slicedData);
    }
  }, [active, data.jobs?.data]);

  const activeHandler = (clickedActive: string) => {
    setActive(parseInt(clickedActive));
  };

  const flexAlignment = clsx({
    "flex flex-col":
      data.STYLE === Enum_Componentintegrationenjobs_Style.VolleBreite,
    "grid medium:grid-cols-2":
      data.STYLE === Enum_Componentintegrationenjobs_Style.Grid,
  });

  return (
    <div className="my-10 mx-6 medium:mx-15 medium:mt-32.5">
      {/* <div className="flex flex-col medium:flex-row medium:justify-between w-full gap-4 medium:gap-0">
        <div className="flex flex-col medium:flex-row gap-4 medium:gap-6">
          <NativeSelect placeholder="All Careers">
            <option value="allcareer1">All Career 1</option>
            <option value="allcareer2">All Career 2</option>
            <option value="allcareer3">All Career 3</option>
          </NativeSelect>
          <NativeSelect placeholder="Latest Careers">
            <option value="latestcareer1">Latest Career 1</option>
            <option value="latestcareer2">Latest Career 2</option>
            <option value="latestcareer3">Latest Career 3</option>
          </NativeSelect>
        </div>
        <SearchBox placeholder="Search..." type="text" />
      </div> */}
      {data.jobs?.data && data.jobs?.data.length > 0 ? (
        <>
          <div
            className={clsx(
              "my-6 medium:my-10 gap-6 medium:gap-4",
              flexAlignment
            )}
          >
            {currentData?.map((val, idx) => (
              <ApplicationCard
                componentstyle={data.STYLE}
                data={val.attributes}
                key={idx}
              />
            ))}
          </div>
          <PaginationSection
            active={active}
            onClickHandler={activeHandler}
            size={totalPages}
            step={1}
          />
        </>
      ) : null}
    </div>
  );
};

export default JobList;
