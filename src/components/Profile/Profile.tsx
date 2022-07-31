import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfileStyle.module.css'

const Profile = () => {
    return (
        <div className={style.wrapper}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile