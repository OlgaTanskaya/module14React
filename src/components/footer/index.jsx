import STAR from "../../assets/Icon.png";
import style from "./footer.module.css";
import CLIP from "../../assets/Clip.png";
import CLIP_ONE from "../../assets/Clip_one.png";
import DAMIEN_TESTIMONIALS from "../../assets/Damien.png";
import { Links } from "../link_component";

const Footer = () => {
  return (
    <section>
      <div>
        <div className="container">
          <div className={style.footer_inner}>
            <img
              className={style.footer_img_daimen}
              src={DAMIEN_TESTIMONIALS}
              alt=""
            />
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
          <div className={style.footer_block}>
            <img className={style.footer_img_left} src={CLIP_ONE} alt="" />
            <div className={style.footer_content}>
              <div className={style.footer_block_one}>
                <h5>A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</h5>
                <div className={style.footer_block_let}>
                  LET’S{" "}
                  <button className={style.btn_footer}>
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
                  </button>{" "}
                  <br />
                  WORK TOGETHER
                </div>
              </div>
              <div className={style.footer_center}>
                <div className={style.footer_block_center}>
                  <h6>HOME</h6>
                  <ul className={style.li_footer_block}>
                    <li className={style.li_footer_end}>ABOUT ME</li>
                    <li className={style.li_footer_end}>MY WORKS</li>
                    <li className={style.li_footer_end}>TESTIMONIALS</li>
                  </ul>
                </div>
                <div className={style.footer_block_center}>
                  <h6>CLIENTS</h6>
                  <ul className={style.li_footer_block}>
                    <li className={style.li_footer_end}>KLOVESTO</li>
                    <li className={style.li_footer_end}>NUKEWAY</li>
                    <li className={style.li_footer_end}>CLOVEN’S</li>
                    <li className={style.li_footer_end}>MENVOL</li>
                  </ul>
                </div>
                <div className={style.footer_block_center}>
                  <h6>PORTFOLIO</h6>
                  <ul className={style.li_footer_block}>
                    <li className={style.li_footer_end}>EVENTS</li>
                    <li className={style.li_footer_end}>PORTRAIT</li>
                    <li className={style.li_footer_end}>BRANDING</li>
                    <li className={style.li_footer_end}>COMMERCIALE</li>
                    <li className={style.li_footer_end}>WEDDING</li>
                  </ul>
                </div>
                <div className={style.footer_block_center}>
                  <h6>SERVICES</h6>
                  <ul className={style.li_footer_block}>
                    <li className={style.li_footer_end}>PORTRAITS</li>
                    <li className={style.li_footer_end}>EVENTS</li>
                    <li className={style.li_footer_end}>COMMERCIAL</li>
                  </ul>
                </div>
              </div>
            </div>

            <img className={style.footer_img_right} src={CLIP} alt="" />
          </div>
        </div>

        <div className="container">
          <div className={style.end_footer}>
            Terms & Conditions Privacy Policy
            <Links />© 2024 Damien Braun Photography. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
