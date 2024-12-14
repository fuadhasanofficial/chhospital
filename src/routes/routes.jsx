import { createBrowserRouter } from "react-router-dom";
import PatientInformationForm from "../Components/AddPage/PatientInformationForm";

import ExpenseForm from "../Components/Acount/ExpenseForm";
import AddOperation from "../Components/AddPage/AddOparation";
import AddTest from "../Components/AddPage/AddTest";
import Recipt from "../Components/AddPage/Recipt";
import AdminPanel from "../Components/Authtemtication/Admin";
import LoginForm from "../Components/Authtemtication/Login";
import RegistrationForm from "../Components/Authtemtication/Registration";
import Dashboard from "../Components/Dashboard/Dashboard";
import ProductList from "../Components/Dashboard/Tiny-components/Products";
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
      { path: "/login", element: <LoginForm /> },
      { path: "/admin", element: <AdminPanel /> },
      { path: "/add-test", element: <AddTest /> },
      { path: "/acount-expense", element: <ExpenseForm /> },
      { path: "/signup", element: <RegistrationForm /> },
      { path: "/products", element: <ProductList /> },
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
