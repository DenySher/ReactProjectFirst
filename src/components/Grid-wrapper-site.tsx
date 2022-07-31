import { Route } from 'react-router-dom'
import style from './Grid-wrapper-site.module.css'

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

const GridWrapperSite = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div className={style.content}>
                <Route path='/Profile' render={() => <Profile />} />
                <Route path='/Dialogs' render={() => <Dialogs />} />
                <Route />
                <Route />
                <Route />
            </div>
        </div>
    )
}

export default GridWrapperSite

