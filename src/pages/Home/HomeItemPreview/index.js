import classNames from "classnames/bind";
import AccountPreview from "src/components/SuggestedAccounts/AccountPreview/AccountPreview";
import styles from "../Home.module.scss";

const cx = classNames.bind(styles)

function HomeItemPreview({ data, isFollow }) {
    return ( 
        <div>
            <AccountPreview data={data} isFollow={isFollow}/>
            <div className={cx('content-introduction')}>Youtube Đỗ Đạt Official ⬆️ 📩dodatofficial@gmail.com Info của tôi ⬇️</div>
        </div>
     );
}

export default HomeItemPreview;