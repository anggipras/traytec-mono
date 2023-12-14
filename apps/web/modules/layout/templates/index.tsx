import "@/styles/globals.css";
import React from "react";
import NavbarTemplate from "@/modules/layout/templates/nav";
import FooterTemplate from "@/modules/layout/templates/footer";

interface RootLayoutProps {
  navbar?: {
    localeList?: {
      id: number;
      name: string;
      code: string;
      createdAt: string;
      updatedAt: string;
      isDefault: boolean;
    }[];
  };
  footer?: [];
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
      <FooterTemplate />
    </>
  );
}
