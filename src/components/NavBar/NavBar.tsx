import { Link } from 'react-router-dom'
import Friends from '../Friends/Friends'
import style from './NavBarStyle.module.css'
import { StateType } from '../Redux/state'

type StatePropsType = {
    friends: StateType
}

const NavBar = (props: StatePropsType) => {
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
            <Friends friends={props.friends}/>
        </>

    )
}

export default NavBar