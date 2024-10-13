// componet by fuad hasan
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-[15%]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <nav className="bg-blue-600 w-64 p-6 flex flex-col space-y-6">
          <h1 className="text-white text-3xl font-bold mb-4">
            Hospital Dashboard
          </h1>
          <ul className="text-white">
            <li className="mb-4">
              <Link to="/add-page" className="hover:text-gray-300">
                Add Patient
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/add-test" className="hover:text-gray-300">
                Add Test
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/add-operation" className="hover:text-gray-300">
                Add Operation
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/add-ultrasound" className="hover:text-gray-300">
                Add Ultrasound
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 p-10"></div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4">
        <div className="container mx-auto text-center">
          <p className="text-white">© 2024 Hospital Management</p>
        </div>
      </footer>
    </div>
  );
};

export default SideNav;
