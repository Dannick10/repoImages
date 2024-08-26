"use client";
import React, { MouseEvent } from "react";
import usePexelsAPI from "@/services/PexelsAPI";
import { ButtonHTMLAttributes, useEffect } from "react";
import ImageComponets from "@/components/ImageComponents/ImageComponets";
import Title from "@/components/Title";
import InputComponent from "@/components/InputComponent";
import Pagination from "@/components/Pagination";
import Skeleton from "@/components/skeleton";

export default function Home() {
  const { data, FetchData, query, SetQuery,page, SetPage, idData,FetchDataID, loading } = usePexelsAPI();

  useEffect(() => {
    FetchData();
  }, [page]);

  const handleSearch = () => {
    FetchData();
    SetPage(1)
    scroll(0, 0);
  };

  const changePage = (e: MouseEvent<HTMLButtonElement>) => {
    SetPage(e.target.innerHTML);
    scroll(0, 0);
  };

  const NextandPreviusPage = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
    scroll(0, 0);
      if(e.target.innerHTML.toLowerCase() == 'voltar') {
        SetPage(Math.floor(page - 1))
      } else {
        SetPage(Math.floor(page + 1))
      }
  }

  const handleGetId = (e) => {
    const id = e.target.dataset['id']
    FetchDataID(id)
 
  }

  console.log(data);
  return (
    <main className="min-h-screen w-full p-24 gap-2 flex flex-col" data-theme="lofi">
      <InputComponent
        query={query}
        onchange={(e) => SetQuery(e.target.value)}
        handleSearch={handleSearch}
      />
      {data && (
        <>
          <Title text={`${data.total_results ?? "0"} results, page ${data.page}`} />
          <ImageComponets data={data.photos}   loading={loading} handleGetId={handleGetId}/>
     
          <nav className="flex justify-center items-center my-6">
          <Pagination
            page={data.page}
            totalPage={data.total_results}
            changePage={changePage}
            NextandPreviusPage={NextandPreviusPage}
            />
            </nav>
           
        </>
      ) 
      }
    </main>
  );
}
