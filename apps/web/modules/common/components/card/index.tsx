import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  subcontent: string;
  imgClass: string;
  titleClass: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="max-w-md">
      <div className={props.imgClass}>
        <Image
          alt="certificate-img"
          className="max-w-full h-auto"
          src={props.image}
        />
      </div>
      <div className={clsx("mb-4", props.titleClass)}>{props.title}</div>
      <div className="typo-copy-normal text-gray-400">{props.subcontent}</div>
    </div>
  );
};

export default Card;
