import CertificateSection from "@/modules/home/components/certificates";
import LayoutContainer from "@/modules/layout/components/layout-container";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";
import type {
  ComponentHerosHero1,
  ComponentSliderHorizontalerSlider,
  ComponentSliderHorizontalerSliderFokus,
} from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Componentutilsheading_Typ,
} from "@/generated/graphql";

const HomeTemplate = () => {
  const contentItem: ComponentHerosHero1 = {
    __typename: "ComponentHerosHero1",
    button: [
      {
        __typename: "ComponentUtilsButton",
        id: "1",
        text: "Find out your needs",
        url: "",
        variante: Enum_Componentutilsbutton_Variante.Primary,
      },
    ],
    hintergrund: {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        attributes: {
          __typename: "UploadFile",
          ext: "mp4",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 1,
          url: "/videos/traytec_home.mp4",
        },
      },
    },
    id: "1",
    sichtbar: true,
    ueberschrift: {
      __typename: "ComponentUtilsHeading",
      heading: "Service provider for high quality Plastic",
      id: "1",
      text: "Service Provider Manufacturing Trays, inserts, workpiece containers, lids and more from a variety of plastics for all applications",
      topline: "Let`s work with Traytect",
      typ: Enum_Componentutilsheading_Typ.H1,
    },
  };

  const horizontalSliderItemProcess: ComponentSliderHorizontalerSlider = {
    __typename: "ComponentSliderHorizontalerSlider",
    cards: [
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "1",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "2",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "3",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "4",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "5",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "6",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_book.png"),
              },
            },
          ],
        },
        id: "7",
        text: "Planning & control taking into account material availability and resource capacities",
        ueberschrift: "Production Scheduling",
      },
    ],
    id: "1",
    sichtbar: true,
    uberschrift: {
      __typename: "ComponentUtilsHeading",
      heading: "How it works",
      id: "1",
      text: "Service Provider Manufacturing Trays, inserts, workpiece containers, lids and more from a variety of plastics for all applications",
      topline: "How to order proccess",
      typ: Enum_Componentutilsheading_Typ.H1,
    },
  };

  const horizontalSliderItemTestimonial: ComponentSliderHorizontalerSlider = {
    __typename: "ComponentSliderHorizontalerSlider",
    cards: [
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_avatar.png"),
              },
            },
          ],
        },
        id: "1",
        text: "“ I am very happy with the quality of the plastic products offered by this company. I have been using their Manufacturing Trays, inserts, workpiece containers, and lids for several months now, and they have proven to be very durable and reliable “",
        ueberschrift: "Arlene McCoy",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_avatar.png"),
              },
            },
          ],
        },
        id: "2",
        text: "“ I am very happy with the quality of the plastic products offered by this company. I have been using their Manufacturing Trays, inserts, workpiece containers, and lids for several months now, and they have proven to be very durable and reliable “",
        ueberschrift: "Kathryn Murphy",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_avatar.png"),
              },
            },
          ],
        },
        id: "3",
        text: "“ I am very happy with the quality of the plastic products offered by this company. I have been using their Manufacturing Trays, inserts, workpiece containers, and lids for several months now, and they have proven to be very durable and reliable “",
        ueberschrift: "Bessie Cooper",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_avatar.png"),
              },
            },
          ],
        },
        id: "4",
        text: "“ I am very happy with the quality of the plastic products offered by this company. I have been using their Manufacturing Trays, inserts, workpiece containers, and lids for several months now, and they have proven to be very durable and reliable “",
        ueberschrift: "Arlene McCoy",
      },
      {
        __typename: "ComponentSliderSliderCard",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_avatar.png"),
              },
            },
          ],
        },
        id: "5",
        text: "“ I am very happy with the quality of the plastic products offered by this company. I have been using their Manufacturing Trays, inserts, workpiece containers, and lids for several months now, and they have proven to be very durable and reliable “",
        ueberschrift: "Bessie Cooper",
      },
    ],
    id: "1",
    sichtbar: true,
    uberschrift: {
      __typename: "ComponentUtilsHeading",
      heading: "What people say about our products",
      id: "1",
      text: "What people say about our products",
      topline: "Testimonial",
      typ: Enum_Componentutilsheading_Typ.H1,
    },
  };

  const horizontalSliderFocusItem: ComponentSliderHorizontalerSliderFokus = {
    __typename: "ComponentSliderHorizontalerSliderFokus",
    cards: [
      {
        __typename: "ComponentSliderSliderCard2",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_tools.png"),
              },
            },
          ],
        },
        id: "1",
        text: "Innovative design for beauty product storage and easy access",
        ueberschrift: "Automotive",
      },
      {
        __typename: "ComponentSliderSliderCard2",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_tools.png"),
              },
            },
          ],
        },
        id: "2",
        text: "Innovative design for beauty product storage and easy access",
        ueberschrift: "Electronict",
      },
      {
        __typename: "ComponentSliderSliderCard2",
        icon: {
          __typename: "UploadFileRelationResponseCollection",
          data: [
            {
              __typename: "UploadFileEntity",
              attributes: {
                __typename: "UploadFile",
                hash: "",
                mime: "",
                name: "",
                provider: "",
                size: 1,
                url: require("@/assets/images/common/img_example_tools.png"),
              },
            },
          ],
        },
        id: "3",
        text: "Innovative design for beauty product storage and easy access",
        ueberschrift: "Automotive",
      },
    ],
    id: "1",
    sichtbar: true,
    ueberschrift: {
      __typename: "ComponentUtilsHeading",
      heading: "Choose Your Needs",
      id: "1",
      text: "Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes",
      topline: "Industry Service",
      typ: Enum_Componentutilsheading_Typ.H1,
    },
  };

  return (
    <>
      {renderDynamicContent(contentItem, null)}
      <LayoutContainer>
        {renderDynamicContent(horizontalSliderItemProcess, "nowrap")}
        {renderDynamicContent(horizontalSliderFocusItem, null)}
        <CertificateSection />
        {renderDynamicContent(horizontalSliderItemTestimonial, "normal")}
      </LayoutContainer>
    </>
  );
};

export default HomeTemplate;
