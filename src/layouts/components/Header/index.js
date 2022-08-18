import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGears,
  faKeyboard,
  faQuestionCircle,
  faUser,
  faSignOut,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessagesIcon } from "~/components/Icons";
import Image from "~/components/Images";
import Search from "../Search";
import config from "~/config";

//! thư viện classnames giải quyết vấn đề đặt tên của class trong Component
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "languge",
          code: "en",
          title: "English",
        },
        {
          type: "languge",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@username",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGears} />,
    title: "Setting",
    to: "/setting",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];

function Header() {

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //todo: Handle change Language
        break;
      default:
    }
  };

  //todo: LogIn --> LogOut
  const currentUser = true;

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={(0, 50)} content="Upload" placement="bottom">
                <button className={cx("actions-btn")}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
              </Tippy>
              <Tippy delay={(0, 50)} content="Messages" placement="bottom">
                <button className={cx("actions-btn")}>
                  <MessagesIcon />
                </button>
              </Tippy>
              <Tippy delay={(0, 50)} content="Inbox" placement="bottom">
                <button className={cx("actions-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bfb524e05e98febbd9de5706b6313336~c5_100x100.jpeg?x-expires=1660471200&x-signature=hIrSjFiUvETKnLuAJ9Irhe938Mc%3D"
                className={cx("user-avatar")}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
