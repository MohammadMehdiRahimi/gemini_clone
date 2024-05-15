import React from "react";
import style from "./SearchBox.module.css";
import { assets } from "../../../assets/assets";
export default function SearchBox() {
  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <input type="text" placeholder="Enter a prompt here ..." />
        <div className={style.imgForInput + " " + style.svg}>
         {assets.gallery_icon}
        {assets.mic_icon}
        {assets.send_icon}
        </div>
      </div>
      <p>
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy & Gemini Apps
      </p>
    </div>
  );
}
