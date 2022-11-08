/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
const PartyList = ({ data }) => {
  const dateParty = new Date(data.PartyTimeStart);
  const hour = dateParty.toLocaleTimeString("vi-VN");
  const date = dateParty.toLocaleDateString("vi-VN");
  const navigate = useNavigate();
  const handleClickPartyDetail = (id) => {
    navigate(`/user/party/detail?id=${id}`);
  };
  if (!data) return null;
  return (
    <tr>
      <td>{data.PartyID}</td>
      <td>{`${hour} - ${date}`}</td>
      <td>{data.PartyPlace}</td>
      <td>{data.PartySubTotal}</td>
      <td>
        <span className="block w-full px-2 py-1 font-medium text-center rounded bg-primary bg-opacity-10 text-primary">
          {data.PartyState}
        </span>
      </td>
      <td>
        <span
          className="transition-all cursor-pointer hover:text-secondary"
          onClick={() => handleClickPartyDetail(data.PartyID)}
        >
          Xem chi tiết
        </span>
      </td>
    </tr>
  );
};

export default PartyList;
