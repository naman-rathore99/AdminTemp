import React from 'react'

const InputBar = () => {
  return (
    <div className="relative w-full max-w-md">
      {/* Search bar container */}
      <div className="flex items-center bg-transparent border border-[#8C734A] rounded-full overflow-hidden">
        {/* Left Icon */}
        <div className="p-2 pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.7-4.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
        </div>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent placeholder-[#8C734A] text-gray-200 focus:outline-none"
        />
        {/* Right Icon */}
        <div className="p-2 pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 3a1 1 0 011 1v5a1 1 0 01-.293.707l-2.5 2.5a1 1 0 01-1.414-1.414L8 9.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default InputBar