import { Route, Routes } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import style from './Grid-wrapper-site.module.css'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile';

const GridWrapperSite = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div>
                <Routes>
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/Dialogs' element={<Dialogs />} />
                    <Route path='/News' element={''} />
                    <Route path='/Music' element={''} />
                    <Route path='/Settings' element={''} />
                </Routes>
            </div>
        </div>
    )
}

export default GridWrapperSite

