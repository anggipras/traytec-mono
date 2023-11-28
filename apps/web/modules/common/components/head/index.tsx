import React from "react";
import NextHead from "next/head";

type HeadProps = {
  title?: string | undefined | null;
  description?: string;
  image?: string;
  jsonLd?: string;
  // videoJsonLd,
  // alternativeUrls?: string
  ogType?: "home" | "store" | "product" | "collection" | "location" | "account";
} & React.HTMLAttributes<HTMLHeadElement>;

const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  //   jsonLd,
  //   ogType,
  //   children,
  // ...props
}) => {
  const defaultImgUrl = "";
  return (
    <NextHead>
      <title>{`${title ?? ""} | Traytect`}</title>
      <meta content={title ? title : ""} property="name" />
      {!description && <meta content={description} name="description" />}
      <meta content={image ?? defaultImgUrl} property="image" />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};

export default Head;
