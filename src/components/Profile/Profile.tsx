import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfileStyle.module.css'

import { StateType } from '../../components/Redux/state'

type DataTypeProps = {
    profile: StateType
}

const Profile = (props: DataTypeProps) => {
    return (
        <div className={style.wrapper}>
            <ProfileInfo />
            <MyPosts myPosts={props.profile} />
        </div>
    )
}

export default Profile