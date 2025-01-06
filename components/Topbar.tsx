import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import logoImage from "@/public/Logo.png";
import Image from "next/image";
const Topbar = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-18 border-b bg-black border-gray-700">
        <div className="text-white ml-6">
          <Image src={logoImage.src} width={130} className="w-full object-contain h-[45px]" height={50} alt="logo" />
        </div>

        <form className="flex items-center w-full max-w-md mx-auto p-4">
          <div className="flex items-center bg-transparent   border-[#8C734A] overflow-hidden  border  border-color-border dark:color-border rounded-3xl w-3/5">
            <div className="px-3 border-e border-gray-300 dark:border-gray-600 flex items-center">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="w-3/5 p-2 text-sm text-white bg-transparent focus:outline-none dark:text-white border-color-border border-color-gradient"
              placeholder="Search"
              required
            />

            <div className="px-3 border-s border-gray-300 dark:border-gray-600 flex items-center">
              <CiMicrophoneOn className="text-white dark:text-gray-400 w-5 h-5" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Topbar;
