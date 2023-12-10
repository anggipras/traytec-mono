import React, { useMemo, useState } from "react";
import NativeSelect from "@/modules/common/components/native-select";
import SearchBox from "@/modules/common/components/search-box";
import LayoutContainer from "@/modules/layout/components/layout-container";
import CareerList from "@/modules/career/components/career-list";
import PaginationSection from "@/modules/common/components/pagination";
import SectionHeader from "@/modules/common/components/section-header";

const CareerTemplate = () => {
  const careerList = useMemo(
    () => [
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "career-1",
        detail: {
          job_position: "full time",
          salary: "negotiable",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 4",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "career-2",
        detail: {
          job_position: "full time",
          salary: "negotiable",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 3",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "career-3",
        detail: {
          job_position: "full time",
          salary: "negotiable",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 4",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "career-4",
        detail: {
          job_position: "full time",
          salary: "negotiable",
        },
      },
    ],
    []
  );

  const [active, setActive] = useState(1);

  const activeHandler = (clickedActive: string) => {
    setActive(parseInt(clickedActive));
  };

  return (
    <>
      <div className="bg-gray-50 py-10">
        <SectionHeader
          desc="Trays opens the door to inspiring careers, where every individual has the opportunity to develop and reach their maximum potential"
          title="Join the Traytec Team An Inspiring Career Opportunity"
        />
      </div>
      <LayoutContainer>
        <div className="mt-10 mx-15 mb-32.5">
          <div className="flex w-full justify-between">
            <div className="flex gap-6">
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
          </div>
          <CareerList careerData={careerList} />
          <PaginationSection
            active={active}
            onClickHandler={activeHandler}
            size={20}
            step={2}
          />
        </div>
      </LayoutContainer>
    </>
  );
};

export default CareerTemplate;
