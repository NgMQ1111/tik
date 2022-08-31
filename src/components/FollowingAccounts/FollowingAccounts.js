import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";

import AccountItem from "./AccountItem";
import * as userFollowingServices from "src/services/userFollowingServices";

const cx = classNames.bind(styles);

const INIT_PAGE = 1;

function FollowingAccounts({ label }) {

  const [page, setPage] = useState(INIT_PAGE);
  const [isSeeAll, setIsSeeAll] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    userFollowingServices
      .getFollowingAcc({ page })
      .then((data) => {
        //! Xem lai
      })
      .catch((error) => console.log(error));
  }, [page]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {suggestedUsers.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={handleSeeAll}>
        {isSeeAll ? "See all" : "See less"}
      </p>
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
