import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

type CardProps = {
  image?: string;
  title: string;
  smallContent?: string;
  subcontent: string;
  imgClass?: string;
  imgStyle?: string;
  titleClass: string;
  cursor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div aria-hidden className={clsx("flex flex-col", props.cursor)} {...props}>
      {props.image ? (
        <div className={props.imgClass}>
          <Image
            alt="card-img"
            className={clsx("max-w-full h-auto", props.imgStyle)}
            src={props.image}
          />
        </div>
      ) : null}
      {props.smallContent ? (
        <div className="mb-3 text-gray-300">{props.smallContent}</div>
      ) : null}
      <div className={clsx("mb-4", props.titleClass)}>{props.title}</div>
      <div className="typo-copy-normal text-gray-400">{props.subcontent}</div>
    </div>
  );
};

export default Card;
