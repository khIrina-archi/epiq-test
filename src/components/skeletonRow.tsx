import React from "react"

export function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      {/* ID */}
      <td className="px-6 py-4 align-middle">
        <div className="h-5 w-10 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
      </td>

      {/* Title */}
      <td className="px-6 py-4 align-middle">
        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
      </td>

      {/* Body */}
      <td className="px-6 py-4 align-middle">
        <div className="h-5 w-64 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-right align-middle space-x-2">
        <span className="inline-block h-8 w-16 bg-gray-200 dark:bg-gray-600 rounded-md"></span>
        <span className="inline-block h-8 w-16 bg-gray-200 dark:bg-gray-600 rounded-md"></span>
      </td>
    </tr>
  );
}
