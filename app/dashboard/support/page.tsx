"use client";

import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { FiUsers, FiMessageCircle, FiEye } from "react-icons/fi";

const Support = () => {
  const graphData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "9", "10"],
    datasets: [
      {
        label: "Live Visitors",
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 space-y-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Live Visitors Graph */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-base sm:text-lg font-bold">Live Visitors</h3>
            <button className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-gray-100 rounded-md">
              Live Now
            </button>
          </div>
          <div className="mt-4">
            <Bar data={graphData} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Visitors */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center space-x-3">
              <FiUsers size={20} />
              <div>
                <h4 className="text-lg sm:text-xl font-bold">3</h4>
                <p className="text-xs sm:text-sm text-gray-500">Visitors</p>
              </div>
            </div>
          </div>

          {/* Chats */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center space-x-3">
              <FiMessageCircle size={20} />
              <div>
                <h4 className="text-lg sm:text-xl font-bold">0</h4>
                <p className="text-xs sm:text-sm text-gray-500">Chats</p>
              </div>
            </div>
          </div>

          {/* Page Views */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center space-x-3">
              <FiEye size={20} />
              <div>
                <h4 className="text-lg sm:text-xl font-bold">3</h4>
                <p className="text-xs sm:text-sm text-gray-500">Page Views</p>
              </div>
            </div>
          </div>

          {/* Reporting */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 ">
            <h4 className="text-base sm:text-lg font-bold">Reporting</h4>
            <div className="space-y-1 sm:space-y-2 mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm">
                Positive Sentiment: <span className="text-red-500">0%</span>
              </p>
              <p className="text-xs sm:text-sm">
                Engagement: <span className="text-red-500">0%</span>
              </p>
              <p className="text-xs sm:text-sm">
                Availability: <span className="text-green-500">1.6%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* History */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h4 className="text-base sm:text-lg font-bold">History</h4>
          <ul className="mt-3 sm:mt-4 space-y-2">
            <li className="flex justify-between text-xs sm:text-sm">
              <span>V1735028441545716</span>
              <span>24/Dec 13:52</span>
            </li>
            <li className="flex justify-between text-xs sm:text-sm">
              <span>V17344589128501892</span>
              <span>15/Nov 12:56</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
