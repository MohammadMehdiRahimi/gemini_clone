import React from "react";
import style from "./MainContainer.module.css";
import { assets } from "../../../assets/assets";
import MainCart from "./cart/MainCart";
export default function MainContainer() {
  const cartData = [
    {
      id: 1,
      text: "Suggest beautiful places to see on an upcoming raod trip",
      img: assets.compass_icon,
    },
    {
      id: 2,
      text: "Briefly summarize this concept:urban planning",
      img: assets.bulb_icon,
    },
    {
      id: 3,
      text: "Brainstorm team bonding activities for out work retrat",
      img: assets.message_icon,
    },
    {
      id: 4,
      text: "Improve the readability of following code",
      img: assets.code_icon,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.hellow}>
        <p>Hello , Dev .</p>
        <p>How can i help you today?</p>
      </div>
      <div className={style.cartWrapper}>
        {cartData.map((cart) => (
          <MainCart key={cart.id} data={cart} />
        ))}
      </div>
    </div>
  );
}
