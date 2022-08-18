import './App.css';
import GridWrapperSite from './components/Grid-wrapper-site';
import { StateType, addPost, changeNewText } from './components/Redux/state';

type StatePropsType = {
  stateData: StateType
}

function App(props: StatePropsType) {
  return (
    <GridWrapperSite stateData={props.stateData} addPost={addPost} changeNewText={changeNewText}/>
  )
}

export default App;
