import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './components/Redux/state';
import './index.css';


let RenderStateTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
        , document.getElementById('root')
    )
}


RenderStateTree()

store.subscribe(RenderStateTree)




