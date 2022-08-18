import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import stateData, { subscribe } from './components/Redux/state';

let RenderStateTree = () => {
    ReactDOM.render(
        <HashRouter>
            <App stateData={stateData} />
        </HashRouter>
        , document.getElementById('root')
    )
}

RenderStateTree()

subscribe(RenderStateTree)








