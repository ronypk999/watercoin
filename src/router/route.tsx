import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ContextProvider from "../provider/ContextProvider";

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
  },
]);
