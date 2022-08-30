import { Link } from 'react-router-dom'
import Friends from '../Friends/Friends'
import style from './NavBarStyle.module.css'
import { StoreType } from '../Redux/state'

type StorePropsType = {
    store: StoreType
}

const NavBar = (props: StorePropsType) => {
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li className={style.item}><Link to='profile' className={style.active}>Profile</Link></li>
                    <li className={style.item}><Link to='dialogs' className={style.active}>Messages</Link></li>
                    <li className={style.item}><Link to='news'>News</Link></li>
                    <li className={style.item}><Link to='music'>Music</Link></li>
                    <li className={style.item}><Link to='settings'>Settings</Link></li>
                </ul>
            </nav>
            <Friends store={props.store} />
        </>

    )
}

export default NavBar