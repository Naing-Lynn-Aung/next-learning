"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = { ...currentQuery, search: debouncedSearch };
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
  }, [debouncedSearch, router]);
  return (
    <Input
      placeholder="Search anything globally"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchInput;
