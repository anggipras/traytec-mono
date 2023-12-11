import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../button";

type AppCardProps = {
  createdDate: string;
  title: string;
  desc: string;
  detailPath: string;
  detail: { job_position: string; salary: string };
} & React.HTMLAttributes<HTMLDivElement>;

const ApplicationCard = ({ ...props }: AppCardProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col medium:flex-row justify-between items-center gap-6 medium:gap-0 p-6 medium:px-10 medium:py-6 rounded-3xl bg-gray-50 w-full">
      <div className="w-full">
        <div className="typo-copy-normal text-gray-500 mb-4">
          {props.createdDate}
        </div>
        <div className="typo-h4">{props.title}</div>
        <div className="typo-copy-normal text-gray-500 my-5">{props.desc}</div>
        <div className="flex gap-5">
          {Object.entries(props.detail).map(([property, val]) => (
            <div className="flex items-center" key={property}>
              <div>
                <Image
                  alt="ic-app-card"
                  className="w-full h-full"
                  src={
                    property === "job_position"
                      ? require("@/assets/images/icons/ic_clock.svg")
                      : require("@/assets/images/icons/ic_dollar.svg")
                  }
                />
              </div>
              <div className="typo-copy-normal text-gray-500 capitalize ml-2">
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-start medium:justify-end w-full">
        <Button
          onClick={() => {
            router.push(props.detailPath);
          }}
          size="medium"
          variant="primary"
        >
          <span className="">Detail Career</span>
        </Button>
        <Button size="medium" variant="secondary">
          <span className="">Apply Now</span>
        </Button>
      </div>
    </div>
  );
};

export default ApplicationCard;
