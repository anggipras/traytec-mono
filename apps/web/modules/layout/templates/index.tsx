import "@/styles/globals.css";
import React from "react";
import NavbarTemplate from "modules/layout/templates/nav";
import FooterTemplate from "modules/layout/templates/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarTemplate />
      {children}
      <FooterTemplate />
    </div>
  );
}
