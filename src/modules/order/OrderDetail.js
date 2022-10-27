/** @format */

import StepProcessBar from "components/stepprocessbar/StepProcessBar";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetail } from "store/order/slice";
import OrderDetailItem from "./OrderDetailItem";
import formatToDate from "../../utils/formatDate";
import ProductPrice from "modules/products/ProductPrice";
import priceVN from "utils/priceVN";

const OrderDetail = () => {
  const param = useParams();
  const id = param.slug;

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchOrderDetail() {
      dispatch(getOrderDetail(id));
    }
    fetchOrderDetail();
  }, [dispatch, id]);

  const { orderDetail } = useSelector((state) => state.order);
  const data = orderDetail?.OrderDetails ? orderDetail?.OrderDetails : [];
  return (
    <div>
      <div className="flex items-center justify-between py-2 border-b border-b-line">
        <div className="flex cursor-pointer text-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-medium text-center uppercase text-text1">
            Trở lại
          </span>
        </div>
        <div className="flex items-center justify-end gap-3 text-base font-normal uppercase">
          <span className="text-text1">
            Ngày đặt: {formatToDate(orderDetail?.OrderDate)}
          </span>
          <span>|</span>
          <span className="text-text1">
            ID Đơn hàng: {orderDetail?.OrderID}
          </span>
          <span>|</span>
          <span className="text-redPrimary">Đơn hàng đã giao</span>
        </div>
      </div>
      <StepProcessBar></StepProcessBar>
      <div className="py-3 border-b border-b-line">
        <h3 className="text-lg font-medium b-4 text-text">Địa chỉ</h3>
        <div className="flex flex-col gap-1 text-sm ">
          <span className="p-2 text-text1 bg-bgPrimary">
            {orderDetail?.OrderAdress}
          </span>
        </div>
      </div>
      <h3 className="mt-4 mb-4 text-lg font-medium text-text">
        Danh sách món ăn
      </h3>
      <div className="flex flex-col gap-4">
        <OrderDetailItem data={data}></OrderDetailItem>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-end gap-3">
          <span className="text-lg font-medium text-text">
            Phương thức thanh toán:
          </span>
          <span className="text-base text-text1">
            {orderDetail?.OrderPaymentMethod}
          </span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <span className="text-lg font-medium text-text">Tổng tiền:</span>
          <ProductPrice sizeText="20px">
            {priceVN(orderDetail?.OrderSubTotal)}
          </ProductPrice>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
