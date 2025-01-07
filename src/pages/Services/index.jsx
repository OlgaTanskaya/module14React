import style from "./index.module.css";
import IMG_SERVICES from "../../assets/Vector_services.png";
import PHOTO_SERVICES from "../../assets/Image_services.png";
import BUTTONS_SERVICES from "../../assets/Buttons.png";

const Services = () => {
  return (
    <section className="container">
      <div className={style.services}>
        <div className={style.services_title_container}>
          <div>
            <h3 className={style.services_h3} id="services">
              SERVICES
            </h3>
            <h1 className={style.services_h1}>MY PHOTOGRAPHY SERVICES</h1>
          </div>
          <div className={style.services_title}>
            <img
              className={style.services_title_img}
              src={BUTTONS_SERVICES}
              alt=""
            />
            <button className={style.services_title_btn}>
              {" "}
              View All Services →
            </button>
          </div>
        </div>
        <div className={style.services_block}>
          <div>
            <div className={style.services_block_left}>
              <h5 className={style.servises_h5}>EVENTS</h5>
              <button className={style.btn_servises}>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <p className={style.servises_p}>
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it’s a wedding, corporate
              event, or milestone celebration, we’re there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
            <h6 className={style.servises_h6}>Service Highlights</h6>
            <ul>
              <li className={style.servises_li}>
                <img src={IMG_SERVICES} alt="" />
                COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE.
              </li>
              <li className={style.servises_li}>
                <img src={IMG_SERVICES} alt="" />
                SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT.
              </li>
              <li className={style.servises_li}>
                <img src={IMG_SERVICES} alt="" />A MIX OF CANDID AND POSED SHOTS
                FOR A COMPREHENSIVE STORY.
              </li>
              <li className={style.servises_li}>
                <img src={IMG_SERVICES} alt="" />
                QUICK TURNAROUND FOR YOU TO RELIVE THE DAY’S HIGHLIGHTS.
              </li>
            </ul>
          </div>
          <div className={style.services_img_inner}>
            <img className={style.servises_img} src={PHOTO_SERVICES} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
