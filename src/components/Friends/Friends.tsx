import style from '../Friends/Friends.module.css'
import { StateType } from '../Redux/state'

type StatePropsType = {
    friends: StateType
}

const Friends = (props: StatePropsType) => {

    const siteBarFriendsItems = props.friends.siteBar.friends.map((e) => {
        return (
            <div className={style.friend} key={e.id}>
                <div className={style.avatar}></div>
                <h4>{e.name}</h4>
            </div>
        )
    })
    
    return (
        <div className={style.container}>
            <h2>
                Friends
            </h2>
            <div className={style.friends}>
                {siteBarFriendsItems}     
            </div>
        </div>
    )
}

export default Friends