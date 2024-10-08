"use client";
import { useSearchParams } from "next/navigation";

import axios from "axios";
import { useEffect, useState } from "react";

export default function usePexelsAPI() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [data, SetData] = useState<any>();
  const [idData, SetidData] = useState();
  const [query, SetQuery] = useState<string>( searchParams.get("query") || 'city');
  const [page, SetPage] = useState<number>(pageParam ? parseInt(pageParam) : 1);
  const [loading, Setloading] = useState<boolean>(false);
  const [loadingID, SetloadingID] = useState<boolean>(false);


  const FetchData = async () => {
    Setloading(true);
    const link = `https://api.pexels.com/v1/search?query=${query}&page=${page}`;

    try {
      const response = await axios.get(link, {
        headers: {
          Authorization: key,
        },
      });
      SetData(response.data);
    } catch (error: any) {
      console.log("error na api Axios:" + error);
    }
    Setloading(false);
  };

  const FetchDataID = async (id: string) => {
    const link = `https://api.pexels.com/v1/photos/${id}`;
    SetloadingID(true);
    try {
      const response = await axios(link, {
        headers: {
          Authorization: key,
        },
      });
      SetidData(response.data);
      console.log(idData);
    } catch (error: any) {
      console.log("error na api: " + error);
    }
    SetloadingID(false);
  };

  return {
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
  };
}
