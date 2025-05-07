import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import Bookings from "./Components/Bookings/Bookings";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Herosection from "./Components/Herosection/Herosection";
import Description from "./Components/Description/Description";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    errorElement:<Contact></Contact>,
    children: [
      {index:true ,Component:Herosection},
      { path: "booking", Component: Bookings },
      { path: "blog", Component: Blog },
      { path: "contact-us", Component: Contact },
      {path:"lawyer-description/:id" , Component:Description}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      data-theme="light"
      className="min-h-screen bg-base-200 text-base-content"
    >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
