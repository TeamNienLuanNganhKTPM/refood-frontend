/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodPagination } from "store/food/slice";
import Swal from "sweetalert2";
import { page } from "utils/constants";
import ProductItem from "./ProductItem";

const ProductAll = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { foods, pageNumber } = useSelector((state) => state.food);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!foods || !foods.length) return;
    setPageCount(pageNumber);
  }, [foods, nextPage, pageNumber]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    Swal.fire({
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      dispatch(
        getAllFoodPagination({
          currentPage: event.selected + 1,
          countFood: page.countFood,
        })
      );
    });
  };

  return (
    <>
      {foods.length ? (
        <div>
          <div className="flex-layout grid-row">
            {foods.map((food) => (
              <ProductItem key={food.FoodName} data={food}></ProductItem>
            ))}
          </div>
          <div className="flex justify-center mt-10 bg-white rounded">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<<"
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      ) : (
        <span>Không có món ăn nào được tìm thấy!</span>
      )}
    </>
  );
};

export default ProductAll;
