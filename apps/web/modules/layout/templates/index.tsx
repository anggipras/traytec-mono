import "@/styles/globals.css";
import React from "react";
import FooterTemplate from "modules/layout/templates/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>NAVBAR</div>
      {children}
      <FooterTemplate />
    </div>
  );
}
