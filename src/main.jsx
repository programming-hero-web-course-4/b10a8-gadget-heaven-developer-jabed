import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import EroorPage from "./components/ErrorPage.jsx/EroorPage";
import Home from "./components/Home/Home";
import Statictics from "./components/Statictics/Statictics";
import Dashboard from "./components/Dashboard/Dashboard";
import AllProducts from "./components/Products/Product/AllProducts";
import IPhones from "./components/Products/IPhones/IPhones";
import Laptops from "./components/Products/Laptops/Laptops";
import SmartsWatchs from "./components/Products/smartWatchs/SmartsWatchs";
import Phones from "./components/Products/phones/Phones";
import Details from "./components/Details/Details";
import Cart from "./components/Dashboard/Cart&WishList/Cart";
import WishList from "./components/Dashboard/Cart&WishList/WishList";
import Purchase from "./components/Store/Purchase";  // Import Purchase component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <EroorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { index: true, element: <AllProducts /> },
          { path: "/allProducts", element: <AllProducts /> },
          { path: "laptops", element: <Laptops /> },
          { path: "phones", element: <Phones /> },
          { path: "smartWatches", element: <SmartsWatchs /> },
          { path: "iPhone", element: <IPhones /> },
        ],
      },
      {
        path: "products/:product_id",
        element: <Details />,
        loader: ({ params }) => fetch(`/products/${params.product_id}.json`),
      },
      {
        path: "/statistics",
        element: <Statictics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "cart",
            element: <Cart />,
            loader: () => fetch("/products.json"),
          },
          { path: "wishlist", element: <WishList /> },
        ],
      },
      {
        path: "purchase",  // Purchase route
        element: <Purchase />,  // Purchase component
      },
      {
        path: "wishlist", 
        element: <WishList></WishList>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
