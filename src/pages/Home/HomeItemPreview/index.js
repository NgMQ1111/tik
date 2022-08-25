import classNames from "classnames/bind";
import AccountPreview from "src/components/SuggestedAccounts/AccountPreview/AccountPreview";
import styles from "../Home.module.scss";

const cx = classNames.bind(styles)

function HomeItemPreview({ data }) {
    return ( 
        <div>
            <AccountPreview data={data}/>
            <div className={cx('content-introduction')}>Youtube Đỗ Đạt Official ⬆️ 📩dodatofficial@gmail.com Info của tôi ⬇️</div>
        </div>
     );
}

export default HomeItemPreview;