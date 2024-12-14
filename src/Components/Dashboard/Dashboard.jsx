// componet by fuad hasan
import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import TableRow from "./TableRow";
import DateSelect from "./Tiny-components/DateSelect";

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const { year, month } = state.dataLoad;
  const [pataints, setPataints] = useState([]);
  useEffect(() => {
    console.log("ok");
    fetch(
      `http://localhost:5000/total-pataient-number?year=${year}&month=${month}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotal(data.number);
        setPataints(data.pataints);
        console.log(data);
      });
    console.log(state.dataLoad);
  }, [total, state.dataLoad, year, month]);
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-400 text-white p-6 shadow-lg">
        <div className="text-2xl font-bold mb-8 flex items-center">
          <Icon
            icon="mdi:heart-pulse"
            className="mr-2 text-pink-400"
            width="30"
            height="30"
          />
          <span>Hospital Dashboard</span>
        </div>
        <ul className="space-y-4">
          <li className="border-2 hover:rounded-md">
            <a href="#" className="hover:text-blue-300 flex items-center">
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
              Appointments
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
              Doctors
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
              Reports
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}

      <main className="flex-1 p-8">
        <header className="mb-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <div>
              <DateSelect />
            </div>
          </div>
        </header>
        <div></div>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Patients Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-blue-700">
                Total Patients
              </h2>
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">{total}</p>
          </div>

          {/* Doctors Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-green-700">
                Total Surgery
              </h2>
              <Icon
                icon="guidance:surgery"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">35</p>
          </div>

          {/* Appointments Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-pink-700">
                Appointments Today
              </h2>
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">50</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-pink-700">
                Appointments Today
              </h2>
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">50</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-pink-700">
                Appointments Today
              </h2>
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">50</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2 text-pink-700">
                Appointments Today
              </h2>
              <Icon
                icon="mdi:patient-outline"
                width="40"
                height="40"
                style={{ color: "black" }}
              />
            </div>
            <p className="text-5xl font-extrabold text-gray-800">50</p>
          </div>
        </section>

        {/* Recent Appointments Table */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Recent Appointments
          </h2>
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-blue-200 text-left text-blue-900 font-semibold">
                  Patient Name
                </th>
                <th className="py-3 px-4 bg-blue-200 text-left text-blue-900 font-semibold">
                  Doctor
                </th>
                <th className="py-3 px-4 bg-blue-200 text-left text-blue-900 font-semibold">
                  Date
                </th>
                <th className="py-3 px-4 bg-blue-200 text-left text-blue-900 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {pataints.map((row) => (
                <TableRow pataints={row} key={row._id} />
              ))}

              {/* More rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
