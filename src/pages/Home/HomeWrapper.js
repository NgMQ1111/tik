import { useEffect, useRef, useState } from "react";

import Home from "./Home";
import * as videoServices from "~/services/videoServices";

const TYPE = 'for-you'
const INIT_PAGE = 1

function HomeWrapper() {
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(INIT_PAGE)

  const refHome = useRef()

  useEffect(() => {
    videoServices
      .getHomeVideo({type: TYPE, page})
      .then((data) => {
        setHome(prevPage => [...prevPage, ...data])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  window.onscroll = () => {
    if(window.scrollY / refHome.current.clientHeight > 0.8) {
      setPage(page + 1)
    }
  }

  return (
    <div ref={refHome}>
      <Home data={home}/>
    </div>
  )
}

export default HomeWrapper;
