import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { ErrorPage } from "../Error/ErrorPage";
import { Header } from "./Header/Header";

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
