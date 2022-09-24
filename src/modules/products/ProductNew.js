/** @format */

import { Heading } from "components/heading";
import React from "react";
import ProductItem from "./ProductItem";

const data = [
  {
    id: "1",
    url: "https://yummyday.vn/uploads/images/ga-nuong-la-chanh-2.jpg",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "2",
    url: "https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xlrecusyebuedhavh6bx.webp",
    title: "Buffet Lẩu Thượng Hạng ",
    star: 4,
    price: 656000,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Gà nước lá chanh",
    star: 4,
    price: 100000,
  },
];

const ProductNew = () => {
  return (
    <div className="mb-10">
      <Heading title="Món ăn mới" view="Xem tất cả"></Heading>
      <div className="flex-layout grid-row">
        {data.length > 0 &&
          data.map((product) => (
            <ProductItem key={product.id} data={product}></ProductItem>
          ))}
      </div>
    </div>
  );
};

export default ProductNew;
