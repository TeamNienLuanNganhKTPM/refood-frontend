/** @format */

import { Dropdown } from "components/dropdown";
import React from "react";

const payList = [
  {
    id: 1,
    label: "Thanh toán khi nhận hàng",
    paymentmethod: "cod",
  },
  {
    id: 2,
    label: "VNPAY",
    paymentmethod: "vnpay",
  },
  {
    id: 3,
    label: "Thẻ ngân hàng",
    paymentmethod: "credit",
  },
];

const OrderPay = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-text">Phương thức thanh toán</h3>
      <div>
        <Dropdown>
          <Dropdown.Select
            placeholder="Chọn phương thức thanh toán"
            className="w-full py-3 text-sm border rounded bg-bgPrimary text-primary border-primary"
          ></Dropdown.Select>
          <Dropdown.List className="border border-line">
            {payList.map((item) => (
              <Dropdown.Option key={item.id}>
                <span className="text-base">{item.label}</span>
              </Dropdown.Option>
            ))}
          </Dropdown.List>
        </Dropdown>
      </div>
    </div>
  );
};

export default OrderPay;
