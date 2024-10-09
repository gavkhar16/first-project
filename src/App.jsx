import React from "react";
import "./App.css";
import { First } from "./pages/First";
import { Second } from "./pages/Second";
import { Third } from "./pages/Third";
import { Fourth } from "./pages/Fourth";
import { Fifth } from "./pages/Fifth";
import { End } from "./pages/End";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/second",
    element: <Second />,
  },
  {
    path: "/third",
    element: <Third />,
  },
  {
    path: "/fourth",
    element: <Fourth />,
  },
  {
    path: "/fifth",
    element: <Fifth />,
  },
  {
    path: "/end",
    element: <End />,
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
