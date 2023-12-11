import React from "react";
import ApplicationCard from "@/modules/common/components/card/application";

interface CareerData {
  careerData: {
    createdDate: string;
    title: string;
    desc: string;
    slug: string;
    detail: { job_position: string; salary: string };
  }[];
}

const CareerList = ({ ...props }: CareerData) => {
  return (
    <div className="flex flex-col my-6 medium:my-10 gap-6 medium:gap-4">
      {props.careerData.map((val, idx) => (
        <ApplicationCard
          createdDate={val.createdDate}
          desc={val.desc}
          detail={val.detail}
          detailPath={`/career/${val.slug}`}
          key={idx}
          title={val.title}
        />
      ))}
    </div>
  );
};

export default CareerList;
