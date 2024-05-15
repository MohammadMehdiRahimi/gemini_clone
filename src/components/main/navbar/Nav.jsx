import React from "react";
import style from './nav.module.css'
import { assets } from "../../../assets/assets";
export default function Nav() {
  return (
    <div className={style.nav}>
      <h1>Gemini</h1>
      <img src={assets.user_icon}alt="user Photo" />
    </div>
  );
}
