import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";
import { useLayoutEffect, useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function Home({ data, onScrollTop }) {
  const handleGoToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  //todo: Auto play when scroll
  window.addEventListener("load", videoScroll);
  window.addEventListener("scroll", videoScroll);

  function videoScroll() {
    if (Array.from(document.querySelectorAll(".xxx")).length > 0) {
      var windowHeight = window.innerHeight,
        videoEl = Array.from(document.querySelectorAll(".xxx"));

      for (var i = 0; i < videoEl.length; i++) {
        var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if (
          videoClientRect <= windowHeight - videoHeight * 0.5 &&
          videoClientRect >= 0 - videoHeight * 0.05
        ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }
      }
    }
  }

  return (
    <div className={cx("wrapper")}>
      {data.map((userVideo) => (
        <HomeItem className={cx("xxx")} key={userVideo.id} data={userVideo} />
      ))}

      {onScrollTop && (
        <button className={cx("scroll-top-btn")} onClick={handleGoToTop}>
          <FontAwesomeIcon className={cx("scroll-top-icon")} icon={faPlaneUp} />
        </button>
      )}
    </div>
  );
}

export default Home;
