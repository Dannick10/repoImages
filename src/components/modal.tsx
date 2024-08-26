import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@/icon/icon";

type Photo = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    large2x: string;
  };
  url: string;
  width: number;
};

type modalProps = {
  idData: Photo;
  closed: () => void
  loadingID: boolean
};

const Modal = ({ idData, closed, loadingID }: modalProps) => {
  return !loadingID ? (
    <motion.article className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center"
    onClick={closed}
    >
      <div className="w-5/6 h-5/6 bg-base-300 shadow-2xl rounded-md">
        <div className=" w-full flex items-center justify-center overflow-hidden h-3/4">
          <Image
            src={idData?.src.large2x}
            layout="responsive"
            width={200}
            height={200}
            alt={idData?.alt}
            className="w-full h-40 object-cover"
          />
        </div>
        <aside className="text-accent ">
          <table className="table ">
            <thead>
              <tr className="border-none">
                <th>Autor</th>
                <th>Dimension</th>
                <th>Cor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-none">
                <td>
                  <Link href={idData.photographer_url} target="_blank">
                    {idData.photographer}
                  </Link>
                </td>
                <td>
                  {idData.width}x{idData.height}
                </td>
                <td>{idData.avg_color}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </motion.article>
  ): (
    <motion.article className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center"
    onClick={closed}
    initial={{opacity: 0, scale: 0, rotate: 90}}
    transition={{duration: .3}}
    whileInView={{opacity: 1, scale: 1, rotate: 0}}
    >
      <div className="skeleton w-5/6 h-5/6 shadow-2xl rounded-md">
      
      </div>
    </motion.article>
  )
};

export default Modal;
