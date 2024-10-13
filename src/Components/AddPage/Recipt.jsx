import { useLoaderData } from "react-router-dom";

function Receipt() {
  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  const data = useLoaderData();

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
  } = data;

  return (
    <div
      className="bg-white shadow-lg mx-auto p-10 border border-gray-300"
      style={{ width: "794px", height: "1123px" }}
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Hospital Receipt</h1>
        <p className="text-gray-600">XYZ Hospital, Dhaka</p>
        <p className="text-sm text-gray-500">
          Date: {`${date}/${month}/${year}`}
        </p>
      </div>

      {/* Information in 3 columns */}
      <div className="grid grid-cols-3 gap-4 text-lg leading-relaxed">
        <p>
          <span className="font-semibold">Patient Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Patient ID:</span> {pataintId}
        </p>
        <p>
          <span className="font-semibold">Sex:</span> {sex}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Mobile:</span> {mobile}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {address}
        </p>
        <p>
          <span className="font-semibold">Amount Paid:</span> ৳ {amount}
        </p>
      </div>

      <div className="mt-10 border-t border-dashed border-gray-400 pt-6">
        <h3 className="font-semibold text-xl text-gray-800 mb-4">
          Doctor' s Notes
        </h3>
        <div className="h-48 bg-gray-100 rounded-lg p-4">
          <p className="text-gray-500 italic">
            [Blank area for doctor’s writing]
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          Thank you for visiting XYZ Hospital
        </p>
        <p className="text-sm text-gray-600">
          For inquiries, call: +880-XXXX-XXXXXX
        </p>
      </div>

      {/* Print Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}

export default Receipt;
