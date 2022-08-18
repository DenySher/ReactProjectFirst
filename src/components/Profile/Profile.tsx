import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfileStyle.module.css'

import { StateType } from '../../components/Redux/state'

type DataTypeProps = {
    profile: StateType
    addPost:(postMessage: string)=>void
    changeNewText:(newText: string)=>void
}

const Profile = (props: DataTypeProps) => {
    console.log(props.profile)
    return (
        <div className={style.wrapper}>
            <ProfileInfo />
            <MyPosts myPosts={props.profile} addPost={props.addPost} changeNewText={props.changeNewText}/>
        </div>
    )
}

export default Profile