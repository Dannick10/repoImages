import { pages } from "next/dist/build/templates/app-page";
import React, { MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  page: number;
  totalPage: number;
  changePage: (e: MouseEvent<HTMLButtonElement>) => void;
  NextandPreviusPage: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Pagination = ({
  page,
  totalPage,
  changePage,
  NextandPreviusPage,
}: Props) => {
  const actualPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, totalPage);

  const generatePage = () => {
    const list = [];

    for (let i = actualPage; i <= endPage; i++) {
      list.push(
        <button
          className={`join-item btn ${page == i ? "btn-active" : ""}`}
          onClick={changePage}
        >
          {i}
        </button>
      );
    }
    return list;
  };

  return (
    <motion.div
      className="join"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.button
        className={`join-item btn ${page == 1 ? "btn-disabled" : ""}`}
        onClick={NextandPreviusPage}
        whileHover={{fontSize: 4}}
      >
        Voltar
      </motion.button>
      {generatePage()}
      <motion.button
        className={`join-item btn  ${page == totalPage ? "btn-disabled" : ""}`}
        onClick={NextandPreviusPage}
      >
        Avançar
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
