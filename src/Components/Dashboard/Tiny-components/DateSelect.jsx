import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const YearMonthSelect = () => {
  const { state, dispatch } = useContext(AuthContext);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1); // Use numeric month values (1-12)

  // Generate an array of years, e.g., from 2000 to the current year
  const years = Array.from(new Array(25), (val, index) => currentYear - index);

  // Array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle year change
  const handleYearChange = (e) => {
    const updatedYear = parseInt(e.target.value);
    setSelectedYear(updatedYear);

    dispatch({
      type: "LOAD_DATA_BY_MONTH",
      payload: { year: updatedYear, month: selectedMonth },
    });
  };

  // Handle month change
  const handleMonthChange = (e) => {
    const updatedMonth = parseInt(e.target.value);
    setSelectedMonth(updatedMonth);
    dispatch({
      type: "LOAD_DATA_BY_MONTH",
      payload: { year: selectedYear, month: updatedMonth },
    });
  };

  return (
    <div className="p-2 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex space-x-2">
        {/* Year Select */}
        <div>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="block w-full p-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 min-h-[32px]"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Month Select */}
        <div>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="block w-full p-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 min-h-[32px]"
          >
            {months.map((month, idx) => (
              <option key={month} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default YearMonthSelect;
