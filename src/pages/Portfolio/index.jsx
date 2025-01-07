import style from "./index.module.css";

import portfolioArr from "../../assets/portfolio_arr.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperArr from "../../assets/swiper_arr.svg";
import React, { useRef } from "react";
import MockPortfolio from "../../data/mockPortfolio.json";

const Portfolio = () => {
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
    <section className={style.portfolio}>
      <div className="container">
        <div className={style.portfolio_title_container}>
          <div>
            <h3 className={style.portfolio_h3} id="portfolio">
              PORTFOLIO
            </h3>
            <h1 className={style.portfolio_h1}>Explore My photography work</h1>
          </div>
          <div className={style.portfolio_title}>
            <div className={style.swiper_buttons}>
              <button onClick={goToPrevSlide} className={style.swiper_button}>
                <img src={swiperArr} alt="" />
              </button>
              <button onClick={goToNextSlide} className={style.swiper_button}>
                <img src={swiperArr} alt="" />
              </button>
            </div>
            <button className={style.portfolio_title_btn}>
              {" "}
              View All Works →
            </button>
          </div>
        </div>
        <div className={style.portfolio_swiper_cotainer}>
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
            {MockPortfolio.map((item) => (
              <SwiperSlide>
                <div key={item.id} className={style.card}>
                  <img src={item.src} />
                  <div className={style.bottom}>
                    <div className={style.left}>
                      <div className={style.title}>{item.name}</div>
                      <div className={style.subtitle}>{item.text}</div>
                    </div>
                    <a href="" className={style.link}>
                      VIEW PROJECT
                      <img src={portfolioArr} alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
