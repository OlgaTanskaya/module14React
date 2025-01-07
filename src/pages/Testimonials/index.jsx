import style from "./index.module.css";
import BUTTONS_TESTIMONIALS from "../../assets/Buttons.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import Card from "../../components/card_comment/index";
import swiperArr from "../../assets/swiper_arr.svg";
import "swiper/css";
import MockComment from "../../data/mockComment.json";
const Testimonials = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="container">
      <h3>TESTIMONIALS</h3>
      <h1>WHAT MY CLIENTS SAY</h1>
      <div className={style.Testimonials_title_container}>
        <div className={style.Testimonials_title}>
          Total Reviews
          <h6>323</h6>
        </div>
        <div className={style.Testimonials_title_right}>
          <div className={style.swiper_buttons}>
            <button onClick={goToPrevSlide} className={style.swiper_button}>
              <img src={swiperArr} alt="" />
            </button>
            <button onClick={goToNextSlide} className={style.swiper_button}>
              <img src={swiperArr} alt="" />
            </button>
          </div>
          <button className={style.Testimonials_title_btn}>
            {" "}
            View All Testimonials →
          </button>
        </div>
      </div>
      <div className={style.Testimonials_svg}></div>
      <div className="comments">
        <div className={style.comment_cotainer}>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {MockComment.map((item) => (
              <SwiperSlide>
                <Card key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
