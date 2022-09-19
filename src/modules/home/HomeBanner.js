/** @format */

import SectionLeft from "components/layout/SectionLeft";
import SectionRight from "components/layout/SectionRight";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay, Navigation, Pagination } from "swiper";

const HomeBannerStyled = styled.section`
  padding-top: 20px;
  .banner-main {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 516px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <div className="banner-main">
        <SectionLeft></SectionLeft>
        <SectionRight>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img src="/banner.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </SectionRight>
      </div>
    </HomeBannerStyled>
  );
};

export default HomeBanner;
