import React, { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import HeadlessModal from "../headless-dialog";
import RenderHtml from "../render-html";

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
  textposition?: "text-center" | "text-start";
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  textposition = "text-start",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        aria-hidden
        className={clsx("flex", props.cursor, props.additionalclass)}
        onClick={() => {
          setIsOpen(true);
        }}
        {...props}
      >
        {props.image ? (
          <div className={props.imgclass}>
            <Image
              alt="card-img"
              className={props.imgstyle}
              height="0"
              sizes="100%"
              src={props.image}
              width="0"
            />
          </div>
        ) : null}
        <div className={clsx("flex flex-col", textposition)}>
          {props.smallcontent && (
            <div className="mb-3 text-gray-300">{props.smallcontent}</div>
          )}
          <div className={clsx("mb-4", props.titleclass)}>{props.title}</div>
          {props.subcontent && (
            <RenderHtml
              className="text-gray-400"
              html={props.subcontent || ""}
            />
          )}
        </div>
      </div>
      <HeadlessModal
        closeModal={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        {props.image ? (
          <div className={props.imgclass}>
            <Image
              alt="card-img"
              className={props.imgstyle}
              height="0"
              sizes="100%"
              src={props.image}
              width="0"
            />
          </div>
        ) : null}
      </HeadlessModal>
    </>
  );
};

export default Card;
