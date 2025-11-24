import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children :[
        {
            path :"/",
            element :<Home/>
        },
        {
          path :'/services',
          element :<Services/>
        },
        {
          path :'/Login',
          element :<Login></Login>
        },
        {
          path :'/signup',
          element :<Register></Register>
        }
    ]
  },
]);

export default router;