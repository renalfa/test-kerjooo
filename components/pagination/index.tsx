import { FC } from "react";

import { Props } from "./index.type";

const Pagination: FC<Props> = ({
  currentPage,
  totalPosts,
  postsPerPage,
  paginate,
}) => (
  <div className="flex justify-end gap-2 pb-10">
    {Array.from(
      { length: Math.ceil(totalPosts / postsPerPage) },
      (_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={`${
            currentPage === index + 1
              ? "font-bold text-[#137cea] border-[#137cea]"
              : "border-[#38435a]"
          } w-10 aspect-square flex items-center justify-center border bg-[#1f243f] rounded-full`}
        >
          {index + 1}
        </button>
      )
    )}
  </div>
);

export default Pagination;
