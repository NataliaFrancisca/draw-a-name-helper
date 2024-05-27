import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Register } from "../pages/register/Register";
import Sort from "../pages/sort/Sort";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
  
    {
      path: '/register',
      element: <Register />
    },

    {
      path: '/sort',
      element: <Sort />
    }
]);
  