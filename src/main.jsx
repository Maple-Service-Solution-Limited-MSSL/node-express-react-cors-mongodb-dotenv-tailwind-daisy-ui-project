import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddNew from './components/AddNew.jsx';
import DeleteCoffe from './components/DeleteCoffe.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "AddNew",
    element: <AddNew></AddNew>,
  },
  {
    path: "DeleteCoffe",
  element: <DeleteCoffe></DeleteCoffe>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);