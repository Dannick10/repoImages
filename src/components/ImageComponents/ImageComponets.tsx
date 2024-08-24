import React from "react";
import Image from "next/image";
import { UserIcon } from "@/icon/icon";
import { frame } from "framer-motion";
import Link from "next/link";

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
};

const ImageComponets = ({ data }: Props) => {
  console.log(data);

  return (
    <section className="grid grid-cols-3 ">
      {data.map((photo) => (
        <div key={photo.id} className="card card-compact justify-center items-center bg-base-100 shadow-xl m-2">
          <Image
            src={photo.src.landscape}
            width={400}
            height={400}
            alt={photo.alt}
            className="object-cover"
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
                <p className="badge badge-success">{photo.photographer}</p>
                  </Link>
              </div>
            </div>
            <div className="text-base-300">
              <p>{photo.alt}</p>
            </div>
          </aside>
        </div>
      ))}
    </section>
  );
};

export default ImageComponets;
