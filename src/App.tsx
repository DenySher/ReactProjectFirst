import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='AppWrapper'>
      <Header />
      <div className='ContenAndNav'>
        <NavBar />
        <Profile />
      </div>
    </div >
  )
}

export default App;
