import { useLoaderData } from "react-router-dom";

const Recipt = () => {
  const patientData = useLoaderData(); // Use loader data

  const handlePrint = () => {
    window.print(); // Trigger the browser print dialog
  };

  if (!patientData) {
    return <p>Loading...</p>; // Display loading state until data is fetched
  }

  const {
    name,
    pataintId,
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

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Patient Receipt
        </h2>

        {/* Table Layout for Patient Information */}
        <table className="min-w-full table-auto text-gray-700 dark:text-gray-200">
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Name:</th>
              <td className="py-2">{name}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Patient ID:</th>
              <td className="py-2">{pataintId}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Sex:</th>
              <td className="py-2">{sex}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Age:</th>
              <td className="py-2">{age}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Email:</th>
              <td className="py-2">{email}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Mobile:</th>
              <td className="py-2">{mobile}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Address:</th>
              <td className="py-2">{address}</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Date:</th>
              <td className="py-2">
                {date}/{month}/{year}
              </td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 text-left">Amount:</th>
              <td className="py-2">{amount}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 text-center">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipt;
