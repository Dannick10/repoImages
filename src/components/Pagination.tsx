import { pages } from 'next/dist/build/templates/app-page'
import React from 'react'

type Props = {
    page: number
    totalPage: number
}

const Pagination = ({page,totalPage}: Props) => {

    const actualPage = Math.max(page - 2, 1)
    const endPage = Math.min(page + 2, totalPage)
    
    const generatePage = () => {
        const list = []
        
        for(let i = actualPage; i <= endPage; i++) {
                list.push(<button className={`join-item btn ${page == i ? 'btn-active':''}`}>{i}</button>)
        }
        return list
    }

  return (
    <div className="join">

    {generatePage()}

    </div>
  )
}

export default Pagination