import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ContextProvider from "../provider/ContextProvider";
import Doc from "../Doc";
import Welcome from "../doc/welcome";
import NotFound from "../NotFound";

export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App></App>
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/whitepaper",
    element: (
      <ContextProvider>
        <Doc></Doc>
      </ContextProvider>
    ),
    children: [
      {
        path: "/whitepaper",
        element: <Welcome></Welcome>,
      },
    ],
  },
]);
