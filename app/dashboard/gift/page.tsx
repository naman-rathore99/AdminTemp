import React from 'react';
import { GoPaperclip } from 'react-icons/go';
import { CiImageOn } from 'react-icons/ci';

const Giftpage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white h-full">
      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Gift Management</h1>

          <div className="space-y-6">
            {/* Gift Name and Gift Coin Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="gift-name"
                  className="block text-sm font-medium mb-2"
                >
                  Gift Name
                </label>
                <select
                  id="gift-name"
                  className="w-full bg-transparent border text-black border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="select gift name">Select Gift Name</option>
                  <option value="gift1">Gift 1</option>
                  <option value="gift2">Gift 2</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="gift-amount"
                  className="block text-sm font-medium mb-2"
                >
                  Gift Coin Amount
                </label>
                <input
                  type="text"
                  id="gift-amount"
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload the Gift File
                </label>
                <button className="w-full md:w-auto border-[#8C734A] border text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  Upload File
                  <GoPaperclip />
                </button>
              </div>

              {/* Gift Icon */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload the Gift Icon
                </label>
                <div className="w-full h-40 md:h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer hover:border hover:border-[#8C734A] hover:text-[#8C734A]">
                  <CiImageOn size={'4xl'} />
                </div>
                <p className="text-center text-gray-500 text-sm mt-2">
                  Upload the Gift Icon
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Giftpage;
