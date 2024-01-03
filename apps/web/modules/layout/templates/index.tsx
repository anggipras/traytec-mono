import "@/styles/globals.css";
import React from "react";
import NavbarTemplate from "@/modules/layout/templates/nav";
import FooterTemplate from "@/modules/layout/templates/footer";
import type {
  FormularEntityResponseCollection,
  GetLocalesQuery,
  SeiteEntity,
} from "@/generated/graphql";

interface RootLayoutProps {
  navbar?: {
    localeList?: GetLocalesQuery;
    localeHandle: SeiteEntity[];
  };
  footer?: {
    salesForm: FormularEntityResponseCollection;
  };
}

export default function RootLayout({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData?: RootLayoutProps;
}) {
  return (
    <>
      <NavbarTemplate navbarvalue={initialData?.navbar} />
      {children}
      <FooterTemplate footervalue={initialData?.footer} />
    </>
  );
}
