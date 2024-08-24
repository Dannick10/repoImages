'use client'

import axios from "axios";
import { useState } from "react";

export default function usePexelsAPI () {
    const key = process.env.NEXT_PUBLIC_API_KEY
    const [query,SetQuery] = useState<string>('beach')
    const [data,SetData] = useState<any>()
    
    const FetchData = async () => {

        const link = `https://api.pexels.com/v1/search?query=${query}`

        try{
            const response = await axios.get(link, {
                headers: {
                    Authorization: key
                }
            })
            SetData(response.data)
        } catch ( error: any ) {
            console.log('error na api Axios:')
        }
            
    }

    return {
        data,
        FetchData,
        query,
        SetQuery
    }
  
}