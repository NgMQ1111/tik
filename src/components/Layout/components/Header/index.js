import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";

//! thư viện classnames giải quyết vấn đề đặt tên của class trong Component
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx("sreach")}>
          <input placeholder="Sreach accounts and videos" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

          <button className={cx("sreach-btn")}>
            <img className="searchBtn" src={images.searchBtn} alt="SearchBtn" />
          </button>
        </div>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
