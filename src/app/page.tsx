"use client";
import React, { useState } from "react";
import usePexelsAPI from "@/services/PexelsAPI";
import { useEffect } from "react";
import ImageComponets from "@/components/ImageComponents/ImageComponets";
import Title from "@/components/Title";
import InputComponent from "@/components/InputComponent";
import Pagination from "@/components/Pagination";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const {
    data,
    FetchData,
    query,
    SetQuery,
    page,
    SetPage,
    idData,
    SetidData,
    FetchDataID,
    loading,
    loadingID,
  } = usePexelsAPI();
  const [modal, SetModal] = useState<boolean>(false);
  const [idModal, SetidModal] = useState(null);
  const router = useRouter();

  useEffect(() => {
    FetchData();
    router.push(`?query=${encodeURIComponent(query)}&page=${page}`);
  }, [page]);

  const handleSearch = () => {
    FetchData();
    SetPage(1);
    scroll(0, 0);
    router.push(`?query=${encodeURIComponent(query)}&page=${page}`);
  };

  const changePage = (e: any) => {
    SetPage(e.target.innerHTML);
    scroll(0, 0);
  };

  const NextandPreviusPage = (e: any) => {
    scroll(0, 0);
    const buttonText = e.currentTarget.textContent?.toLowerCase();

    if (buttonText === "voltar") {
      SetPage(Number(page) - 1);
    } else {
      SetPage(Number(page) + 1);
    }
  };

  const handleGetId = (e: any) => {
    const id = e.currentTarget.dataset["id"];
    FetchDataID(id);
    SetidModal(id);
    SetModal(true);
  };

  const closemodal = () => {
    SetModal(false);
    SetidModal(null);
    SetidData(undefined);
  };

  return (
    <main className="min-h-screen w-full px-4 py-6 gap-2 flex flex-col">
       <Suspense fallback={<div className="loading-spinner loading-lg">Loading...</div>}>

      
      <InputComponent
        query={query}
        onchange={(e) => SetQuery(e.target.value)}
        handleSearch={handleSearch}
      />
      {data && (
        <>
          <Title
            text={`${data.total_results ?? "0"} results, page ${data.page}`}
          />
          <ImageComponets
            data={data.photos}
            loading={loading}
            handleGetId={handleGetId}
          />

          <nav className="flex justify-center items-center my-6">
            <Pagination
              page={data.page}
              totalItems={data.total_results}
              quantitforPage={data.per_page}
              changePage={changePage}
              NextandPreviusPage={NextandPreviusPage}
            />
          </nav>
        </>
      )}
      {modal && (
        <Modal
          idData={idData}
          closed={closemodal}
          loadingID={loadingID}
          idmodal={idModal}
        />
      )}
       </Suspense>
    </main>
  );
}
