import { FC } from "react";

import { GoSearch } from "react-icons/go";

import { Props } from "./index.type";

const SearchBar: FC<Props> = ({ searchTerm, setSearchTerm }) => (
  <label className="flex mx-auto items-center max-w-md md:max-w-xs py-2 px-4 rounded-lg border outline-none text-sm bg-[#1f243f] border-[#38435a] placeholder:text-white/50">
    <input
      type="text"
      placeholder="Search by title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full bg-transparent border-none outline-none"
    />
    <GoSearch className="ml-2" />
  </label>
);

export default SearchBar;
