import React from "react";
import { motion } from "framer-motion";
import { DevIcon, GithubIcon, LinkedinIcon } from "@/icon/icon";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer flex justify-between bg-neutral text-neutral-content items-center p-4">
      <aside className="flex items-center gap-2items-center text-sm">
        <DevIcon />
        <p className="text-xs">
          Daniel Rocha Copyright © {new Date().getFullYear()} - All right
          reserved
        </p>
      </aside>
      <nav className="grid-flow-col">
        <ul className="flex text-xl gap-2">
          <li className="hover:brightness-125 cursor-pointer">
            <Link href={"https://github.com/Dannick10"} target="_blank">
              <GithubIcon />
            </Link>
          </li>
          <li className="hover:brightness-125 cursor-pointer">
            <Link
              href={"https://www.linkedin.com/in/futurodevdaniel/"}
              target={"_blank"}
            >
              <LinkedinIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
