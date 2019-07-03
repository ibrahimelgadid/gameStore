import * as type from './type';
import axios from "axios";



export const getCart=()=> {
    return{
        type:type.GET_CART,
        payload:1
    }
}

export const  addToCart=()=>{
    
    return{
        type:type.ADD_TO_CART,
        payload:1
    }
}