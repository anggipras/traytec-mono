// import "@/styles/globals.css";
import React from "react";
import NavbarTemplate from "@/modules/layout/templates/nav";
import FooterTemplate from "@/modules/layout/templates/footer";
import type {
  GetLocalesQuery,
  SeiteEntity,
  SeitenEinstellung,
} from "@/generated/graphql";
import MobileMenuContext from "@/context/mobile-menu-context";

interface RootLayoutProps {
  navbar?: {
    localeList?: GetLocalesQuery;
    localeHandle: SeiteEntity[];
    singleType: SeitenEinstellung;
  };
  footer?: SeitenEinstellung;
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
      <FooterTemplate footervalue={initialData?.footer} />
    </>
  );
}
