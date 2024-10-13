import { MoonIcon, SunIcon } from "@heroicons/react/solid"; // Heroicons for the sun and moon icons
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PatientInformationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [darkMode, setDarkMode] = useState(false);
  const [finalAmount, setFinalAmount] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Watch the amount, discountNumber, and discountPercentage fields for changes
  const amount = watch("amount");
  const discountNumber = watch("discountNumber");
  const discountPercentage = watch("discountPercentage");

  useEffect(() => {
    // Calculate the final amount when discount is applied
    if (amount) {
      let discountedAmount = parseFloat(amount);

      // Apply percentage discount
      if (discountPercentage && discountPercentage > 0) {
        discountedAmount =
          discountedAmount - (discountedAmount * discountPercentage) / 100;
      }

      // Apply number discount
      if (discountNumber && discountNumber > 0) {
        discountedAmount = discountedAmount - parseFloat(discountNumber);
      }

      setFinalAmount(discountedAmount >= 0 ? discountedAmount.toFixed(2) : 0);
    }
  }, [amount, discountNumber, discountPercentage]);

  const onSubmit = (data) => {
    console.log("Final Amount after discount:", finalAmount);
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const newData = { ...data, amount: finalAmount, date, month, year };
    console.log("Form Data:", newData);

    const patient = newData;

    const loadData = async () => {
      try {
        const res = await fetch("https://chhospital-server.vercel.app/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ patient }),
        });
        const data = await res.json();

        navigate(`/recipt/${data.details.pataintId}`);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900`}
    >
      <div className="w-full max-w-3xl p-6">
        {/* Toggle Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Patient Information Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Sex */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Sex
              </label>
              <select
                {...register("sex", { required: "Sex is required" })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.sex
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.sex && (
                <p className="text-red-500 text-sm">{errors.sex.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Mobile
              </label>
              <input
                type="text"
                {...register("mobile", {
                  required: "Mobile is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Invalid mobile number",
                  },
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.mobile
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Address */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Address
              </label>
              <textarea
                {...register("address", { required: "Address is required" })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.address
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
                rows="3"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            {/* Doctor (Dropdown) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Doctor
              </label>
              <select
                {...register("doctor", {
                  required: "Doctor selection is required",
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.doctor
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Patel">Dr. Patel</option>
                <option value="Dr. Lee">Dr. Lee</option>
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-sm">{errors.doctor.message}</p>
              )}
            </div>

            {/* Ref (Dropdown) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Ref
              </label>
              <select
                {...register("ref", {
                  required: "Reference selection is required",
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.ref
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <option value="">Select Reference</option>
                <option value="Ref A">Ref A</option>
                <option value="Ref B">Ref B</option>
                <option value="Ref C">Ref C</option>
                <option value="Ref D">Ref D</option>
              </select>
              {errors.ref && (
                <p className="text-red-500 text-sm">{errors.ref.message}</p>
              )}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Amount
              </label>
              <input
                type="number"
                {...register("amount", { required: "Amount is required" })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.amount
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              />
              {errors.amount && (
                <p className="text-red-500 text-sm">{errors.amount.message}</p>
              )}
            </div>

            {/* Discount (Number) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Discount (Number)
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

            {/* Discount (Percentage) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Discount (Percentage)
              </label>
              <input
                type="number"
                {...register("discountPercentage", {
                  min: { value: 0, message: "Discount must be at least 0%" },
                  max: { value: 100, message: "Discount cannot exceed 100%" },
                })}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${
                  errors.discountPercentage
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                }`}
              />
              {errors.discountPercentage && (
                <p className="text-red-500 text-sm">
                  {errors.discountPercentage.message}
                </p>
              )}
            </div>

            {/* Final Amount Display */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Final Amount (after discount)
              </label>
              <input
                type="text"
                value={finalAmount}
                disabled
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientInformationForm;
