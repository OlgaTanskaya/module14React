import React from "react";
import fb from "../../assets/fb.svg";
import tw from "../../assets/tw.svg";
import inst from "../../assets/in.svg";
import style from "./index.module.css";
export const Links = () => {
  return (
    <div className={style.links}>
      <a href="#">
        <img src={fb} alt="" />
      </a>
      <a href="#">
        <img src={tw} alt="" />
      </a>
      <a href="#">
        <img src={inst} alt="" />
      </a>
    </div>
  );
};
