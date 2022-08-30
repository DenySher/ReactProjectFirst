import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfileStyle.module.css'

import { StoreType } from '../../components/Redux/state'

type StorePropsType = {
    store: StoreType
}

const Profile = (props: StorePropsType) => {
    
    return (
        <div className={style.wrapper}>
            <ProfileInfo />
            <MyPosts store={props.store} />
        </div>
    )
}

export default Profile