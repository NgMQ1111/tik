import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import config from "src/config";
import styles from "./OtherProducts.module.scss";

const cx = classNames.bind(styles);

function OtherProducts() {
  return (
    <div className={cx("wrapper")}>
      <Link className={cx("content")} to={config.routes.about}>
        About
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        AboutAboutAbout
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        About
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        AboutAboutAbout
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        About
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        AboutAboutAbout
      </Link>
      <Link className={cx("content")} to={config.routes.about}>
        About
      </Link>
    </div>
  );
}

export default OtherProducts;
