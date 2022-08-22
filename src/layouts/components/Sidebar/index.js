import classNames from "classnames/bind";
import config from "src/config";
import styles from "./Sidebar.module.scss";

import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from "src/components/Icons";
import Menu, { MenuItem } from "./Menu";
import SuggetsedAccounts from "src/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon/>}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
      </Menu>

      <SuggetsedAccounts label="Suggested accounts"/>
      <SuggetsedAccounts label="Following accounts"/>
    </aside>
  );
}

export default Sidebar;
