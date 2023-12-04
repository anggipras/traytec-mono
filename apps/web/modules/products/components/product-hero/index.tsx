import React from "react";

const ProductHero = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-10">
      <div className="typo-h2 mb-4 px-6 medium:px-0 text-center medium:text-center">
        Customer frame system creation process
      </div>
      <div className="typo-copy-normal mb-6 text-gray-400 px-6 medium:px-0 text-center medium:text-center">
        Frame stacking trays are designed with a frame system to store more
        workpieces per footprint.
      </div>
      <div className="px-0 medium:px-44 w-full">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          height="517"
          src="https://www.youtube.com/embed/C7OQHIpDlvA"
          title="ntaps"
          width="100%"
        />
      </div>
    </div>
  );
};

export default ProductHero;
