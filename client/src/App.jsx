import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AppLayout from "./AppLayout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
