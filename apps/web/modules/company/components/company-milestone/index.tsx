import React from "react";

interface TimelineItemData {
  image: string;
  date: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  data: TimelineItemData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      {/* <span>{data.category.tag}</span> */}
      <div>{data.date}</div>
      <div>{data.title}</div>
      <div>{data.description}</div>
      <span className="circle" />
    </div>
  </div>
);

const CompanyMilestone = () => {
  const timelineData = [
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_product.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_product.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_product.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_product.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_product.png"),
    },
  ];

  return (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
};

export default CompanyMilestone;
