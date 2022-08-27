import { useState } from "react";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "src/components/Button";
import { HashTagIcon, MusicNodeIcon } from "src/components/Icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "../Home.module.scss";
import { Link } from "react-router-dom";
import HomeItemPreview from "../HomeItemPreview";
import Image from "src/components/Images";

const cx = classNames.bind(styles);

function HomeItem({ data, className }) {
  const user = data.user;

  const [isFollow, setIsFollow] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const handleSetFollow = () => {
    if (!isFollow) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
  };

  const handleSetLike = () => {
    if (!isLike) {
      setIsLike(true);
      data.likes_count += 1
    } else {
      setIsLike(false);
      data.likes_count -= 1
    }
  }

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <HomeItemPreview data={user} isFollow={isFollow} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div className={cx("item-container")}>
      <Link to={`/@${user.nickname}`}>
        <Tippy
          offset={[-20, 0]}
          interactive
          placement="bottom"
          delay={[800, 0]}
          render={renderPreview}
        >
          <Image
            className={cx("avatar")}
            src={user.avatar}
            alt={user.last_name}
          />
        </Tippy>
      </Link>

      <div className={cx("content")}>
        <div className={cx("text-info")}>
          <div className={cx("author")}>
            <h3 className={cx("nickname")}>{user.nickname}</h3>
            <span
              className={cx("name")}
            >{`${user.first_name} ${user.last_name}`}</span>

            {isFollow ? (
              <Button
                onClick={handleSetFollow}
                className={cx("btn-follow")}
                outline
              >
                Following
              </Button>
            ) : (
              <Button
                onClick={handleSetFollow}
                className={cx("btn-follow")}
                primary
              >
                Follow
              </Button>
            )}
          </div>

          <div className={cx("description")}>
            <p>{data.description}</p>
            <div className={cx("hashtag")}>
              <strong>#xuhuongtiktok</strong>
            </div>
            <div className={cx("hashtag")}>
              <strong>#hottrend</strong>
            </div>
          </div>

          <div className={cx("music-content")}>
            <MusicNodeIcon />
            <span>{`nhạc nền - ${user.first_name} ${user.last_name}.`}</span>
          </div>
        </div>
        <div className={cx("video-wrapper")}>
          <div className={cx("video")}>
            <video controls className={className}>
              <source src={data.file_url} />
            </video>
          </div>
          <div className={cx("video-item")}>
            <button onClick={handleSetLike} className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                {isLike ? (
                  <FontAwesomeIcon className={cx("icon-actived")} icon={faHeart} />
                ) : (
                  <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
                )}
              </div>
              <strong>{data.likes_count}</strong>
            </button>

            <button className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon className={cx("icon")} icon={faCommentDots} />
              </div>
              <strong>{data.comments_count}</strong>
            </button>

            <button className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon className={cx("icon")} icon={faShare} />
              </div>
              <strong>{data.shares_count}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
