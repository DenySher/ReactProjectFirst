import { Route } from 'react-router-dom'
import style from './Grid-wrapper-site.module.css'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

import { StoreType } from '../components/Redux/state'

type StorePropsType = {
    store: StoreType
}

const GridWrapperSite = (props: StorePropsType) => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.navBar}>
                <NavBar store={props.store} />
            </div>
            <div className={style.content}>
                <Route path='/Profile' render={() => <Profile store={props.store} />} />
                <Route path='/Dialogs' render={() => <Dialogs store={props.store} />} />
            </div>
        </div>
    )
}

export default GridWrapperSite

