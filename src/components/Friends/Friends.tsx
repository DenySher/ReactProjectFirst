import style from '../Friends/Friends.module.css'
import { StoreType } from '../Redux/state'

type StorePropsType = {
    store: StoreType
}

const Friends = (props: StorePropsType) => {

    const siteBarFriendsItems = props.store.stateData.siteBar.friends.map((e) => {
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