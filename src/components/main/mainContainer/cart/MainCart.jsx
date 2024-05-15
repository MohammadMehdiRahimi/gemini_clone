import React from "react";
import style from "./MainCart.module.css";
export default function MainCart({ data }) {
  const { text, img } = data;
  return (
    <div className={style.cart}>
      <p>{text}</p>
      <img src={img} alt="cart image" />
    </div>
  );
}
