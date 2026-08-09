import { useState, type ChangeEvent } from "react";
import cls from "./SearchFilter.module.css";

export const SearchFilter = ({ setSearchQuery }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={cls.search}>
      <input type="text" placeholder="Search..." onChange={onChange} />
    </div>
  );
};
