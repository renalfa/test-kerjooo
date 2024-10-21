import React, { FC } from "react";

import { Props } from "./index.type";

const CardPost: FC<Props> = ({ title, body }) => {
  return (
    <li className="flex flex-col gap-2 py-2 px-4 rounded-xl border text-sm bg-gradient-to-br from-[#1b2139] to-[#121628] border-[#38435a]">
      <h2 className="font-bold">{title}</h2>
      <p className="font-light tracking-normal text-slate-300">{body}</p>
    </li>
  );
};

export default CardPost;
