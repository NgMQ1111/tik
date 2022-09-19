import classNames from "classnames/bind";

import Button from "../Button";
import { UserGroupIcon } from "../Icons";
import styles from "./LoginModal.module.scss";

const cx = classNames.bind(styles);
const LOGIN = false

function LoginMethods({ closeModal, isLogin }) {

    const handleLogin = () => {
        return true
    }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("login-wrapper")}>
        <div className={cx("login-container")}>
          <h1>Log in to TikTok</h1>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Use QR code</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>
              Use phone / email / username
            </span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Facebook</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Google</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Use QR code</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>
              Use phone / email / username
            </span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Facebook</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Google</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Facebook</span>
          </Button>
          <Button onClick={handleLogin} className={cx("login-method")}>
            <UserGroupIcon className={cx("icon-login-method")} />
            <span className={cx("content-method")}>Continue with Google</span>
          </Button>
        </div>
      </div>
      <div className={cx("request-register")}>
            <p>Don’t have an account?</p>
            <span>Sign up</span>
        </div>
      <div className={cx("close-btn")} onClick={closeModal}>
        x
      </div>
    </div>
  );
}

export { LOGIN }
export default LoginMethods;
