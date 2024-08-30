import React, { MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  page: number;
  totalItems: number;
  quantitforPage: number
  changePage: (e: MouseEvent<HTMLButtonElement>) => void;
  NextandPreviusPage: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Pagination = ({
  page,
  totalItems,
  quantitforPage,
  changePage,
  NextandPreviusPage,
}: Props) => {

  const totalPage = Math.ceil(totalItems / quantitforPage)
  const actualPage = Math.max(page - 3, 1);
  const endPage = Math.min(page + 3, totalPage);

  const generatePage = () => {
    const list = [];

    for (let i = actualPage; i <= endPage; i++) {
      list.push(
        <button
          className={`join-item btn ${Number(page) == i ? "btn-disabled" : ""}`}
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
        className={`join-item btn ${Number(page) == 1 ? "btn-disabled" : ""}`}
        onClick={NextandPreviusPage}
        whileHover={{fontSize: 4}}
      >
        Voltar
      </motion.button>
      {generatePage()}
      <motion.button
        className={`join-item btn  ${Number(page) === totalPage ? "btn-disabled" : ""}`}
        onClick={NextandPreviusPage}
      >
        Avançar
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
