import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, UserIcon } from "@/icon/icon";
import { motion } from "framer-motion";
import Link from "next/link";
import Skeleton from "../skeleton";

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
  };
  url: string;
  width: number;
};

type Props = {
  data: Photo[];
  loading: boolean;
  handleGetId: (e:any) => void
};

const ImageComponets = ({ data, loading, handleGetId }: Props) => {


  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((photo) => (
        <motion.div
          key={photo.id}
          className={`card card-compact justify-center items-center bg-base-100 shadow-xl m-2 min-h-72 max-h-80`}
          initial={{ opacity: 0, right: 20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileInView={{ opacity: 1, right: 0 }}
          viewport={{ once: true }}   
        >
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <Image
                src={photo.src.landscape}
                width={400}
                height={400}
                alt={photo.alt}
                className="object-cover w-full"
                priority
              />
              <aside
                className="card-body w-full"
                style={{ background: photo.avg_color }}
              >
                <div className="flex items-center justify-start gap-2 text-success">
                  <div className=" avatar bg-white rounded-full ">
                    <Link href={photo.photographer_url} target="_blank">
                      <span className="text-xl">
                        <UserIcon />
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href={photo.photographer_url} target="_blank">
                      <p className="badge badge-success">
                        {photo.photographer}
                      </p>
                    </Link>
                  </div>            
                </div>
                <div className="text-base-300 text-nowrap w-full text-ellipsis overflow-clip">
                  <p>{photo.alt}</p>
                </div>
                <motion.div className="text-center flex justify-center text-4xl text-base-300 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent w-full absolute right-0 bottom-0 h-full cursor-pointer"
                layoutId={photo.id.toString()}
                id={photo.id.toString()}
                initial={{opacity: 0, y: -20}}
                transition={{duration: .4}}
                whileHover={{opacity: 1, y: 0}}
                onClick={handleGetId}
                data-id={photo.id}
                >
                <span ><ArrowDown /></span>
                </motion.div>
              </aside>
            </>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default ImageComponets;
