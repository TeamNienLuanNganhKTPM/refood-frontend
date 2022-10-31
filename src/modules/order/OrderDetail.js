/** @format */

import Swal from "sweetalert2";
import StepProcessBar from "components/stepprocessbar/StepProcessBar";
import selectState from "utils/selectState";
import React from "react";
import queryString from "query-string";
import ProductPrice from "modules/products/ProductPrice";
import priceVN from "utils/priceVN";
import OrderDetailItem from "./OrderDetailItem";
import formatToDate from "../../utils/formatDate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrderDetail, getOrderDetail } from "store/order/slice";
import { Button } from "components/button";

const OrderDetail = () => {
  const param = useParams();
  const id = param.slug;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchOrderDetail() {
      dispatch(getOrderDetail(id));
    }
    fetchOrderDetail();
  }, [dispatch, id]);

  const { orderDetail } = useSelector((state) => state.order);
  const data = orderDetail?.OrderDetails ? orderDetail?.OrderDetails : [];

  const location = useLocation();
  const value = queryString.parse(location.search);

  useEffect(() => {
    if (value.paid === "vnpay") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đã thanh toán bằng VNPay",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, []);

  const handleDeleteOrderDetail = () => {
    try {
      Swal.fire({
        title: "Bạn muốn hủy đơn hàng?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        confirmButtonColor: "#1DC071",
        cancelButtonText: "Hủy",
        cancelButtonColor: "#EB5757",
      }).then(async (result) => {
        if (result.isConfirmed) {
          dispatch(deleteOrderDetail(orderDetail?.OrderID));
          navigate("/user/order");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (!param?.slug) return null;
  return (
    <>
      <div
        className="flex items-center justify-between py-2 mb-10 border-b border-b-line"
        onClick={() => {
          navigate("/user/order/");
        }}
      >
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
          <span className="text-redPrimary">
            {selectState(orderDetail?.OrderState)}
          </span>
        </div>
      </div>
      <div className="relative">
        <StepProcessBar
          orderState={orderDetail?.OrderState ? orderDetail?.OrderState : 0}
        ></StepProcessBar>
      </div>
      <div className="mt-10 border-b border-b-line">
        <h3 className="mb-2 text-lg font-medium b-4 text-text">Địa chỉ</h3>
        <div className="flex flex-col gap-1 text-sm ">
          <span className="p-2 text-text1 bg-bgPrimary">
            {orderDetail?.OrderAdress}
          </span>
        </div>
      </div>
      <div className="mt-10 border-b border-b-line">
        <h3 className="mb-2 text-lg font-medium b-4 text-text">Ghi chú</h3>
        <div className="flex flex-col gap-1 text-sm ">
          <span className="p-2 text-text1 bg-bgPrimary">
            {orderDetail?.OrderNote
              ? orderDetail?.OrderNote
              : "Không có ghi chú"}
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
      {orderDetail?.OrderState === 0 && (
        <div className="flex justify-end py-4">
          <Button
            className="w-[140px]"
            height="44px"
            kind="primary"
            onClick={handleDeleteOrderDetail}
          >
            Hủy đơn
          </Button>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
