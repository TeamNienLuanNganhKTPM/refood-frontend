/** @format */

import { Button } from "components/button";
import OrderDetailItem from "modules/order/OrderDetailItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail } from "store/order/slice";
import RatingStar from "./RatingStar";

const UserRatingModal = ({ closeModal, orderId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchOrderDetail() {
      // dispatch(getOrderDetail(orderId));
    }
    fetchOrderDetail();
  }, [dispatch, orderId]);
  const { orderDetail } = useSelector((state) => state.order);
  const data = orderDetail?.OrderDetails ? orderDetail?.OrderDetails : [];
  return (
    <div>
      <div className="flex items-start justify-between pb-3 mb-4 border-b border-b-line">
        <h3 className="text-xl font-medium text-text">Cập nhật đánh giá</h3>
        <div className="cursor-pointer text-text" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="lg:w-[500px] md:w-[500px] w-[300px]">
        <div
          className={`flex flex-col gap-4 max-h-[250px] mb-8 border-b   border-b-line px-2 ${
            data?.length > 2 ? "overflow-y-scroll scroll" : ""
          }`}
        >
          <OrderDetailItem data={data}></OrderDetailItem>
        </div>
        <div className="flex items-center justify-start gap-3">
          <span className="text-base font-medium lg:text-lg text-text">
            Mức đội hài lòng:
          </span>
          <RatingStar></RatingStar>
        </div>
        <div className="flex justify-end mt-8">
          <Button kind="primary" height="44px">
            Đánh giá
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserRatingModal;
