import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PaidIcon from "../../assets/icon/pngtree-paid-stamp-vector-illustration-png-image_6585127.png";

import { useLoaderData } from "react-router-dom";

const Receipt = () => {
  const patientData = useLoaderData(); // Fetch data using loader
  // Ref for printable content

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

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
    dueAmount,
  } = patientData;

  const isDue = parseInt(dueAmount);

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        {/* Printable Content */}
        <div ref={contentRef} className="printable-content p-10">
          <div className="flex justify-center items-center gap-3">
            <img
              className="w-24"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbrd53dKPbSJdfctykEYHlbaK6ZDbCiTmjA&s"
              alt=""
            />
            <h2 className="text-center text-black text-2xl">
              Swapno Genarel Hospital
            </h2>
          </div>
          <table className="w-full text-gray-700 dark:text-gray-200">
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Name:</th>
                <td className="py-2 px-4">{name}</td>
                <th className="py-2 px-4 text-left"> ID:</th>
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
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 text-left">Amount:</th>
                <td className="py-2 px-4">{amount}</td>
                <th className="py-2 px-4 text-left">Payment</th>

                {
                  <td className="py-2 px-4">
                    {isDue ? (
                      dueAmount
                    ) : (
                      <img className="w-16" src={PaidIcon} />
                    )}
                  </td>
                }
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700"></tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Print Button */}

      <button onClick={() => reactToPrintFn()} className="bg-primary">
        Print{" "}
      </button>
    </div>
  );
};

export default Receipt;
