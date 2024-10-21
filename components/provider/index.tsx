"use client";

import { FC } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { store } from "@/store/store";

import { Props } from "./index.type";

const MyProvider: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center w-full h-full text-white">
      <Provider store={store}>{children}</Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"dark"}
      />
    </div>
  );
};

export default MyProvider;
