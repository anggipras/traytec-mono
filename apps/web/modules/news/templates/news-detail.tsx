import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutContainer from "@/modules/layout/components/layout-container";
import Card from "@/modules/common/components/card";

const NewsDetailTemplate = () => {
  // this data is later fetch from graphql news detail by req param
  const sampleNewsDetail = {
    title: "Innovative process management",
    createdDate: "Nov 27, 2023",
    imgDesc: "Project Manager Patrick Weßling (Technical product designer)",
    desc: "Lörem ipsum spegt vagt att kvasiheten, än povis, kor i krosade om än geoledes huruvida kontratyp ugen gäss interaktiv skrivtavla än fönisade egovis piplande teleling. Masam saskapet om nir dekår läslov, plall digiv tragisk eller gyliga missmatchning tegirade och vårdskuld väkrologi, i taspede. Prerad tibelt tetira såsom givomat, med fickla. An regnbågskväll och plasade det vill säga nemebän fast böledes tiheten. Plabösamma polig lolaska girädade bioliga, i tirade ponde roföd i viktig. Sebepp viback symyr. Mikrosat lopesm igt beling men ang reans ljudaffisch best, därför att digital-tv, men pebös antropomani. Tevis sode. Krosonade ägäheten, trel ambisiv förutom telefiering: inte tesat pohast, utan begilogi, diant par i pohipesade öbelt liksom låskade, sönessade. Bröllopsklänning sar, transtiv, kåfövis. Oras satresam, polyvung då virat, nespenade om vor de polyren tivåning, i egonelingar suprasamma syfir det vill säga homossa spett sobekåvis mijånat. Debel astron miv sör, liksom nyfön ifall låvärat nigon hypohosa, i jåskade: trev rer, tijåna tredilig ojesov netesamma loginat. Nenas sasamma dir gähisade, makrorade snurrmästare utan vovode, nessade. Tell pressa som gyr våck, fast beslutsblindhet, intrar jag jår fredsring, poharas ävis vobening. Gyv ose sol kalsongbombare som jis lavuling: vapera för att tritism avoktigt medan hipesamma, nenar om monoktiga diabövis ygt savåning. Rosågt lör. Bäs poning autogt tiförade assade, jeda triage defiktig i tiheten, ofaska respektive sms-anställning i endiktisk. Vina avura, faktaresistens och ultrak analiga tida därför att belåsk kvasiföre. Dinade decibel och ade ivis reagyn ren inte homong skynka heterodere vade, niktig till örådisera. Megast fövusk gitengen. Tins spesortad kåvogisk och bera i nid SMS-meddelande, tel spenade fast jelödade. Per pejången.",
    image: require("@/assets/images/common/img_example_news.png"),
    slug: "news-1",
    social_media: [
      {
        media_name: "instagram",
        icon: require("@/assets/images/icons/ic_facebook.svg"),
        link: "",
      },
      {
        media_name: "twitter",
        icon: require("@/assets/images/icons/ic_facebook.svg"),
        link: "",
      },
      {
        media_name: "facebook",
        icon: require("@/assets/images/icons/ic_facebook.svg"),
        link: "",
      },
      {
        media_name: "copylink",
        icon: require("@/assets/images/icons/ic_facebook.svg"),
        link: "",
      },
    ],
  };
  const sampleLatestNews = [
    {
      title:
        "FachPack 2022 We cordially invite you to visit us in hall 7 at booth",
      desc: "Nov 27, 2023",
      image: require("@/assets/images/common/img_example_news.png"),
      slug: "news-2",
    },
    {
      title: "traytec - developer of identification systems for trays",
      desc: "Nov 27, 2023",
      image: require("@/assets/images/common/img_example_news.png"),
      slug: "news-3",
    },
    {
      title: "FachPack 2019",
      desc: "Nov 27, 2023",
      image: require("@/assets/images/common/img_example_news.png"),
      slug: "news-4",
    },
    {
      title: "traytec awarded as top innovator",
      desc: "Nov 27, 2023",
      image: require("@/assets/images/common/img_example_news.png"),
      slug: "news-5",
    },
  ];

  return (
    <LayoutContainer>
      <div className="mx-[140px] mt-10 mb-32.5">
        <div className="typo-h2">{sampleNewsDetail.title}</div>
        <div className="typo-copy-normal my-3">
          {sampleNewsDetail.createdDate}
        </div>
        <div className="flex gap-5">
          {sampleNewsDetail.social_media.map((val, idx) => {
            return (
              <div
                className="self-center rounded-full border border-gray-100 p-2"
                key={idx}
              >
                <Image alt="footer_socmed_fb" className="w-8" src={val.icon} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="rounded-3xl">
            <Image
              alt="news-detail--headline-img"
              className="max-w-full"
              src={sampleNewsDetail.image}
            />
          </div>
          <div className="typo-copy-normal text-gray-400 italic mt-4">
            {sampleNewsDetail.imgDesc}
          </div>
        </div>
        <div className="flex mt-10 gap-5">
          <div className="typo-copy-normal max-w-3xl">
            {sampleNewsDetail.desc}
          </div>
          <div>
            <div className="typo-h4 mb-2">Latest News</div>
            {sampleLatestNews.map((val, idx) => {
              return (
                <Link href={`/news/${val.slug}`} key={idx}>
                  <div className="py-4 border-b border-gray-200">
                    <Card
                      cursor="cursor-pointer"
                      subcontent={val.desc}
                      title={val.title}
                      titleClass="typo-h5"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default NewsDetailTemplate;
