import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import HeadlessModal from "../headless-dialog";
import RenderHtml from "../render-html";
import { useIntersectionObs } from "@/lib/hooks/use-intersection-obs";

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
  indexcard: number;
  textposition?: "text-center" | "text-start";
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  textposition = "text-start",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObs(cardRef);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isIntersecting) {
    const multipleNumberByScreen: number = screenWidth > 1279 ? 4 : 2;
    const groupIndex = Math.floor(props.indexcard / multipleNumberByScreen);
    const baseValue = groupIndex * multipleNumberByScreen;
    const resultIdx = props.indexcard - baseValue;
    setTimeout(() => {
      cardRef.current?.classList.remove("translate-x-[1rem]", "opacity-0");
      cardRef.current?.classList.add(
        "translate-x-0",
        "opacity-100",
        "duration-1000"
      );
    }, resultIdx * 500);
  }

  return (
    <>
      <div
        aria-hidden
        className={clsx(
          "flex opacity-0 translate-x-[1rem]",
          props.cursor,
          props.additionalclass
        )}
        ref={cardRef}
        {...props}
      >
        {props.image && (
          <div
            aria-hidden
            className={clsx("cursor-pointer", props.imgclass)}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Image
              alt="card-img"
              className={props.imgstyle}
              height="0"
              sizes="100%"
              src={props.image}
              width="0"
            />
          </div>
        )}
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
        {props.image && (
          <div className={props.imgclass}>
            <Image
              alt="card-img-popup"
              className={props.imgstyle}
              height="0"
              sizes="100%"
              src={props.image}
              width="0"
            />
          </div>
        )}
      </HeadlessModal>
    </>
  );
};

export default Card;
