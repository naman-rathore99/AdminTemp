import { BsGraphUp } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import Charts from "../components/Chart/Chart";

export default function Home() {
  return (
    <div className="h-screen w-full z-10">
      <div className="mb-2 mt-4">
        <h1 className="text-white ml-1 text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col p-2 space-y-6  text-white h-full ">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Card 1 */}
          <div className="bg-white text-gray-700  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
            <div className="flex items-center">
              <p className="text-sm font-semibold  flex-1">Total Users</p>
              <div className="bg-[#e4e3ff] w-12 h-12 p-1 flex items-center justify-center rounded-2xl cursor-pointer">
                <LuUsers color="#3D42DF" size={24} />
              </div>
            </div>

            <div className="flex items-center">
              <h3 className="text-2xl font-bold flex-1">1000</h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-gray-700  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
            <div className="flex items-center">
              <p className="text-sm font-semibold  flex-1">Total Downlaods</p>
              <div className="bg-[#fff3d6] w-12 h-12 p-1 flex items-center justify-center rounded-2xl cursor-pointer">
                <FiBox color="#FEC53D" size={24} />
              </div>
            </div>

            <div className="flex items-center">
              <h3 className="text-2xl font-bold flex-1">1000</h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-gray-700  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
            <div className="flex items-center">
              <p className="text-sm font-semibold  flex-1">
                Total Coin Purchase
              </p>
              <div className="bg-[#d0f7e9] w-12 h-12 p-1 flex items-center justify-center rounded-2xl cursor-pointer">
                <BsGraphUp color="#4AD991" size={24} />
              </div>
            </div>

            <div className="flex items-center">
              <h3 className="text-2xl font-bold flex-1">$89,000</h3>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white text-gray-700  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
            <div className="flex items-center">
              <p className="text-sm font-semibold  flex-1">Total Users</p>
              <div className="bg-[#ffddd0] w-12 h-12 p-1 flex items-center justify-center rounded-2xl cursor-pointer">
                <CiTimer color="#ff926a" size={24} />
              </div>
            </div>

            <div className="flex items-center">
              <h3 className="text-2xl font-bold flex-1">1000</h3>
            </div>
          </div>
        </div>

        {/* Sales Graph */}
        <div className="p-6 bg-white rounded-lg  shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-black ">
            Sales Details
          </h3>
          <div className="h-64  rounded-lg">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
}