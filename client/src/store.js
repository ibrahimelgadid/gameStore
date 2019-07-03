import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import rooReducer from './reducers';
// import { addToCart } from './actions/cartActions';


const initailState={};
const Middleware = [thunk];

const store = createStore(
    rooReducer,
    initailState,
    compose(
        applyMiddleware(...Middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__ ()
    )
    
);


export default store;