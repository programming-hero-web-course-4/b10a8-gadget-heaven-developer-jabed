import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import EroorPage from "./components/ErrorPage.jsx/EroorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import AllProducts from "./components/Products/Product/AllProducts";
import IPhones from "./components/Products/IPhones/IPhones";
import Laptops from "./components/Products/Laptops/Laptops";
import SmartsWatchs from "./components/Products/smartWatchs/SmartsWatchs";
import Phones from "./components/Products/phones/Phones";
import Cart from "./components/Dashboard/Cart&WishList/Cart";
import WishList from "./components/Dashboard/Cart&WishList/WishList";
import Purchase from "./components/Store/Purchase"; // Import Purchase component
import Details from "./components/Details/Details";
import Statictics from "./components/Statictics/Statictics";

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
        path: "/products/:product_id",
        element: <Details />,
        loader: async () => {
          const res = await fetch("products.json");
          return res.json();
        },
      },
      {
        path: "/wishList",
        element: <WishList />,
      },

      {
        path: "/statistics",
        element: <Statictics></Statictics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true, // 👈 This makes "cart" the default child route
            element: <Cart />,
            loader: () => {
              const storedCart = localStorage.getItem("cart");
              return storedCart ? JSON.parse(storedCart) : [];
            },
          },
          {
            path: "cart",
            element: <Cart />,
            loader: () => {
              const storedCart = localStorage.getItem("cart");
              return storedCart ? JSON.parse(storedCart) : [];
            },
          },
          {
            path: "wishlist",
            element: <WishList />,
            loader: () => {
              const storedWish = localStorage.getItem("wishlist");
              return storedWish ? JSON.parse(storedWish) : [];
            },
          },
        ],
      },

      {
        path: "purchase", // Purchase route
        element: <Purchase />, // Purchase component
      },
      {
        path: "wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
