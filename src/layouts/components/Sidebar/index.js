import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import config from "src/config";
import styles from "./Sidebar.module.scss";

import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "src/components/Icons";
import Menu, { MenuItem } from "./Menu";
import SuggetsedAccounts from "src/components/SuggestedAccounts";
import HotSearchs from "src/components/HotSearchs";
import OtherProducts from "src/components/OtherProducts";
import * as userServices from "~/services/userServices";

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);
  const [isSeeAll, setIsSeeAll] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    userServices
      .getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUsers((pverUsers) => [...pverUsers, ...data]);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };

  return (
    <aside className={cx("wrapper")}>
      <div>
        <Menu>
          <MenuItem
            title="For You"
            to={config.routes.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MenuItem
            title="Live"
            to={config.routes.live}
            icon={<LiveIcon />}
            activeIcon={<LiveActiveIcon />}
          />
        </Menu>

        <SuggetsedAccounts
          label="Suggested accounts"
          data={suggestedUsers}
          isSeeAll={isSeeAll}
          onSeeAll={handleSeeAll}
        />
        <SuggetsedAccounts
          label="Following accounts"
          data={suggestedUsers}
          isSeeAll={isSeeAll}
          onSeeAll={handleSeeAll}
        />

        <HotSearchs label="Discover" />

        <OtherProducts />

        <p className={cx("developer-name")}>© 2022 TikTok</p>
      </div>

      <div className={cx("scroll-bar")}>
        <div className={cx("scroll-bar-thumb")}></div>
      </div>
    </aside>
  );
}

export default Sidebar;
