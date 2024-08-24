import { ImageIcon, SearchIcon } from "@/icon/icon";
import React from "react";

type InputComponent = {
  placeholder?: string;
  query: string;
  onchange: (e: any) => void;
  handleSearch: () => void;
};

const InputComponent = (props: InputComponent) => {
  const placeholder = props.placeholder ?? "pesquisar";

  return (
    <div className="flex items-center gap-2">
      <label className="input input-bordered flex items-center gap-2 relative">
        <input
          type="text"
          className="grow"
          placeholder={placeholder}
          onChange={props.onchange}
        />
        <span className="text-3xl"></span>
        <ImageIcon />
      </label>
     
      <button className="btn btn-circle text-2xl" onClick={props.handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputComponent;
