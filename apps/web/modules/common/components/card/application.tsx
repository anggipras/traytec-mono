import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Button from "../button";
import RenderHtml from "../render-html";
import type { Job, Maybe } from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Componentintegrationenjobs_Style,
} from "@/generated/graphql";
import { convertISOStringToCustomFormat } from "@/lib/util/date";
import { serverBaseUrl } from "@/client.config";

interface AppCardProps {
  data?: Maybe<Job>;
  componentstyle?: Enum_Componentintegrationenjobs_Style;
}

const ApplicationCard = ({
  data,
  componentstyle = Enum_Componentintegrationenjobs_Style.Grid,
}: AppCardProps) => {
  const router = useRouter();

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
        "flex flex-col justify-between items-center gap-6 medium:gap-0 p-6 medium:px-10 medium:py-6 rounded-3xl bg-gray-50 w-full",
        compFlex
      )}
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
                    src={
                      badg?.icon?.data?.attributes?.url
                        ? `${serverBaseUrl?.replace("/api", "")}${badg?.icon
                            ?.data?.attributes?.url}`
                        : ""
                    }
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
            <span className="">Detail Career</span>
          </Button>
        )}
        <Button
          size="medium"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
        >
          <span className="">Apply Now</span>
        </Button>
      </div>
    </div>
  );
};

export default ApplicationCard;
