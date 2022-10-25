/** @format */

import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import React from "react";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { page } from "utils/constants";
import { getAllFoodPagination } from "store/food/slice";

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
      <div>
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
      </div>
    </>
  );
};

export default ProductAll;
