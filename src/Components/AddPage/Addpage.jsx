import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Addpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [totalPayable, setTotalPayable] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const onSubmit = (data) => {
    const { amount, discount } = data;
    const discountAmount = amount * (discount / 100);
    const payableAmount = amount - discountAmount;
    setTotalPayable(payableAmount);

    // Include payable amount in the form data
    const formData = {
      ...data,
      payableAmount,
    };

    // Log the data for demonstration (you can send it to your API instead)
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`${isDarkTheme ? "bg-gray-800" : "bg-gray-200"} p-6`}>
      <div
        className={`${
          isDarkTheme ? "bg-gray-900" : "bg-white"
        } max-w-4xl mx-auto p-8 rounded-lg shadow-lg`}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Patient Information Form
        </h2>

        {/* Toggle Button */}
        <div className="mb-4 flex justify-center">
          <button
            onClick={() => setIsDarkTheme((prev) => !prev)}
            className={`px-4 py-2 font-semibold rounded-md ${
              isDarkTheme ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            } focus:outline-none`}
          >
            Switch to {isDarkTheme ? "Light" : "Dark"} Theme
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              {...register("age", {
                required: "Age is required",
                min: { value: 0, message: "Age must be a positive number" },
              })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.age ? "border-red-500" : ""
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="sex"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Sex
            </label>
            <select
              id="sex"
              {...register("sex", { required: "Sex is required" })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.sex ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && (
              <p className="text-red-500 text-sm">{errors.sex.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="ref"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Referred By
            </label>
            <input
              type="text"
              id="ref"
              {...register("ref")}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="doctor"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Doctor
            </label>
            <input
              type="text"
              id="doctor"
              {...register("doctor", { required: "Doctor name is required" })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.doctor ? "border-red-500" : ""
              }`}
            />
            {errors.doctor && (
              <p className="text-red-500 text-sm">{errors.doctor.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              {...register("amount", {
                required: "Amount is required",
                min: { value: 0, message: "Amount must be a positive number" },
              })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.amount ? "border-red-500" : ""
              }`}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="discount"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Discount (%)
            </label>
            <input
              type="number"
              id="discount"
              {...register("discount", {
                min: { value: 0, message: "Discount must be at least 0" },
                max: { value: 100, message: "Discount cannot exceed 100" },
              })}
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.discount ? "border-red-500" : ""
              }`}
            />
            {errors.discount && (
              <p className="text-red-500 text-sm">{errors.discount.message}</p>
            )}
          </div>

          <div className="mb-6 md:col-span-2">
            <label
              htmlFor="address"
              className={`block text-sm font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Address
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Address is required" })}
              rows="3"
              className={`mt-1 block w-full p-2 border ${
                isDarkTheme
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.address ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              className={`px-4 py-2 font-semibold rounded-md ${
                isDarkTheme
                  ? "bg-blue-600 text-white"
                  : "bg-blue-400 text-black"
              } hover:${
                isDarkTheme ? "bg-blue-700" : "bg-blue-500"
              } focus:outline-none`}
            >
              Submit
            </button>
          </div>
        </form>

        {totalPayable !== null && (
          <div className="mt-6">
            <h3
              className={`text-lg font-semibold ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Total Payable Amount: ${totalPayable.toFixed(2)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addpage;
