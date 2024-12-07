import {
  CalendarIcon,
  CashIcon,
  ChartBarIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import { BeakerIcon } from "@heroicons/react/solid";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    fetch("https://chhospital-server-99jf.vercel.app/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Hospital Management System</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Patients Card */}
        <Link to="/patients" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-blue-500 transition duration-300">
            <UserAddIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Manage Patients
            </h2>
          </div>
        </Link>

        {/* Doctors Card */}
        <Link to="/doctors" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-green-500 transition duration-300">
            <CalendarIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Manage Doctors
            </h2>
          </div>
        </Link>

        {/* Appointments Card */}
        <Link to="/appointments" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-yellow-500 transition duration-300">
            <CashIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Manage Appointments
            </h2>
          </div>
        </Link>

        {/* Billing Card */}
        <Link to="/billing" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-red-500 transition duration-300">
            <CashIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Manage Billing
            </h2>
          </div>
        </Link>

        {/* Add New Patient Card */}
        <Link to="/add-patient" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-purple-500 transition duration-300">
            <Icon
              icon="fontisto:bed-patient"
              width="40"
              height="40"
              style={{ color: "black" }}
            />
            {/* <BeakerIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" /> */}
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Add New Patient
            </h2>
          </div>
        </Link>

        {/* Add New Operation Card */}
        <Link to="/add-operation" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-indigo-500 transition duration-300">
            <Icon
              className="text-xl font-semibold text-gray-800 group-hover:text-white"
              icon="medical-icon:i-surgery"
              width="42"
              height="42"
            />
            {/* <BeakerIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" /> */}
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Add New Operation
            </h2>
          </div>
        </Link>

        {/* Add New Test Card */}
        <Link to="/add-test" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-teal-500 transition duration-300">
            <BeakerIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Add New Test
            </h2>
          </div>
        </Link>

        {/* Dashboard Card */}
        <Link to="/dashboard" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-pink-500 transition duration-300">
            <ChartBarIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Dashboard
            </h2>
          </div>
        </Link>

        {/* Admin Card */}
        <Link to="/admin" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-gray-700 transition duration-300">
            <Icon icon="ri:admin-fill" width="40" height="40" />
            {/* <ChartBarIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" /> */}
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Admin Panel
            </h2>
          </div>
        </Link>

        {/* expence */}
        <Link to="/acount-expense" className="group">
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-gray-700 transition duration-300">
            <Icon
              icon="fluent:money-hand-16-filled"
              width="40"
              height="40"
              style={{ color: "#59d317" }}
            />
            {/* <ChartBarIcon className="h-10 w-10 text-gray-800 group-hover:text-white mb-2" /> */}
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Account
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
