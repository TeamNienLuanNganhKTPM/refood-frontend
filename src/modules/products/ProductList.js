/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductItem from "./ProductItem";

const data = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "2",
    url: "https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xlrecusyebuedhavh6bx.webp",
    title: "Buffet Lẩu Thượng Hạng",
    star: 4,
    price: 656000,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <>
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {data.length > 0 &&
            data.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem data={product}></ProductItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </div>
  );
};

export default ProductList;
