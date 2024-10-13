// componet by fuad hasan

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
