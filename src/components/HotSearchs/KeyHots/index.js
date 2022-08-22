import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from '../HotSearchs.module.scss'

const cx = classNames.bind(styles)

function KeyNodeMusics({icon, content}) {
    return ( 
        <div className={cx('tags-wrap')}>
            <div className={cx('key-tag')}>
                <span className={cx('key-icon')}>{icon}</span>

                <a className={cx('content')}>{content}</a>
            </div>
        </div>
     );
}

export default KeyNodeMusics;