"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useClientSearchParams(setQuery: Function, setPage: Function) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParams = searchParams.get("query") ?? "city";
    const pageParam = searchParams.get("page") ?? "1";

    setQuery(queryParams);
    setPage(Number(pageParam));
  }, [searchParams, setQuery, setPage]);
}
