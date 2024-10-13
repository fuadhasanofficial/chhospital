import { createBrowserRouter } from "react-router-dom";
import PatientInformationForm from "../Components/AddPage/PatientInformationForm";
import Receipt from "../Components/AddPage/Recipt";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/add-page", element: <PatientInformationForm /> },
      {
        path: "/recipt/:id",
        element: <Receipt />,
        loader: ({ params }) => {
          return fetch(
            `https://chhospital-server.vercel.app/pataient/${params.id}`
          );
        },
      },
    ],
  },
]);
