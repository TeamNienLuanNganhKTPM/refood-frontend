/** @format */

import ProductImage from "modules/products/ProductImage";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const DetailsThumbStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
  /* opacity: 0.7; */
  img {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    opacity: 0.6;
    cursor: pointer;
  }
  img:hover,
  img:hover.active {
    transform: scale(1.1);
    transition: all 1s;
  }
  img.active {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    opacity: 1;
    transition: all linear;
  }
`;

const DetailsThumb = ({ image, className = "", getIndexImg }) => {
  const imageRef = useRef(null);
  useEffect(() => {
    let imgSelector = document.getElementsByClassName("thumb-image");
    const imgItem = imgSelector[0].children[0];
    imgItem.classList.add("active");
    return () => {
      imgItem.classList.remove("active");
    };
  }, []);

  const handleClickImage = (index) => {
    getIndexImg(index);
    const images = imageRef.current.children;
    const ImgActive = document.querySelectorAll(".active");
    for (let i = 0; i < ImgActive.length; i++) {
      ImgActive[i].classList.remove("active");
    }
    images[index].classList.add("active");
  };

  return (
    <>
      <DetailsThumbStyled ref={imageRef} className={className}>
        {image.length > 0 &&
          image.map((img, index) => {
            return (
              <ProductImage
                url={img}
                key={index}
                onClick={() => handleClickImage(index)}
              ></ProductImage>
            );
          })}
      </DetailsThumbStyled>
    </>
  );
};

export default DetailsThumb;
