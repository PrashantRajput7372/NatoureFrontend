import {  useState } from "react";
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");
  const [sort, setSort] = useState("");
  
  return (
    <FilterContext.Provider
      value={{ difficulty, setDifficulty, sort, setSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
