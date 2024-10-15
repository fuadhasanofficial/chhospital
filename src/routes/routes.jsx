import { createBrowserRouter } from "react-router-dom";
import PatientInformationForm from "../Components/AddPage/PatientInformationForm";
import Receipt from "../Components/AddPage/Recipt";

import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-patient", element: <PatientInformationForm /> },
      {
        path: "/recipt/:id",
        element: <Receipt />,
        loader: ({ params }) => {
          return fetch(
            `https://chhospital-server-99jf.vercel.app/pataient/${params.id}`
          );
        },
      },
    ],
  },
]);
