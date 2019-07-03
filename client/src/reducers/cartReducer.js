import * as type from "../actions/type";


const initialState = {
    state:1
}


export default function(state=initialState, action){
    switch (action.type) {

        case type.GET_CART:
            return {
                ...state,
                cart: action.payload,               
            }

        case type.ADD_TO_CART:
            return {
                
                cart: state + action.payload
            }

        default:
           return state    
    }
}
