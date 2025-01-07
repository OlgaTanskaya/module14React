import style from "./index.module.css";
import FACES from "../../assets/home.png";
import VECTOR from "../../assets/VECTOR.png";
import STAR from "../../assets/Icon.png";
const Home = () => {
  return (
    <section className={style.home}>
      <div className="container">
        <div className={style.home_title_container}>
          <div>
            <h3 className={style.home_h3}>STUNNING PHOTOGRAPHY BY</h3>
            <h1 className={style.home_h1}>DAMIEN BRAUN</h1>
          </div>
          <img src={VECTOR} className={style.img_vector} alt="" />
          <div className={style.home_lets}>
            LET’S{" "}
            <button className={style.btn_home}>
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
            <br />
            WORK TOGETHER
          </div>
        </div>
      </div>

      <div>
        <marquee behavior="scroll" direction="left">
          <ul className={style.ul_home}>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>EVENT PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>COMERCIAL PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>PRODUCT PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>WEDDING PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>LANDSCAPE PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>BRANDING PHOTOGRAPHY</li>
            <li>
              <img src={STAR} alt="" />
            </li>
            <li>PORTRAIT PHOTOGRAPHY</li>
          </ul>
        </marquee>
      </div>
      <div className="container">
        <img className={style.img_faces} src={FACES} alt="" />
      </div>
    </section>
  );
};

export default Home;
