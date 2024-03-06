import { clsx } from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "../button";
import RenderHtml from "../render-html";
import type { Job, Maybe } from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Componentintegrationenjobs_Style,
} from "@/generated/graphql";
import { convertISOStringToCustomFormat } from "@/lib/util/date";
import { useIntersectionObs } from "@/lib/hooks/use-intersection-obs";

interface AppCardProps {
  data?: Maybe<Job>;
  componentstyle?: Enum_Componentintegrationenjobs_Style;
  indexcard: number;
}

const ApplicationCard = ({
  data,
  componentstyle = Enum_Componentintegrationenjobs_Style.Grid,
  ...props
}: AppCardProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
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
    if (componentstyle === Enum_Componentintegrationenjobs_Style.Grid) {
      if (screenWidth > 1279) {
        const groupIndex = Math.floor(props.indexcard / 2);
        const baseValue = groupIndex * 2;
        const resultIdx = props.indexcard - baseValue;
        setTimeout(() => {
          cardRef.current?.classList.remove("translate-x-[1rem]", "opacity-0");
          cardRef.current?.classList.add(
            "translate-x-0",
            "opacity-100",
            "duration-500"
          );
        }, resultIdx * 500);
      } else {
        cardRef.current?.classList.remove("translate-x-[1rem]", "opacity-0");
        cardRef.current?.classList.add(
          "translate-x-0",
          "opacity-100",
          "duration-500"
        );
      }
    } else {
      cardRef.current?.classList.remove("translate-x-[1rem]", "opacity-0");
      cardRef.current?.classList.add(
        "translate-x-0",
        "opacity-100",
        "duration-500"
      );
    }
  }

  const btnAlignment = clsx({
    "medium:justify-end":
      componentstyle === Enum_Componentintegrationenjobs_Style.VolleBreite,
    "medium:justify-start":
      componentstyle === Enum_Componentintegrationenjobs_Style.Grid,
  });

  const compFlex = clsx({
    "medium:flex-row":
      componentstyle === Enum_Componentintegrationenjobs_Style.VolleBreite,
    "medium:flex-col":
      componentstyle === Enum_Componentintegrationenjobs_Style.Grid,
  });

  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center gap-6 medium:gap-0 p-6 medium:px-10 medium:py-6 rounded-3xl bg-gray-50 w-full opacity-0 translate-x-[1rem]",
        compFlex
      )}
      ref={cardRef}
    >
      <div className="w-full">
        <div className="typo-copy-normal text-gray-500 mb-4">
          {convertISOStringToCustomFormat(data?.publishedAt)}
        </div>
        <div className="typo-h4">{data?.titel}</div>
        <RenderHtml className="text-gray-500 my-5" html={data?.auszug || ""} />
        {data?.badges?.length ? (
          <div className="flex gap-5">
            {data.badges.map((badg, idx) => (
              <div className="flex items-center" key={idx}>
                <div>
                  <Image
                    alt="ic-app-card"
                    className="w-full h-full"
                    height="0"
                    sizes="100%"
                    src={badg?.icon?.data?.attributes?.url ?? ""}
                    width="0"
                  />
                </div>
                <div className="typo-copy-normal text-gray-500 capitalize ml-2">
                  {badg?.text}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div
        className={clsx("flex gap-4 justify-start w-full mt-6", btnAlignment)}
      >
        {data?.slug && (
          <Button
            onClick={() => {
              void router.push(`${router.asPath}/${data?.slug}`);
            }}
            size="medium"
            variant={Enum_Componentutilsbutton_Variante.Primary}
          >
            <span className="">{t("career-button.detail")}</span>
          </Button>
        )}
        <Button
          size="medium"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
        >
          <span className="">{t("career-button.apply")}</span>
        </Button>
      </div>
    </div>
  );
};

export default ApplicationCard;
