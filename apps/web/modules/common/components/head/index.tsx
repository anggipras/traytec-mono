import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { clientBaseUrl } from "@/client.config";

type HeadProps = {
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  jsonLd?: string;
} & React.HTMLAttributes<HTMLHeadElement>;

const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  jsonLd,
  children,
}) => {
  const { asPath } = useRouter();
  const SITE_URL = clientBaseUrl;
  const _asPath = asPath.length === 1 ? "" : asPath;
  const url = `${SITE_URL}${_asPath}`;

  const defaultImgUrl = "";
  return (
    <NextHead>
      <title>{title ?? ""}</title>
      <meta content={title ?? ""} property="name" />
      {!description && <meta content={description} name="description" />}
      <meta content={image ?? defaultImgUrl} property="image" />
      {/* <link href="/favicon.ico" rel="icon" /> */}
      <link href={url} rel="canonical" />
      {Boolean(jsonLd) && (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
          type="application/ld+json"
        />
      )}
      {children}
    </NextHead>
  );
};

export default Head;
