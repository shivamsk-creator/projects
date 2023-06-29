import React from "react";
import { Select, Option, Rating } from "@material-tailwind/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

const Dashboard = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Students Enrolled",
        data: [
          11000, 8000, 12500, 5500, 9500, 14299, 11000, 8000, 12500, 5500, 9500,
          14299,
        ],
        fill: false,
        // you can set indiviual colors for each bar
        backgroundColor: ["#00abe4"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <section className="m-2 py-10 px-2 sm:px-3 lg:px-10">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-semibold text-[var(--dash-heading)] ">
            Dashboard
          </h1>
          <p className="text-[var(--dash-text-color)] text-sm my-1">
            Welcome to SMS Education Dashboard
          </p>
        </div>
        <div className="mt-14 px-2 sm:px-5">
          {/* Students Enrolled */}
          <div>
            <h1 className="text-xl font-semibold text-[var(--dash-heading)] ">
              Students Enrolled
            </h1>
            <p className="text-[var(--dash-text-color)] text-sm my-1">
              Welcome to SMS Education Dashboard
            </p>
          </div>

          {/* enrolled students data */}
          <div className="mt-5">
            <div className="flex flex-row flex-wrap">
              {/* This month */}
              <div className="p-3">
                <div className="text-3xl flex text-[var(--dash-heading)]">
                  5490{" "}
                  <span className="text-red-500 text-sm flex items-center mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                      />
                    </svg>
                    16.93%
                  </span>
                </div>
                <p className="text-[var(--dash-text-color)] text-sm my-2">
                  This Month
                </p>
              </div>
              {/* This Week */}
              <div className="p-3">
                <div className="text-3xl flex text-[var(--dash-heading)]">
                  1480{" "}
                  <span className="text-teal-400 text-sm flex items-center mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                      />
                    </svg>
                    4.26%
                  </span>
                </div>
                <p className="text-[var(--dash-text-color)] text-sm my-2">
                  This Week
                </p>
              </div>
            </div>
            {/* Chart Area */}
            <div className="">
              <Bar data={data} height={100} />
            </div>
          </div>

          {/* Total Sales section*/}
          <div className="mt-10">
            {/* Total Sales */}
            <div className="flex flex-col md:flex-row">
              {/* Sales Data */}
              <div className="md:w-1/2 md:mr-3 mt-5 md:mt-0 px-1 md:px-2">
                <h4 className="text-lg font-semibold text-[var(--dash-heading)]">
                  Total Sales
                </h4>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-3xl flex text-[var(--dash-heading)]">
                    ₹9,495.20
                  </div>
                  <div>
                    <div className="text-teal-400 text-sm flex items-center mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                        />
                      </svg>
                      4.26%
                    </div>
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      vs. Last Month
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:ml-3 mt-10 md:mt-0 px-1 md:px-2">
                <h4 className="text-lg font-semibold text-[var(--dash-heading)]">
                  This week so far
                </h4>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-3xl flex text-[var(--dash-heading)]">
                    ₹9,495.20
                  </div>
                  <div>
                    <div className="text-teal-400 text-sm flex items-center mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                        />
                      </svg>
                      4.26%
                    </div>
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      vs. Last Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Categories and Top Courses */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row">
              {/* Top Categories */}
              <div className="md:w-1/2 md:mr-3 mt-5 md:mt-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-[var(--dash-heading)] my-3">
                    Top Categories
                  </h4>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-3xl flex text-[var(--dash-heading)]">
                    ₹9,495.20
                  </div>
                  <div>
                    <div className="text-teal-400 text-sm flex items-center mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                        />
                      </svg>
                      4.26%
                    </div>
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      vs. Last Month
                    </p>
                  </div>
                </div>
              </div>
              {/* Top Courses */}
              <div className="md:w-1/2 md:ml-3 mt-10 md:mt-0  px-2">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-[var(--dash-heading)] my-3">
                    Top Courses
                  </h4>
                  <div>
                    <div className="">
                      <Select variant="standard" className="w-full">
                        <Option className="">Weekly</Option>
                        <Option className="">Monthly</Option>
                        <Option className="">Daily</Option>
                      </Select>
                    </div>
                  </div>
                </div>
                {/* Courses */}
                <div>
                  <div className="flex flex-row justify-between items-center py-1 my-2">
                    <div className="flex flex-row">
                      <div className="mr-3 bg-teal-100 font-semibold flex justify-center items-center w-10 h-10 text-teal-600 rounded-lg ">
                        UI/X
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)]">
                          UI/UX Design with Adobe XD
                        </h4>
                        <p className="text-sm text-[var(--dash-text-color)]">
                          ₹85.00
                        </p>
                      </div>
                    </div>
                    <div className="text-lg flex flex-col justify-end items-end text-[var(--dash-heading)]">
                      <div>₹2,125.00</div>
                      <div className="text-sm text-[var(--dash-text-color)]">
                        25 sold
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center py-1 my-2">
                    <div className="flex flex-row">
                      <div className="mr-3 bg-amber-100 text-amber-600 font-semibold flex justify-center items-center w-10 h-10  rounded-lg ">
                        AD
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)]">
                          Android App Development
                        </h4>
                        <p className="text-sm text-[var(--dash-text-color)]">
                          ₹95.00
                        </p>
                      </div>
                    </div>
                    <div className="text-lg flex flex-col justify-end items-end text-[var(--dash-heading)]">
                      <div>₹1,710.00</div>
                      <div className="text-sm text-[var(--dash-text-color)]">
                        10 sold
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center py-1 my-2">
                    <div className="flex flex-row">
                      <div className="mr-3 bg-red-100 text-red-600 font-semibold flex justify-center items-center w-10 h-10  rounded-lg ">
                        WD
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)]">
                          Wordpress Development
                        </h4>
                        <p className="text-sm text-[var(--dash-text-color)]">
                          ₹95.00
                        </p>
                      </div>
                    </div>
                    <div className="text-lg flex flex-col justify-end items-end text-[var(--dash-heading)]">
                      <div>₹1050.00</div>
                      <div className="text-sm text-[var(--dash-text-color)]">
                        15 sold
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center py-1 my-2">
                    <div className="flex flex-row">
                      <div className="mr-3 bg-purple-100 text-purple-600 font-semibold flex justify-center items-center w-10 h-10  rounded-lg ">
                        ML
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)]">
                          Machine Learning
                        </h4>
                        <p className="text-sm text-[var(--dash-text-color)]">
                          ₹90.00
                        </p>
                      </div>
                    </div>
                    <div className="text-lg flex flex-col justify-end items-end text-[var(--dash-heading)]">
                      <div>₹990.00</div>
                      <div className="text-sm text-[var(--dash-text-color)]">
                        10 sold
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center py-1 my-2">
                    <div className="flex flex-row">
                      <div className="mr-3 bg-cyan-100 text-cyan-600 font-semibold flex justify-center items-center w-10 h-10  rounded-lg ">
                        RD
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)]">
                          Responsive Design
                        </h4>
                        <p className="text-sm text-[var(--dash-text-color)]">
                          ₹95.00
                        </p>
                      </div>
                    </div>
                    <div className="text-lg flex flex-col justify-end items-end text-[var(--dash-heading)]">
                      <div>₹1050.00</div>
                      <div className="text-sm text-[var(--dash-text-color)]">
                        15 sold
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Teachers and Active Students */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row">
              {/* Top Teachers */}
              <div className="md:w-1/2 md:mr-3 mt-5 md:mt-0 px-3 py-2">
                <div className="flex items-center justify-between border-b border-b-gray-300 px-3">
                  <h4 className="text-lg font-semibold text-[var(--dash-heading)] my-3">
                    Top Teachers
                  </h4>
                  <div className="text-[var(--theme-color)] text-semibold">
                    View All
                  </div>
                </div>
                {/* Teachers */}
                <div>
                  <div className="flex flex-row justify-between flex-wrap items-center border-b border-b-gray-300 ">
                    <div className="py-4 flex flex-row">
                      <div className="mr-3 bg-indigo-100 text-indigo-600 font-semibold flex justify-center items-center w-10 h-10 rounded-full ">
                        AB
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)] font-semibold">
                          Mr. Testing
                        </h4>
                        <p className="text-xs text-[var(--para-color)]">
                          testing@abc.com
                        </p>
                      </div>
                    </div>
                    <div className="py-4 flex flex-col justify-center items-center">
                      <div className="text-teal-400 text-sm flex items-center mx-2">
                        <Rating value={3} readonly />
                      </div>
                      <p className="text-[var(--dash-text-color)] text-sm mt-2">
                        25 Reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between flex-wrap items-center border-b border-b-gray-300">
                    <div className="py-4 flex flex-row">
                      <div className="mr-3 bg-teal-100 text-teal-600 font-semibold flex justify-center items-center w-10 h-10 rounded-full ">
                        AL
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)] font-semibold">
                          Ashley Lawson
                        </h4>
                        <p className="text-xs text-[var(--para-color)]">
                          ashley@softnio.com
                        </p>
                      </div>
                    </div>
                    <div className="py-4 flex flex-col justify-center items-center">
                      <div className="text-teal-400 text-sm flex items-center mx-2">
                        <Rating value={3} readonly />
                      </div>
                      <p className="text-[var(--dash-text-color)] text-sm mt-2">
                        22 Reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between flex-wrap items-center border-b border-b-gray-300">
                    <div className="py-4 flex flex-row">
                      <div className="mr-3 bg-amber-100 text-amber-600 font-semibold flex justify-center items-center w-10 h-10 rounded-full ">
                        JM
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)] font-semibold">
                          Jane Montgomery
                        </h4>
                        <p className="text-xs text-[var(--para-color)]">
                          jane84@example.com
                        </p>
                      </div>
                    </div>
                    <div className="py-4 flex flex-col justify-center items-center">
                      <div className="text-teal-400 text-sm flex items-center mx-2">
                        <Rating value={3} readonly />
                      </div>
                      <p className="text-[var(--dash-text-color)] text-sm mt-2">
                        22 Reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between flex-wrap items-center border-b border-b-gray-300">
                    <div className="py-4 flex flex-row">
                      <div className="mr-3 bg-pink-100 text-pink-600 font-semibold flex justify-center items-center w-10 h-10 rounded-full ">
                        LH
                      </div>
                      <div>
                        <h4 className="text-[var(--dash-heading)] font-semibold">
                          Larry Henry
                        </h4>
                        <p className="text-xs text-[var(--para-color)]">
                          larry108@example.com
                        </p>
                      </div>
                    </div>
                    <div className="py-4 flex flex-col justify-center items-center">
                      <div className="text-teal-400 text-sm flex items-center mx-2">
                        <Rating value={3} readonly />
                      </div>
                      <p className="text-[var(--dash-text-color)] text-sm mt-2">
                        22 Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Active Students */}
              <div className="md:w-1/2 md:ml-3 mt-10 md:mt-0 px-2">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--dash-heading)] mb-1 mt-3">
                      Active Students
                    </h4>
                    <p className="text-[var(--para-color)] text-xs">
                      How do your students visited in the time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-around">
                  {/* Monthly */}
                  <div className="p-3 flex flex-col items-center justify-center">
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      This Week
                    </p>
                    <div className="text-3xl flex flex-col text-[var(--dash-heading)]">
                      9.28K
                      <div className="text-teal-400 text-sm flex items-center justify-center my-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                          />
                        </svg>
                        4.63%
                      </div>
                    </div>
                  </div>
                  {/* Weekly */}
                  <div className="p-3 flex flex-col items-center justify-center">
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      Weekly
                    </p>
                    <div className="text-3xl flex flex-col text-[var(--dash-heading)]">
                      2.69K
                      <div className="text-red-400 text-sm flex items-center justify-center my-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                          />
                        </svg>
                        1.92%
                      </div>
                    </div>
                  </div>
                  {/* Daily */}
                  <div className="p-3 flex flex-col items-center justify-center">
                    <p className="text-[var(--dash-text-color)] text-sm my-2">
                      Daily (Avg)
                    </p>
                    <div className="text-3xl flex flex-col text-[var(--dash-heading)]">
                      0.94K
                      <div className="text-teal-400 text-sm flex items-center justify-center my-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                          />
                        </svg>
                        3.45%
                      </div>
                    </div>
                  </div>
                </div>
                {/* Student chart */}
                <div>
                  <Bar data={data} height={150} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
