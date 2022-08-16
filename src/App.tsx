import './App.css';
import GridWrapperSite from './components/Grid-wrapper-site';
import { StateType } from './components/Redux/state';

type StatePropsType = {
  stateData: StateType
}

function App(props: StatePropsType) {
  return (
    <GridWrapperSite stateData={props.stateData} />
  )
}

export default App;
