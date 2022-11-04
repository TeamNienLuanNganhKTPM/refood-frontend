/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findPartyAll } from "store/party/slice";
import PartyItem from "./PartyItem";

const Party = () => {
  const { partys } = useSelector((state) => state.party);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickAllParty = () => {
    dispatch(findPartyAll());
    window.location.reload();
  };
  return (
    <>
      <div>
        <div className="flex items-center gap-4 mb-6">
          <span
            className="px-3 py-3 text-white rounded cursor-pointer bg-primary hover:opacity-90"
            onClick={handleClickAllParty}
          >
            Xem tất cả
          </span>
          <span
            className="px-3 py-3 text-white rounded cursor-pointer bg-secondary hover:opacity-90"
            onClick={() => navigate("/party/create")}
          >
            Đặt tiệc ngay
          </span>
        </div>
        {partys.length ? (
          <div>
            <div className="flex-layout grid-row">
              {partys.map((party) => (
                <PartyItem key={party.FoodName} data={party}></PartyItem>
              ))}
            </div>
          </div>
        ) : (
          <span>Không có món ăn nào được tìm thấy!</span>
        )}
      </div>
    </>
  );
};

export default Party;
