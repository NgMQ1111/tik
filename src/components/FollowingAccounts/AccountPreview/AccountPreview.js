import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { useEffect, useState } from "react";
import Image from "src/components/Images";

const cx = classNames.bind(styles);

function AccountPreview({ data, isFollow }) {

  const [follow, setFollow] = useState(isFollow);

  useEffect(() => {
    setFollow(isFollow)
  }, [isFollow])

  const handleFollow = () => {
    if (!follow) {
      setFollow(true);
    } else {
      setFollow(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} alt={data.last_name} />
        {follow ? (
          <Button onClick={handleFollow} className={cx("follow-btn")} outline>
            Following
          </Button>
        ) : (
          <Button onClick={handleFollow} className={cx("follow-btn")} primary>
            Follow
          </Button>
        )}
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>
        <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>{data.followers_count} </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>{data.likes_count} </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: PropTypes.object
};

export default AccountPreview;
