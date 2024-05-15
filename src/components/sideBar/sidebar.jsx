import { useState } from "react";
import style from "./sidebar.module.css";
import { assets } from "../../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import  changeTheme  from "../../Redux/changeTheme/themeAction";
export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const isDark = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(isDark);
  const handleExtend = () => {
    setExtended((prev) => !prev);
    dispatch(changeTheme(isDark));
  };

  return (
    <aside
    id={isDark}
      className={
        // extended ? style.sideBar + " " + style.sideBarExtended : style.sideBar
        isDark
          ? extended
            ? style.sideBar + " " + style.sideBarExtended 
            : style.sideBar 
          : extended
          ? style.sideBar + " " + style.sideBarExtended
          : style.sideBar
      }
    >
      <section className={style.topMenu}>
        <div className={style.iconeMenu} onClick={handleExtend}>
          <img src={assets.menu_icon} alt="menu Icone" />
        </div>

        <div className={extended ? style.newChat : style.newChat}>
          <img src={assets.plus_icon} alt="plus" />
          {extended && <p>New chat ... </p>}
        </div>

        {extended && (
          <div className={style.recentSection}>
            <p>Recent</p>
            <div className={style.recentText}>
              <img src={assets.message_icon} alt="message icone" />
              <p>what is recat ... </p>
            </div>
            <div className={style.recentText}>
              <img src={assets.message_icon} alt="message icone" />
              <p>what is recat ... </p>
            </div>
          </div>
        )}
      </section>
      <section className={style.bottomMenu}>
        <div className={style.bottomMenuChild}>
          <img src={assets.question_icon} alt="help" />
          {extended && <p>Help</p>}
        </div>
        <div className={style.bottomMenuChild}>
          <img src={assets.history_icon} alt="Activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className={style.bottomMenuChild}>
          <img src={assets.setting_icon} alt="setting" />
          {extended && <p>Setting</p>}
        </div>
      </section>
    </aside>
  );
}
