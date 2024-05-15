import React from "react";
import style from "./main.module.css";
import Nav from "./navbar/Nav";
import MainContainer from "./mainContainer/MainContainer";
import SearchBox from "./searchBox/SearchBox";
export default function Main() {
  return (
    <div className={style.wrapper}>
      <Nav />
      <MainContainer />
      <div>
        <SearchBox />
      </div>
    </div>
  );
}
