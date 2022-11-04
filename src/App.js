/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const UserRating = lazy(() => import("modules/profile/UserRating"));
const UserPurchase = lazy(() => import("modules/profile/UserPurchase"));
const UserProfile = lazy(() => import("modules/profile/UserProfile"));
const UserPassword = lazy(() => import("modules/profile/UserPassword"));
const UserPage = lazy(() => import("pages/UserPage"));
const UserAddress = lazy(() => import("modules/profile/UserAddress"));
const Search = lazy(() => import("modules/search/Search"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));
const ProductDetailsPage = lazy(() => import("pages/ProductDetailsPage"));
const ProductAll = lazy(() => import("modules/products/ProductAll"));
const PartyPage = lazy(() => import("pages/PartyPage"));
const PartyCreate = lazy(() => import("modules/party/PartyCreate"));
const Party = lazy(() => import("modules/party/Party"));
const OrderPage = lazy(() => import("pages/OrderPage"));
const OrderDetailPage = lazy(() => import("pages/OrderDetailPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const CartPage = lazy(() => import("pages/CartPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<RegisterPage></RegisterPage>}></Route>
          <Route element={<PartyPage></PartyPage>}>
            <Route path="/party" element={<Party></Party>}></Route>
          </Route>
          <Route
            path="/party/create"
            element={<PartyCreate></PartyCreate>}
          ></Route>

          <Route element={<ProductPage></ProductPage>}>
            <Route path="/food" element={<ProductAll></ProductAll>}></Route>
            <Route path="/food/find-foods" element={<Search></Search>}></Route>
          </Route>

          <Route
            path="/:slug"
            element={<ProductDetailsPage></ProductDetailsPage>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>

          <Route path="/order" element={<OrderPage></OrderPage>}></Route>

          <Route element={<UserPage></UserPage>}>
            <Route
              path="/user/account/profile"
              element={<UserProfile></UserProfile>}
            ></Route>
            <Route
              path="/user/account/address"
              element={<UserAddress></UserAddress>}
            ></Route>
            <Route
              path="/user/account/password"
              element={<UserPassword></UserPassword>}
            ></Route>
            <Route
              path="/user/order"
              element={<UserPurchase></UserPurchase>}
            ></Route>
            <Route
              path="/user/order/:slug"
              element={<OrderDetailPage></OrderDetailPage>}
            ></Route>
            <Route
              path="/user/rating"
              element={<UserRating></UserRating>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
