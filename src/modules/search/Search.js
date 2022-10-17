/** @format */

import ProductItem from "modules/products/ProductItem";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodPagination } from "store/food/slice";
import Swal from "sweetalert2";
import { page } from "utils/constants";

const Search = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { foods } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const data = foods ? foods : [];
  useEffect(() => {
    if (!data || !data?.length) return;
    setPageCount(Math.ceil(data.length / page.countFood));
  }, [foods, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * page.countFood) % data.length;
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
      <div className="flex-layout grid-row">
        {foods.length > 0 &&
          foods.map((food) => (
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
    </>
  );
};

export default Search;
