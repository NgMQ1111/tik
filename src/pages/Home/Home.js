import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";
import videoServices from '~/services/videoServices'

const cx = classNames.bind(styles);

function Home({ data }) {

  return (
    <div className={cx("wrapper")}>
        {data.map(userVideo => (
          <HomeItem key={userVideo.id} data={userVideo}/>
        ))}

    </div>
  );
}

export default Home;
