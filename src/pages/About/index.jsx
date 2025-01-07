import style from "./index.module.css";
import FACES_ABOUT from "../../assets/ImageAbout.png";
import { Links } from "../../components/link_component";

const About = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about_title_container}>
          <div>
            <h3 className={style.about_h3} id="about">
              ABOUT
            </h3>
            <h1 className={style.about_h1}>I AM DAMIEN</h1>
          </div>
          <button>Know More →</button>
        </div>
        <div className={style.about_block}>
          <div className={style.about_img_inner}>
            <img className={style.about_img} src={FACES_ABOUT} alt="" />
          </div>

          <div>
            <button className={style.about_btn}></button>
            <div className={style.about_block_right_all}>
              <span className={style.about_block_right}>
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                    fill="#AFA1F7"
                  />
                </svg>
                <h4>Introduction</h4>
              </span>
              <p className={style.about_block_p}>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world’s beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
              <span className={style.about_block_right}>
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                    fill="#AFA1F7"
                  />
                </svg>
                <h4>Contact Information</h4>
              </span>
              <div className={style.about_block_right_bottom}>
                <div className={style.about_email}>
                  <h6>Email</h6>
                  damienbraun@gmail.com
                </div>
                <div className={style.about_email}>
                  <h6>Phone Number</h6>
                  +00 000000000
                </div>
              </div>
              <div className={style.about_block_right_end}>
                <Links />
                <button className={style.about_block_right_btn}>
                  Let’s Work
                </button>{" "}
                {""}
                <button className={style.about_block_right_btn}>
                  Download CV
                </button>
              </div>
              <button className={style.about_btn}></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
