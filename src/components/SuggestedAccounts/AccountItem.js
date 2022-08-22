import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import AccountPreview from "./AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {

  const renderPreview = (props) => {
    return (
      <div tabIndex='-1' {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    )
  }

  return (
      <div>
        <Tippy
          offset={[-20, 0]}
          interactive
          placement="bottom"
          delay={[800, 0]}
          render={renderPreview}
        >
          <div className={cx("account-item")}>
            <img
              className={(cx("avatar"))}
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aaa08a620faa5868d71d37cfada8872e~c5_100x100.jpeg?x-expires=1661137200&x-signature=pjCCcEdj80alPzh918OOusxXYlY%3D"
              alt=""
            />
            <div className={cx('item-info')}>
              <p className={cx('nickname')}>
                  <strong>chang0000</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
              </p>
              <p className={cx('name')}>🔆IG: hi.changnee🔆</p>
            </div>
          </div>
        </Tippy>
      </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
