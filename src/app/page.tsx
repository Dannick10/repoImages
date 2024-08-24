"use client";

import usePexelsAPI from "@/services/PexelsAPI";
import { useEffect } from "react";
import ImageComponets from "@/components/ImageComponents/ImageComponets";
import Title from "@/components/Title";
import InputComponent from "@/components/InputComponent";
import Pagination from "@/components/Pagination";

export default function Home() {
  const { data, FetchData, query, SetQuery } = usePexelsAPI();

  useEffect(() => {
    FetchData();
  }, []);

  const handleSearch = () => {
    FetchData();
  };

  console.log(data);
  return (
    <main className="min-h-screen w-full p-24 gap-2 flex flex-col">
      <InputComponent
        query={query}
        onchange={(e) => SetQuery(e.target.value)}
        handleSearch={handleSearch}
      />

      {data && (
        <>
          <Title text={`${data.total_results ?? "0"} results`} />
          <ImageComponets data={data.photos} />
          <Pagination page={data.page} totalPage={data.per_page} />
        </>
      )}
    </main>
  );
}