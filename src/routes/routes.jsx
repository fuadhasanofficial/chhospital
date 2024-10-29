import { createBrowserRouter } from "react-router-dom";
import PatientInformationForm from "../Components/AddPage/PatientInformationForm";

import AddOperation from "../Components/AddPage/AddOparation";
import Recipt from "../Components/AddPage/Recipt";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-patient", element: <PatientInformationForm /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add-operation", element: <AddOperation /> },
    ],
  },
  {
    path: "/recipt/:id",
    element: <Recipt />,
    loader: ({ params }) => {
      return fetch(
        `https://chhospital-server-99jf.vercel.app/pataient/${params.id}`
      );
    },
  },
]);
