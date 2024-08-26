import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  idData: undefined | Photo;
  closed: () => void;
  loadingID: boolean;
  idmodal: any
};

const Modal = ({ idData, closed, loadingID, idmodal }: modalProps) => {

  return (
    <AnimatePresence>
  <motion.article
    className={`h-full w-full fixed top-0 left-0 flex items-center justify-center overflow-hidden backdrop-blur-sm z-30`}
    onClick={closed}
    initial={{ opacity: 0, scale: -1 }}
    transition={{ duration: .5, delay: 0.2, type: 'spring' }}
    whileInView={{ opacity: 1, scale: 1 }}
    layoutId={idmodal}
  >
    <div
      className={`w-5/6 h-5/6 bg-base-300 shadow-2xl rounded-md`}
    >
      <div className=" w-full flex items-center justify-center overflow-hidden h-3/4">
        {idData?.src.large2x &&
        <Image
        src={idData.src.large2x}
        layout="responsive"
        width={200}
        height={200}
        alt={idData?.alt || 'foto pexels'}
        className="w-full h-40 object-cover"
        />
      }
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
                <Link href={idData?.photographer_url ?? '/'} target="_blank">
                  {idData?.photographer}
                </Link>
              </td>
              <td>
                {idData?.width}x{idData?.height}
              </td>
              <td>{idData?.avg_color}</td>
            </tr>
          </tbody>
        </table>
      </aside>
    </div>
  </motion.article>
  </AnimatePresence>
  )
};

export default Modal;
