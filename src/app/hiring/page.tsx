"use client";
import { Search } from "lucide-react";
import React from "react";

const Hiring = () => {
  return (
    <div>
      <div className="px-4 w-full bg-[#c3efef] py-10">
        <div className="w-full h-52 lg:h-80 md:h-48 rounded-xl overflow-hidden relative bg-cover bg-right md:bg-center bg-no-repeat bg-[url('/assets/images/title-bg.png')] flex items-start justify-center md:items-center py-4">
          <div className="text-center pr-7">
            <h1 className="text-4xl md:text-3xl sm:text-5xl font-bold text-teal-600 uppercase translate-x-0 md:translate-x-5">
              FIND A <br /> JOB!
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-gray-700">Filter</h2>
                <button className="text-teal-500 text-sm">Clear All</button>
              </div>
              <hr className="mb-6" />
              {/* <!-- Job Type --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">Job Type</h3>
                <div className="space-y-2 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Full-Time</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Part Time</span>
                  </label>
                </div>
                <div className="space-y-2 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Internship</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Contract</span>
                  </label>
                </div>
              </div>
              <hr className="mb-6" />
              {/* <!-- Job Location --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">
                  Job Location
                </h3>
                <div className="space-y-2 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">On-site</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Hybrid</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Remote</span>
                  </label>
                </div>
              </div>
              <hr className="mb-6" />

              {/* <!-- Salary Range --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">
                  Salary Range
                </h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="1200"
                    max="3500"
                    value="2350"
                    className="w-full accent-teal-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>1200 $</span>
                    <span>3500 $</span>
                  </div>
                </div>
              </div>
              <hr className="mb-6" />

              {/* <!-- Experience --> */}
              <div>
                <h3 className="font-semibold mb-3 text-gray-600">Experience</h3>
                <div className="space-y-2 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">1-3 Years</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">3-5 Years</span>
                  </label>
                </div>
                <div className="space-y-2 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">5-10 Years</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">Fresh</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500"
                    />
                    <span className="ml-2 text-gray-600">0-6 months</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Main Content --> */}
          <div className="lg:w-3/4">
            {/* <!-- Search Bar --> */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center gap-3 border rounded-full p-2 px-5">
                <Search className="w-5 h-5 ml-2 text-gray-500" />
                <input type="text" placeholder="Tim" className="outline-none" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Country or timezone"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                Search
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* <!-- Job Listings --> */}
            <div className="space-y-4">
              {/* <!-- Job Card 1 --> */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-code text-teal-500"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Front-End Developer</h3>
                      <p className="text-gray-600">Technosol</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Full-Time
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Remote
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Senior Level
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      California, USA
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">2 Week Ago</span>
                </div>
              </div>

              {/* <!-- Job Card 2 --> */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-check-circle text-purple-500"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Quality Assurance</h3>
                      <p className="text-gray-600">Technosol</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Full-Time
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Remote
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      Senior Level
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      California, USA
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">2 Week Ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
