import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store, { StoreType, subscribe } from './components/Redux/state';
import './index.css';


let RenderStateTree = (store: StoreType) => {
    ReactDOM.render(
        <HashRouter>
            <App store={store} />
        </HashRouter>
        , document.getElementById('root')
    )
}


RenderStateTree(store)

subscribe(RenderStateTree)











function stateData(stateData: any) {
    throw new Error('Function not implemented.');
}

