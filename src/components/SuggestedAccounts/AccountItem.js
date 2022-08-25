import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import AccountPreview from "./AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";
import { Link } from "react-router-dom";
import Image from "../Images";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <Link to={`/@chang0000`}>
      <Tippy
        offset={[-20, 0]}
        interactive
        placement="bottom"
        delay={[800, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.last_name}
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </p>
            <p
              className={cx("name")}
            >{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default AccountItem;
