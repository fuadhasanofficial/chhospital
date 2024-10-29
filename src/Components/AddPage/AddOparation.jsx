import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewSurgeryForm = () => {
  const [patientId, setPatiendId] = useState("");
  const [data, setData] = useState({});

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

    age,
  } = data;

  useEffect(() => {
    fetch(`http://localhost:5000/pataient/${patientId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });

    console.log("ok");
  }, [patientId]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [finalAmount, setFinalAmount] = useState(0);

  // Watch for changes in amount and discount
  const amount = watch("amount") || 0;
  const discountPercentage = watch("discountPercentage") || 0;
  const discountAmount = watch("discountAmount") || 0;

  // Calculate final amount based on discount
  const calculateFinalAmount = () => {
    let calculatedFinalAmount = amount;

    if (discountPercentage > 0) {
      calculatedFinalAmount = amount - (amount * discountPercentage) / 100;
    } else if (discountAmount > 0) {
      calculatedFinalAmount = amount - discountAmount;
    }

    return Math.max(calculatedFinalAmount, 0); // Ensure final amount can't be negative
  };

  const onSubmit = (data) => {
    const finalCalculatedAmount = calculateFinalAmount();
    setFinalAmount(finalCalculatedAmount);
    console.log({ ...data, finalAmount: finalCalculatedAmount });
    // Handle form submission logic, e.g., send data to API
  };

  const handleChangeId = (e) => {
    const id = e.target.value;
    setPatiendId(id);
    console.log(id);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        New Surgery Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Patient Id
            </label>
            <input
              onChange={handleChangeId}
              type="text"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring`}
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm">
                {errors.patientName.message}
              </p>
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
              name="name"
              id="name"
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
              name="mobile"
              id="mobile"
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
              name="age"
              id="age"
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
              } `}
              name="sex"
              id="sex"
            >
              <option value="">Select Gender</option>
              <option selected={sex == "male"} value="male">
                Male
              </option>

              <option selected={sex == "female"} value="female">
                Female
              </option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Surgery Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Surgery Type
            </label>
            <input
              {...register("surgeryType", {
                required: "Surgery Type is required",
              })}
              type="text"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.surgeryType ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.surgeryType && (
              <p className="text-red-500 text-sm">
                {errors.surgeryType.message}
              </p>
            )}
          </div>

          {/* Surgery Date */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Surgery Date
            </label>
            <input
              {...register("surgeryDate", {
                required: "Surgery Date is required",
              })}
              name="surgeryDate"
              id="surgeryDate"
              type="date"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.surgeryDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.surgeryDate && (
              <p className="text-red-500 text-sm">
                {errors.surgeryDate.message}
              </p>
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
              name="amount"
              id="amount"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          {/* Discount Percentage */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Discount Percentage
            </label>
            <input
              {...register("discountPercentage", { min: 0, max: 100 })}
              type="number"
              placeholder="Enter discount percentage"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.discountPercentage ? "border-red-500" : "border-gray-300"
              }`}
              name="discountPercentage"
              id="discountPercentage"
            />
            {errors.discountPercentage && (
              <p className="text-red-500 text-sm">
                {errors.discountPercentage.message}
              </p>
            )}
          </div>

          {/* Discount Amount */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Discount Amount
            </label>
            <input
              {...register("discountAmount", { min: 0 })}
              type="number"
              placeholder="Enter discount amount"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                errors.discountAmount ? "border-red-500" : "border-gray-300"
              }`}
              name="discountAmount"
              id="discountAmount"
            />
            {errors.discountAmount && (
              <p className="text-red-500 text-sm">
                {errors.discountAmount.message}
              </p>
            )}
          </div>

          {/* Final Amount */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Final Amount
            </label>
            <input
              type="number"
              value={calculateFinalAmount()}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100"
            />
          </div>

          {/* Submit Button */}
        </div>
        <div className="col-span-2 text-center mt-7">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display the Final Amount */}
      {finalAmount > 0 && (
        <div className="mt-5 text-lg font-bold text-center text-green-600">
          Final Amount: {finalAmount}
        </div>
      )}
    </div>
  );
};

export default NewSurgeryForm;
