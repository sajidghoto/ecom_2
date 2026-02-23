import React from "react";

const SkeletonLoader = ({ variant = "default" }) => {
  if (variant === "product-card") {
    return (
      <div className="space-y-3 w-full">
        <div className="h-[220px] w-[150px] bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
        <div className="space-y-2 px-3">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (variant === "top-product-card") {
    return (
      <div className="md:pt-1 sm:pt-20 sm:pb-3 pt-20 sm:max-h-[300px] sm:max-w-[300px] w-full rounded-2xl bg-white dark:bg-gray-700 shadow-xl relative">
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="max-w-[140px] h-[140px] bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
          <div className="space-y-2 w-full px-6">
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mx-auto"></div>
            <div className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mx-auto"></div>
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "product-details") {
    return (
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="w-full h-96 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
          <div className="mt-4 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse mt-4"></div>
        </div>
      </div>
    );
  }

  // Default skeleton
  return (
    <div className="space-y-2">
      <div className="h-40 w-full bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
      <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
