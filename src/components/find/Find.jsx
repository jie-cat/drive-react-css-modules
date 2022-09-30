import React from "react";
import Card from "./Card";
import styles from "./Find.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          breakpoints={{
            // when window width is >= 640px
            340: {
              width: 340,
              slidesPerView: 1,
            },
            500: {
              width: 500,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={40} //slide間距
          slidesPerView={5} //slide數量
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // RWD
        >
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              make="bmw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFzZXJhdGl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
              make="Maserati "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              make="benz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFycmFyaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              make="Ferrari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              make="Porschi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/flagged/photo-1564153296137-400b51e1ff6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1815&q=80"
              make="Toyota"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              make="Rolls-Royce"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1615394695852-da39a8df9bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              make="McLaren"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1566023767296-d229ef68147b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              make="Pagani"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              make="Bugatti "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
