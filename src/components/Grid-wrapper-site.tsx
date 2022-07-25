import './Grid-wrapper-site.css'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Profile from './Profile/Profile';

const GridWrapperSite = () => {
    return (
        <div className="wrapper">
            <div className='header'>
                <Header />
            </div>
            <div className='navBar'>
                <NavBar />
            </div>
            <div className="content">
                <Profile />
            </div>
        </div>
    )
}

export default GridWrapperSite