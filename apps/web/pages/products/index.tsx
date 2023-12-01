import React from "react";
import ProductTemplate from "@/modules/products/templates";
import LayoutContainer from "@/modules/layout/components/layout-container";

const ProductPage: React.FC = () => {
  return (
    <LayoutContainer>
      <ProductTemplate />
    </LayoutContainer>
  );
};

export default ProductPage;
