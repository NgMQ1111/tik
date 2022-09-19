import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";

import AccountItem from "./AccountItem";
import * as userServices from "~/services/userServices";

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
function SuggetsedAccounts({ label }) {
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
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {suggestedUsers !== undefined
        ? suggestedUsers.map((account) => (
            <AccountItem key={account.id} data={account} />
          ))
        : null}

      <p className={cx("more-btn")} onClick={handleSeeAll}>
        {isSeeAll ? "See all" : "See less"}
      </p>
    </div>
  );
}

SuggetsedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggetsedAccounts;
