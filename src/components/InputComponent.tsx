import { ImageIcon, SearchIcon } from "@/icon/icon";
import React from "react";
import { motion } from "framer-motion";

type InputComponent = {
  placeholder?: string;
  query: string;
  onchange: (e: any) => void;
  handleSearch: () => void;
};

const InputComponent = (props: InputComponent) => {
  const placeholder = props.placeholder ?? "pesquisar";

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <label className="input input-bordered flex items-center gap-2 relative">
        <motion.input
          type="text"
          className="grow"
          placeholder={placeholder}
          onChange={props.onchange}
          transition={{ ease: "linear", duration: 0.1 }}
          whileFocus={{ scale: 1.1 }}
        />
        <span className="text-3xl"></span>
        <ImageIcon />
      </label>

      <motion.button
        className="btn btn-circle text-xl"
        onClick={props.handleSearch}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SearchIcon />
      </motion.button>
    </motion.div>
  );
};

export default InputComponent;
