import { Route } from 'react-router-dom'
import style from './Grid-wrapper-site.module.css'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

import { StateType } from '../components/Redux/state'

type StatePropsType = {
    stateData: StateType
}

const GridWrapperSite = (props: StatePropsType) => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.navBar}>
                <NavBar friends={props.stateData}/>
            </div>
            <div className={style.content}>
                <Route path='/Profile' render={() => <Profile profile={props.stateData} />} />
                <Route path='/Dialogs' render={() => <Dialogs dialogs={props.stateData} />} />
            </div>
         </div>
    )
}

export default GridWrapperSite

