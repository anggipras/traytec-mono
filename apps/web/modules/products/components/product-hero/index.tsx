import React from "react";
import SectionHeader from "@/modules/common/components/section-header";
import LayoutContainer from "@/modules/layout/components/layout-container";

const ProductHero = () => {
  return (
    <div className="relative bg-gray-50 py-10">
      <LayoutContainer>
        <SectionHeader
          desc="Frame stacking trays are designed with a frame system to store more
        workpieces per footprint."
          title="Customer frame system creation process"
        />
        <div className="px-0 medium:px-44 w-full mt-10">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video medium:rounded-3xl"
            src="https://www.youtube.com/embed/z7uwg0ljdT0?rel=0"
            title="product_hero_video"
          />
        </div>
      </LayoutContainer>
    </div>
  );
};

export default ProductHero;
