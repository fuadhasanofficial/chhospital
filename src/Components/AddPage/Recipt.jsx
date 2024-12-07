import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { ReactToPrint } from "react-to-print";

const Receipt = () => {
  const patientData = useLoaderData(); // Fetch data using loader
  const componentRef = useRef(); // Ref for printable content

  if (!patientData) {
    return <p>Loading...</p>; // Display loading state until data is fetched
  }

  const {
    name,
    patientId, // Corrected from `pataintId`
    sex,
    email,
    mobile,
    address,
    date,
    month,
    year,
    amount,
    age,
  } = patientData;

  // Print handler using `useReactToPrint`
  ReactToPrint({
    content: () => componentRef.current, // Printable content ref
    documentTitle: "Receipt - Fuad", // Document title
  });

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        {/* Printable Content */}
        <div ref={componentRef} className="printable-content">
          <table className="w-full text-gray-700 dark:text-gray-200">
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Name:</th>
                <td className="py-2 px-4">{name}</td>
                <th className="py-2 px-4 text-left">Patient ID:</th>
                <td className="py-2 px-4">{patientId}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Sex:</th>
                <td className="py-2 px-4">{sex}</td>
                <th className="py-2 px-4 text-left">Age:</th>
                <td className="py-2 px-4">{age}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Email:</th>
                <td className="py-2 px-4">{email}</td>
                <th className="py-2 px-4 text-left">Mobile:</th>
                <td className="py-2 px-4">{mobile}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Address:</th>
                <td className="py-2 px-4">{address}</td>
                <th className="py-2 px-4 text-left">Date:</th>
                <td className="py-2 px-4">
                  {date}/{month}/{year}
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-left">Amount:</th>
                <td className="py-2 px-4">{amount}</td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Print Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
};

export default Receipt;
