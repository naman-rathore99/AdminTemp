'use client'
import React, { useState } from "react";
import Charts from "../../../components/Chart/Chart";
import Image from "next/image";

const Profile = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    location: '',
    dob: '',
    coinBalance: '',
    status: 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <Image
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-lg border border-gray-300 w-60 h-60 object-cover"
              width={150}
              height={150}
            />
          </div>

          <div className="md:w-2/3 text-white text-4xl">
            <form>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    value={formData.fName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    value={formData.lName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="coinBalance"
                    id="coinBalance"
                    placeholder="Coin Balance"
                    value={formData.coinBalance}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    id="status"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    <option value="deleted">Deleted</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-6 m-6 bg-white rounded-lg items-center max-w-full shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-black ">Sales Details</h3>
        <div className="h-64 flex items-center  rounded-lg">
          <Charts />
        </div>
      </div>
    </section>
  );
};

export default Profile;
