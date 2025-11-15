"use client";

import queryString from "query-string";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Filters() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "");
  const router = useRouter();
  const handleFilter = (filterType: string) => {
    if (filterType === filter) {
      setFilter("");
    } else {
      setFilter(filterType);
    }
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = {
      ...currentQuery,
      filter: filterType === filter ? "" : filterType,
    };
    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  };
  return (
    <div className="flex space-x-6 p-5">
      <button
        onClick={() => handleFilter("react")}
        className={`${
          filter === "react" ? "bg-main" : "bg-tertiary"
        } text-gray-300 px-4 py-2 rounded-xl w-[100px]`}
      >
        React
      </button>
      <button
        onClick={() => handleFilter("vue")}
        className={`${
          filter === "vue" ? "bg-main" : "bg-tertiary"
        } text-gray-300 px-4 py-2 rounded-xl w-[100px]`}
      >
        Vue
      </button>
    </div>
  );
}

export default Filters;
