/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import formatToDate from "utils/formatDate";
import priceVN from "utils/priceVN";
import selectState from "utils/selectState";

const OrderItem = ({ data }) => {
  const navigate = useNavigate();
  const handleClickOrderDetail = (id) => {
    navigate(`/user/order/${id}`);
  };
  return (
    <tr>
      <td>{data.OrderID}</td>
      <td>{formatToDate(data.OrderDate)}</td>
      <td>{data.OrderPaymentMethod}</td>
      <td>
        <span className="px-1 py-2 bg-bgPrimary text-primary">
          {selectState(data.OrderState)}
        </span>
      </td>
      <td>{priceVN(data.OrderSubTotal)}</td>
      <td>
        <span
          className="transition-all cursor-pointer hover:text-secondary"
          onClick={() => handleClickOrderDetail(data.OrderID)}
        >
          Xem chi tiết
        </span>
      </td>
    </tr>
  );
};

export default OrderItem;
