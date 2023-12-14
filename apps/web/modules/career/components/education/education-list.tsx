import React from "react";
import ApplicationCard from "@/modules/common/components/card/application";

interface EducationData {
  educationList: {
    createdDate: string;
    title: string;
    desc: string;
    slug: string;
    detail: { job_position: string; salary: string; vacant: string };
  }[];
}

const EducationList = ({ ...props }: EducationData) => {
  return (
    <div className="grid medium:grid-cols-2 mt-6 medium:mt-10 gap-6 medium:gap-5">
      {props.educationList.map((val, idx) => (
        <ApplicationCard
          buttonposition="justify-start"
          createdDate={val.createdDate}
          desc={val.desc}
          detail={val.detail}
          detailPath={`/career/education/${val.slug}`}
          key={idx}
          parentflex="flex-col"
          title={val.title}
        />
      ))}
    </div>
  );
};

export default EducationList;
