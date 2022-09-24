/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const HomePage = lazy(() => import("pages/HomePage"));
const ProductDetailsPage = lazy(() => import("pages/ProductDetailsPage"));
const AccountPage = lazy(() => import("pages/AccountPage"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const CartPage = lazy(() => import("pages/CartPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/tai-khoan"
            element={<AccountPage></AccountPage>}
          ></Route>
          <Route path="/mon-an" element={<SearchPage></SearchPage>}></Route>
          <Route
            path="/:slug"
            element={<ProductDetailsPage></ProductDetailsPage>}
          ></Route>
          <Route path="/gio-mon-an" element={<CartPage></CartPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
