import React from "react";
import ProductHero from "@/modules/products/components/product-hero";
import ProductPreview from "@/modules/products/components/product-preview";

const ProductTemplate: React.FC = () => {
  return (
    <>
      <ProductHero />
      <ProductPreview />
    </>
  );
};

export default ProductTemplate;
