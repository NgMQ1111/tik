import { useState } from "react";
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
import FollowingAccounts from "src/components/FollowingAccounts";
import HotSearchs from "src/components/HotSearchs";
import OtherProducts from "src/components/OtherProducts";
import Button from "src/components/Button";
import Modal from "src/components/Modal";
import LoginModal from "src/components/LoginModal";

const cx = classNames.bind(styles);

function Sidebar({ isLogin }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }
  
  const closeModal = () => {
    setModalIsOpen(false)
  }

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

        {!isLogin ? (
          <div className={cx('login-wrapper')}>
            <p className={cx('login-content')}>
            Log in to follow creators, like videos, and view comments.
            </p>
            <Button className={cx('login-btn')} outline large onClick={openModal}>Log in</Button>
          </div>
        ) : null}

        <SuggetsedAccounts label="Suggested accounts" />
        {isLogin ? <FollowingAccounts label="Following accounts" /> : null}

        <HotSearchs label="Discover" />

        <OtherProducts />

        <p className={cx("developer-name")}>© 2022 TikTok</p>
      </div>

      <div className={cx("scroll-bar")}>
        <div className={cx("scroll-bar-thumb")}></div>
      </div>

      <Modal isOpen={modalIsOpen}>
        <LoginModal closeModal={closeModal}/>
      </Modal>
    </aside>
  );
}

export default Sidebar;
