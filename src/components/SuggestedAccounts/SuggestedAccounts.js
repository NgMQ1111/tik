import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggetsedAccounts({ label, data = [], isSeeAll, onSeeAll }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={onSeeAll}>
        {isSeeAll ? "See all" : "See less"}
      </p>
    </div>
  );
}

SuggetsedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default SuggetsedAccounts;
