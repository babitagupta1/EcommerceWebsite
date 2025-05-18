import React from "react";

const ShimmerProductCard = () => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-2xl p-4 w-72 shadow-md bg-white">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-xl shimmer"></div>

      {/* Title Placeholder */}
      <div className="h-5 bg-gray-200 rounded w-3/4 shimmer"></div>

      {/* Description Placeholders */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full shimmer"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 shimmer"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 shimmer"></div>
      </div>

      {/* Price Placeholder */}
      <div className="mt-auto h-5 bg-gray-300 rounded w-1/3 shimmer"></div>
    </div>
  );
};

export default ShimmerProductCard;