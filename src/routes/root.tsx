import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Register } from "../pages/register/Register";
import View from "../pages/view/view";

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
      path: '/view',
      element: <View />
    }
]);
  