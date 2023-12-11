import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

type CardProps = {
  image?: string;
  title: string;
  smallcontent?: string;
  subcontent: string;
  imgclass?: string;
  imgstyle?: string;
  titleclass: string;
  cursor?: string;
  additionalclass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div
      aria-hidden
      className={clsx("flex", props.cursor, props.additionalclass)}
      {...props}
    >
      {props.image ? (
        <div className={props.imgclass}>
          <Image
            alt="card-img"
            className={clsx("h-auto", props.imgstyle)}
            src={props.image}
          />
        </div>
      ) : null}
      <div>
        {props.smallcontent ? (
          <div className="mb-3 text-gray-300">{props.smallcontent}</div>
        ) : null}
        <div className={clsx("mb-4", props.titleclass)}>{props.title}</div>
        <div className="typo-copy-normal text-gray-400">{props.subcontent}</div>
      </div>
    </div>
  );
};

export default Card;
