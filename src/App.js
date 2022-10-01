/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const UserProfile = lazy(() => import("modules/profile/UserProfile"));
const UserPassword = lazy(() => import("modules/profile/UserPassword"));
const UserPage = lazy(() => import("pages/UserPage"));
const UserAddress = lazy(() => import("modules/profile/UserAddress"));
const UserPurchase = lazy(() => import("modules/profile/UserPurchase"));
const UserNotifyOrder = lazy(() => import("modules/profile/UserNotifyOrder"));
const UserPromotion = lazy(() => import("modules/profile/UserPromotion"));
const UserRating = lazy(() => import("modules/profile/UserRating"));
const UserVoucher = lazy(() => import("modules/profile/UserVoucher"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const ProductDetailsPage = lazy(() => import("pages/ProductDetailsPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const CartPage = lazy(() => import("pages/CartPage"));
const AccountPage = lazy(() => import("pages/AccountPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/account" element={<AccountPage></AccountPage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route
            path="/:slug"
            element={<ProductDetailsPage></ProductDetailsPage>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
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
              path="/user/purchase"
              element={<UserPurchase></UserPurchase>}
            ></Route>
            <Route
              path="/user/notifications/order"
              element={<UserNotifyOrder></UserNotifyOrder>}
            ></Route>
            <Route
              path="/user/notifications/promotion"
              element={<UserPromotion></UserPromotion>}
            ></Route>
            <Route
              path="/user/notifications/rating"
              element={<UserRating></UserRating>}
            ></Route>
            <Route
              path="/user/voucher"
              element={<UserVoucher></UserVoucher>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
