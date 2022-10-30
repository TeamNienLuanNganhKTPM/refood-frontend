/** @format */

import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import React from "react";
import ProductItem from "modules/products/ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { page } from "utils/constants";
import { getAllFoodPagination } from "store/food/slice";

const Search = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { foods } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!foods || !foods?.length) return;
    setPageCount(Math.ceil(foods.length / page.countFood));
  }, [foods, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * page.countFood) % foods.length;
    setItemOffset(newOffset);
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

export default Search;
