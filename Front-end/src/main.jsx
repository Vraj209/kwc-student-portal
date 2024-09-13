import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentDirectoryPage from "./pages/StudentDirectoryPage.jsx";
import StudentFormPage from "./pages/StudentFormPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import {
  FemaleStudent,
  MaleStudent,
  MisStudent,
  Satsangi,
  StudentPreview,
  StudentUpdate,
} from "./components/index.js";
import SevaPage from "./pages/SevaPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import TableLayout from "./components/TableLayout/index.jsx";
import SevaTableMaster from "./components/SevaTableMaster/SevaTableMaster.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/student-directory",
    element: <StudentDirectoryPage />,
  },
  {
    path: "/student-form",
    element: <StudentFormPage />,
  },
  {
    path: "/sevaPage",
    element: <SevaPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/maleStudent",
    element: <MaleStudent />,
  },
  {
    path: "/femaleStudent",
    element: <FemaleStudent />,
  },
  {
    path: "/satsangiStudent",
    element: <Satsangi />,
  },
  {
    path: "/misStudent",
    element: <MisStudent />,
  },
  {
    path: "/sevaTable",
    element: <SevaTableMaster />,
  },
  { path: "/users/previewUser/:id", element: <StudentPreview /> },
  { path: "/users/updateUser/:id", element: <StudentUpdate /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
