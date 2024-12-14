import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddTest = () => {
  const [patientId, setPatientId] = useState("");
  const [data, setData] = useState({});
  const { name, sex, mobile, age } = data;
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [finalAmount, setFinalAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);

  const amount = watch("amount") || 0;
  const discountPercentage = watch("discountPercentage") || 0;
  const discountAmount = watch("discountAmount") || 0;
  const discountNumber = watch("discountNumber");
  const payAmount = watch("payAmount");

  useEffect(() => {
    console.log(patientId);
    fetch(` http://localhost:5000/pataient/${patientId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });

    if (amount) {
      let discountedAmount = parseFloat(amount);
      if (discountPercentage && discountPercentage > 0) {
        discountedAmount =
          discountedAmount - (discountedAmount * discountPercentage) / 100;
      }
      if (discountNumber && discountNumber > 0) {
        discountedAmount = discountedAmount - parseFloat(discountNumber);
      }

      setFinalAmount(discountedAmount >= 0 ? discountedAmount.toFixed(2) : 0);
    }
    if (finalAmount) {
      const pay = payAmount ? parseFloat(payAmount) : 0;
      const due = Math.max(finalAmount - pay, 0);
      setDueAmount(due.toFixed(2));
    }
  }, [
    patientId,
    amount,
    discountPercentage,
    discountNumber,
    finalAmount,
    payAmount,
  ]);

  const calculateFinalAmount = () => {
    let calculatedFinalAmount = amount;
    if (discountPercentage > 0) {
      calculatedFinalAmount = amount - (amount * discountPercentage) / 100;
    } else if (discountAmount > 0) {
      calculatedFinalAmount = amount - discountAmount;
    }
    return Math.max(calculatedFinalAmount, 0);
  };

  const onSubmit = (data) => {
    const finalCalculatedAmount = calculateFinalAmount();
    setFinalAmount(finalCalculatedAmount);
    console.log({ ...data, finalAmount: finalCalculatedAmount });
  };

  const handleChangeId = (e) => {
    const id = e.target.value;
    setPatientId(id.toUpperCase());
    console.log("id change");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Add Pathological Test
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Patient ID */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Patient ID
            </label>
            <input
              onChange={handleChangeId}
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring"
            />
            {errors.patientId && (
              <p className="text-red-500 text-sm">{errors.patientId.message}</p>
            )}
          </div>

          {/* Patient Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              defaultValue={name}
              {...register("patientName", {
                required: "Patient Name is required",
              })}
              type="text"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.patientName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm">
                {errors.patientName.message}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              defaultValue={mobile}
              {...register("mobileNumber", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "Enter a valid mobile number",
                },
              })}
              type="tel"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.mobileNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              defaultValue={age}
              {...register("age", {
                required: "Age is required",
                min: 1,
                max: 120,
              })}
              type="number"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              {...register("sex", { required: "Gender is required" })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.gender ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option selected={sex === "male"} value="male">
                Male
              </option>
              <option selected={sex === "female"} value="female">
                Female
              </option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Test Type (Select Dropdown) */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select Test Type
            </label>
            <select
              {...register("testType", {
                required: "Please select a test type",
              })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.testType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Choose a test type</option>
              <option value="Blood Test">Blood Test</option>
              <option value="Urine Test">Urine Test</option>
              <option value="X-Ray">X-Ray</option>
              <option value="MRI">MRI</option>
              <option value="CT Scan">CT Scan</option>
            </select>
            {errors.testType && (
              <p className="text-red-500 text-sm">{errors.testType.message}</p>
            )}
          </div>

          {/* Test Date */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Test Date
            </label>
            <input
              {...register("testDate", { required: "Test Date is required" })}
              type="date"
              defaultValue={today}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.testDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.testDate && (
              <p className="text-red-500 text-sm">{errors.testDate.message}</p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              {...register("amount", {
                required: "Amount is required",
                min: 0,
              })}
              type="number"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          {/* Discount Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Discount Number
            </label>
            <input
              type="number"
              {...register("discountNumber")}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                errors.discountNumber
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              }`}
            />
          </div>

          {/* Discount Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Discount Percentage (%)
            </label>
            <input
              type="number"
              {...register("discountPercentage")}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                errors.discountPercentage
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              }`}
            />
          </div>

          {/* Display Final Amount */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Final Amount after Discount
            </label>
            <input
              type="text"
              value={finalAmount}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          {/* Pay Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Pay Amount
            </label>
            <input
              type="number"
              {...register("payAmount", { required: "Pay Amount is required" })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                errors.payAmount
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              }`}
            />
            {errors.payAmount && (
              <p className="text-red-500 text-sm">{errors.payAmount.message}</p>
            )}
          </div>

          {/* Display Due Amount */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Due Amount
            </label>
            <input
              {...register("dueAmount")}
              type="text"
              value={dueAmount}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          {/* Final Amount Display */}
          <div className="col-span-2 text-center mt-7">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200"
            >
              Submit Test
            </button>
          </div>
        </div>
      </form>

      {finalAmount > 0 && (
        <div className="mt-5 text-lg font-bold text-center text-green-600">
          Final Amount: {finalAmount}
        </div>
      )}
    </div>
  );
};

export default AddTest;
