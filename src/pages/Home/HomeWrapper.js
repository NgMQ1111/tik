import { useEffect, useRef, useState } from "react";

import Home from "./Home";
import * as videoServices from "~/services/videoServices";

const TYPE = "for-you";
const INIT_PAGE = 1;

function HomeWrapper() {
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(INIT_PAGE);
  const [isScrollTop, setIsScrollTop] = useState(false);

  const refHome = useRef();

  useEffect(() => {
    videoServices
      .getHomeVideo({ type: TYPE, page })
      .then((data) => {
        setHome((prevPage) => [...prevPage, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  //todo: Xem lai doan nay
  window.onscroll = () => {
    if (window.scrollY / refHome.current.clientHeight > 0.8) {
      setTimeout(() => {
        setPage(page + 1)
      }, 1500)
    }

    if (document.documentElement.scrollTop > 800) {
      setIsScrollTop(true);
    } else {
      setIsScrollTop(false);
    }
  };

  return (
    <div ref={refHome}>
      <Home data={home} onScrollTop={isScrollTop} page={page}/>
    </div>
  );
}

export default HomeWrapper;
