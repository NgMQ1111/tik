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

import AccountPreview from "src/components/SuggestedAccounts/AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "../Home.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomeItem() {

  // const renderPreview = (props) => {
  //   return (
  //     <div tabIndex='-1' {...props}>
  //       <PopperWrapper>
  //         <AccountPreview />
  //       </PopperWrapper>
  //     </div>
  //   )
  // }

  return (
    <div className={cx("item-container")}>
      <Link to="/@chang0000">
        <Tippy
          offset={[-20, 0]}
          interactive
          placement="bottom"
          delay={[800, 0]}
          // render={renderPreview}
        >
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aaa08a620faa5868d71d37cfada8872e~c5_100x100.jpeg?x-expires=1661137200&x-signature=pjCCcEdj80alPzh918OOusxXYlY%3D"
            alt=""
          />
        </Tippy>
      </Link>

      <div className={cx("content")}>
        <div className={cx("text-info")}>
          <div className={cx("author")}>
            <h3 className={cx("nickname")}>chang0000</h3>
            <span className={cx("name")}>🔆IG: hi.changnee🔆</span>

            <Button outline small className={cx("btn-follow")}>
              Follow
            </Button>
          </div>

          <div className={cx("hashtag-content")}>
            <div className={cx("hashtag")}>
              <strong>#petrang</strong>
            </div>
            <div className={cx("hashtag")}>
              <strong>#petrang</strong>
            </div>
          </div>

          <div className={cx("music-content")}>
            <MusicNodeIcon />
            <span>nhạc nền - chang0000.</span>
          </div>
        </div>
        <div className={cx("video-wrapper")}>
          <div className={cx("video")}>
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className={cx("video-item")}>
            <button className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
              </div>
              <strong>123.1K</strong>
            </button>

            <button className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon className={cx("icon")} icon={faCommentDots} />
              </div>
              <strong>123</strong>
            </button>

            <button className={cx("action-btn-item")}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon className={cx("icon")} icon={faShare} />
              </div>
              <strong>12</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
