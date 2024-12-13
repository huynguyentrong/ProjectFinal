"use client";
import React, { useState, useMemo } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  type: string;
  location: string;
  workMode: string;
  experience: string;
  postedTime: string;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Nhân Viên Kỹ Thuật Bảo Trì - Xử Lý Nước Thải",
    company: "LightHouse",
    type: "Full-Time",
    location: "262 Huỳnh Văn Bánh, Phường 11, Phú Nhuận",
    workMode: "Office",
    experience: "1 year",
    postedTime: "2 Week Ago",
  },
  {
    id: 2,
    title: "Kỹ Sư Hỗ Trợ Kỹ Thuật",
    company: "GETTECH",
    type: "Full-Time",
    location: "số 203 đường 325 Trịnh Quang Nghị, phường 7, quận 8, Tp.HCM",
    workMode: "Hybrid",
    experience: "1 year",
    postedTime: "5 Week Ago",
  },
  {
    id: 3,
    title: "Giám Đốc Lương Thực (Lúa, Gạo,...)",
    company: "AFIEX",
    type: "Contract",
    location: "2045 Trần Hưng Đạo, phường Mỹ Thới, tỉnh An Giang, Long Xuyên",
    workMode: "Office",
    experience: "5 year",
    postedTime: "Application deadline",
  },
  {
    id: 4,
    title: "nhân viên Kinh doanh Nông sản",
    company: "TECHPAL",
    type: "Part-Time",
    location: "Số 110/43/47 Bà Hom, Phường 13, Quận 6, TP.HCM",
    workMode: "Office",
    experience: "1-3 year",
    postedTime: "1 Week Ago",
  },
  {
    id: 5,
    title: "Nhân viên thu mua nguyên liệu",
    company: "HƯNG VIỆT",
    type: "Internship",
    location: "đường 325 Trịnh Quang Nghị- Ân Thi - Hưng Yên",
    workMode: "Remote",
    experience: "0-6 months",
    postedTime: "8 Week Ago",
  },
];
const Hiring = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    type: [] as string[],
    workMode: [] as string[],
    experience: [] as string[],
  });

  // Hàm để lọc công việc dựa trên bộ lọc và tìm kiếm
  const filteredJobs = useMemo(() => {
    const searchLower = searchText.toLowerCase();

    return jobsData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.location.toLowerCase().includes(searchLower);

      const matchesFilters =
        (filters.type.length === 0 ||
          filters.type.includes(job.type as string)) &&
        (filters.workMode.length === 0 ||
          filters.workMode.includes(job.workMode as string)) &&
        (filters.experience.length === 0 ||
          filters.experience.includes(job.experience as string));

      return matchesSearch && matchesFilters;
    });
  }, [searchText, filters]);

  const handleCheckboxChange = (
    filterCategory: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevFilters) => {
      const categoryFilters = prevFilters[filterCategory];
      const isChecked = categoryFilters.includes(value);
      return {
        ...prevFilters,
        [filterCategory]: isChecked
          ? categoryFilters.filter((item) => item !== value)
          : [...categoryFilters, value],
      };
    });
  };

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
                <button
                  className="text-teal-500 text-sm"
                  onClick={() =>
                    setFilters({ type: [], workMode: [], experience: [] })
                  }
                >
                  Clear All
                </button>
              </div>

              {/* <!-- Job Type --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">Job Type</h3>
                <div className="space-y-2">
                  {["Full-Time", "Part-Time", "Internship", "Contract"].map(
                    (type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-teal-500"
                          checked={filters.type.includes(type)}
                          onChange={() => handleCheckboxChange("type", type)}
                        />
                        <span className="ml-2 text-gray-600">{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* <!-- Work Mode --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">Work Mode</h3>
                <div className="space-y-2">
                  {["Office", "Remote", "Hybrid"].map((mode) => (
                    <label key={mode} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-teal-500"
                        checked={filters.workMode.includes(mode)}
                        onChange={() => handleCheckboxChange("workMode", mode)}
                      />
                      <span className="ml-2 text-gray-600">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* <!-- Experience --> */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-600">Experience</h3>
                <div className="space-y-2">
                  {["0-6 months", "1 year", "1-3 years", "3-5 years"].map(
                    (exp) => (
                      <label key={exp} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-teal-500"
                          checked={filters.experience.includes(exp)}
                          onChange={() =>
                            handleCheckboxChange("experience", exp)
                          }
                        />
                        <span className="ml-2 text-gray-600">{exp}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Main Content --> */}
          <div className="lg:w-3/4">
            {/* <!-- Search Bar --> */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center gap-5 w-full border border-gray-200 rounded-lg py-3 px-5">
                <span className="flex-shrink-0 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter your content..."
                />
              </div>

              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                Search
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            {/* <!-- Job Listings --> */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <i className="fas fa-briefcase text-te"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm text-right">
                      <p>{job.location}</p>
                      <p>{job.postedTime}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 text-sm rounded-lg">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-lg">
                      {job.workMode}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">
                      {job.experience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
