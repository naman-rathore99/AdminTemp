import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";

const Users = async () => {



  return (
    <div className="h-screen w-full ">
      <div className="mb-4">
        <h1 className="text-white ml-1 mt-2 text-2xl font-bold">User</h1>
      </div>
      <div className="flex flex-col space-y-4   h-full ">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Card 1 */}
          {
            Array.from({ length: 10 }).map((_, index) => (
              <Link key={index} href={`/dashboard/users/${index + 1}`}>
                <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border  w-full max-w-sm rounded-t-lg overflow-hidden mx-auto ">
                  <div className="min-h-[245px]">
                    <Image
                      src="https://readymadeui.com/cardImg.webp"
                      alt="user"
                      className="w-full rounded-lg"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="text-center pb-2">
                    <h3 className="text-xl font-bold">Heading</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <button
                      type="button"
                      className="mt-2 px-5 py-2.5 w-1/2 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                    >
                      <div className="flex gap-2 items-center justify-center">
                        <CiMail /> Message
                      </div>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Users;