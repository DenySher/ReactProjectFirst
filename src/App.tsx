import './App.css';
import GridWrapperSite from './components/Grid-wrapper-site';
import { StoreType } from './components/Redux/state';

type StorePropsType = {
  store: StoreType
}

function App(props: StorePropsType) {
  return (
    <GridWrapperSite store={props.store} />
  )
}

export default App;
