import { useState, useRef } from "react";
import style from "./sidebar.module.css";
import { assets } from "../../assets/assets";

export default function Sidebar() {
  const [extended, setExtended] = useState(true);

  const handleExtend = () => {
    setExtended((prev) => !prev);
  };

  return (
    <aside
      className={
        extended ? style.sideBar + " " + style.sideBarExtended : style.sideBar
      }
    >
      <section className={style.topMenu}>
        <div
          className={style.iconeMenu + " " + style.svg}
          onClick={handleExtend}
        >
          {assets.menu_icon}
        </div>

        {/* <div
          className={extended ? style.newChat : style.newChat + " " + style.svg}
        >
          {assets.plus_icon}
          {extended && <p>New chat </p>}
        </div> */}

        <div
          className={
            extended
              ? style.recentSection
              : style.recentSection + " " + style.hide
          }
        >
          <p>Recent</p>
          <div className={style.recentText + " " + style.svg}>
            {assets.message_icon}
            <p>what is recat ... </p>
          </div>
          <div className={style.recentText + " " + style.svg}>
            {assets.message_icon}
            <p>React best practice ... </p>
          </div>
        </div>
      </section>
      <section className={style.bottomMenu}>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span>{assets.question_icon}</span>
          <p className={extended ? style.bottomChildText : style.hide}>Help</p>
        </div>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span> {assets.history_icon}</span>
          <p className={extended ? style.bottomChildText : style.hide}>
            Activity
          </p>
        </div>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span>{assets.setting_icon}</span>
          {/* {extended ? <p>Setting</p>:<p clsn></p>} */}
          <p className={extended ? style.bottomChildText : style.hide}>
            Setting
          </p>
        </div>
      </section>
    </aside>
  );
}
