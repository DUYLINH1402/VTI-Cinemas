import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { ErrorPage } from "../Error/ErrorPage";

// Create react router dom
const routerPage = createBrowserRouter([
  {
    path: "/home", // go to HomePage
    element: <Header />,
  },
  {
    path: "/", // go to HomePage}
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export const RouterPage = () => {
  return (
    <>
      <div>
        <RouterProvider router={routerPage} />
      </div>
    </>
  );
};
