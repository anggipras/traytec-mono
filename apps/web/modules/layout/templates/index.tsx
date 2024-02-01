// import "@/styles/globals.css";
import React from "react";
import NavbarTemplate from "@/modules/layout/templates/nav";
import FooterTemplate from "@/modules/layout/templates/footer";
import type { GetLocalesQuery, SeiteEntity } from "@/generated/graphql";
import MobileMenuContext from "@/context/mobile-menu-context";

interface RootLayoutProps {
  navbar?: {
    localeList?: GetLocalesQuery;
    localeHandle: SeiteEntity[];
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
      <MobileMenuContext>
        <NavbarTemplate navbarvalue={initialData?.navbar} />
      </MobileMenuContext>
      {children}
      <FooterTemplate />
    </>
  );
}
