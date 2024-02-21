import React, { useEffect, useState } from "react";
import NavbarTemplate from "@/modules/layout/templates/nav";
import FooterTemplate from "@/modules/layout/templates/footer";
import type {
  GetCookieModalQuery,
  GetLocalesQuery,
  SeiteEntity,
  SeitenEinstellung,
} from "@/generated/graphql";
import MobileMenuContext from "@/context/mobile-menu-context";
import { getCookie } from "@/lib/util/cookie";
import ModalCookie from "@/modules/common/components/modal-cookie";

interface RootLayoutProps {
  navbar?: {
    localeList?: GetLocalesQuery;
    localeHandle: SeiteEntity[];
    singleType: SeitenEinstellung;
  };
  footer?: SeitenEinstellung;
  cookie?: GetCookieModalQuery;
}

export default function RootLayout({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData?: RootLayoutProps;
}) {
  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    const retrievedCookieValue = getCookie("COS_ACCEPT_ALL");
    setCookieValue(retrievedCookieValue);
  }, []);

  return (
    <>
      {!cookieValue && initialData?.cookie && (
        <ModalCookie
          close={() => {
            setModalOpen(!modalOpen);
          }}
          data={initialData.cookie}
          isOpen={modalOpen}
        />
      )}
      <MobileMenuContext>
        <NavbarTemplate navbarvalue={initialData?.navbar} />
      </MobileMenuContext>
      {children}
      <FooterTemplate footervalue={initialData?.footer} />
    </>
  );
}
