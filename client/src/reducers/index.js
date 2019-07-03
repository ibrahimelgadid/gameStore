import { combineReducers } from 'redux';
import gameReducer from "./gameReducer";
import cartReducer from './cartReducer';


export default combineReducers({
    games:gameReducer,
    cart:cartReducer
})

