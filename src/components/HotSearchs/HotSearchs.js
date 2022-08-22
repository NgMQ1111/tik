import classNames from "classnames/bind";
import styles from './HotSearchs.module.scss'
import KeyHots from "./KeyHots";

import { HashTagIcon, MusicNodeIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

function HotSearchs({ label }) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <div className={cx('hot-searchs')}>
                <KeyHots icon={<HashTagIcon />} content='datvinaphone'/>
                <KeyHots icon={<MusicNodeIcon />} content='Xuan nay con khong ve'/>
                
                <KeyHots icon={<HashTagIcon />} content='datvinaphone'/>
                <KeyHots icon={<MusicNodeIcon />} content='Xuan nay con khong ve Xuan nay con khong ve '/>
                
                <KeyHots icon={<HashTagIcon />} content='datvinaphone'/>
                <KeyHots icon={<MusicNodeIcon />} content='Xuan nay con khong ve'/>
                
                <KeyHots icon={<HashTagIcon />} content='datvinaphone'/>
                <KeyHots icon={<MusicNodeIcon />} content='Xuan nay con khong ve'/>
            </div>
        </div>
     );
}

export default HotSearchs;