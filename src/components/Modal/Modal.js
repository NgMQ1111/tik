import classNames from "classnames/bind";
import Protal from "../Protal";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({ children, isOpen }) {
  if (!isOpen) {
    document.body.removeAttribute('style', 'overflow: hidden;')
    return null;
  }
  else {
    document.body.setAttribute('style', 'overflow: hidden;')
  }

  return (
    <Protal>
      <div className={cx("wrapper")}>
        <div className={cx("overplay")}></div>
        <div className={cx("body")}>{children}</div>
      </div>
    </Protal>
  );
}

export default Modal;
