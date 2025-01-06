'use client';

import { IUser } from "@/interface/IUser";
import { useUsers } from "@/utils/hooks/useUsers";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

const UserCard = ({ user }: { user: IUser }) => (
  <Link href={`/dashboard/users/${user.id}`}>
    <div className="bg-white text-black shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      <div className="relative w-full pt-[75%]">
        <Image
          src={
            user.avatar?.startsWith("https")
              ? user.avatar
              : "https://readymadeui.com/cardImg.webp"
          }
          alt={`${user.firstName || "User"} ${user.lastName || ""}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col items-center flex-grow">
        <h3 className="text-lg md:text-xl font-bold truncate">
          {user.firstName || "Not Available"} {user.lastName}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {user.username || "Lorem ipsum dolor sit amet, consectetur"}
        </p>
        <div className="mt-auto pt-4">
          <button
            type="button"
            className="w-full px-4 py-2 rounded-lg text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <CiMail className="text-lg" />
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  </Link>
);

const LoadingState = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-gray-200 rounded-xl h-48" />
        <div className="mt-4 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>
      </div>
    ))}
  </div>
);

const Users = () => {
  const { isLoading, error, users } = useUsers(); // All users fetched at once
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 10;

  const totalPages = Math.ceil((users?.length || 0) / USERS_PER_PAGE);

  const renderUsers = users?.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  if (error) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center">
        <div className="text-center bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">Error</h2>
          <p className="mt-2 text-red-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 md:p-6">
      <div className="mb-6 md:mb-8 flex justify-between items-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Users</h1>

        <Link
          href={'/dashboard/users/new'}
          onClick={handlePrevious}
          className="px-4 py-2 bg-[#A39160] text-white rounded-lg"
        >
          Add New User
        </Link>
      </div>

      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderUsers?.map((user: IUser) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              disabled={currentPage === 1}
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={handleNext}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
