import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faL } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function AccountPreview() {
  const [follow, setfollow] = useState(false)

  const handleFollow = () => {
    if(follow) {
      setfollow(false)
    } else {
      setfollow(true)
    }
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aaa08a620faa5868d71d37cfada8872e~c5_100x100.jpeg?x-expires=1661137200&x-signature=pjCCcEdj80alPzh918OOusxXYlY%3D"
          alt=""
        />
        {follow ? (
          <Button onClick={handleFollow} className={cx('follow-btn')} outline>Following</Button>
        ) : (
          <Button onClick={handleFollow} className={cx('follow-btn')} primary>Follow</Button>
        )}
      </div>
      <div className={cx("body")}>
          <p className={cx("nickname")}>
            <strong>chang0000</strong>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </p>
          <p className={cx("name")}>🔆IG: hi.changnee🔆</p>
          <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Likes</span>
          </p>
      </div>
    </div>
  );
}

export default AccountPreview;
