import React from 'react'
import Charts from '../../../components/Chart/Chart';
import Image from 'next/image';

const AgenciesProfile = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <Image
              src="https://picsum.photos/200/300?random=1"
              alt="Profile"
              width={240}
              height={240}
              className="rounded-lg border border-gray-300 w-60 h-60 object-cover"
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
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="location"
                    id="locatino"
                    placeholder="Location"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="text"
                    name="coin balance"
                    id="coin balance"
                    placeholder="coin balance"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <select
                    value="defaultValue"
                    id="dob"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="active">Active</option>
                    <option value="suspand">Suspand</option>
                    <option value="delete">Delete</option>
                  </select>
                </div>
              </div>
              <div className="-mx-3 flex items-center justify-between flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <select
                    value="List of Creator"
                    id="listofcreators"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="active">List of Creator</option>
                    <option value="suspand">Suspand</option>
                    <option value="delete">Delete</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <select
                    value="Invoice"
                    id="inovice"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="active">Invoice</option>
                    <option value="suspand">Suspand</option>
                    <option value="delete">Delete</option>
                  </select>
                </div>
              </div>
              {/* <div>
                            <button
                                type="submit"
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full">
                                Submit
                            </button>
                        </div> */}
            </form>
          </div>
        </div>
        <div className="p-6 m-6 bg-white rounded-lg items-center max-w-full shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-black ">
            Monetization
          </h3>
          <div className="h-64 flex items-center  rounded-lg">
            <Charts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesProfile