import styles from "./Header.module.scss"
import classNames from "classnames/bind";

//! thư viện classnames giải quyết vấn đề đặt tên của class trong Component
const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Sreach */}
            </div>
        </header>
     );
}

export default Header;