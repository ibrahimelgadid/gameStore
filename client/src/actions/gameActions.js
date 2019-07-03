import * as type from './type';
import axios from "axios";

export const getGames = ()=> async dispatch =>{
    let res = await axios.get('http://localhost:5000/games');
    dispatch({
        type:type.GET_GAMES,
        payload:res.data
    })
}


export const getGame = (_id)=> async dispatch =>{
    let res = await axios.get('http://localhost:5000/games/'+_id);
    dispatch({
        type:type.GET_GAME,
        payload:res.data
    })
}


export const deleteGame = (_id)=> async dispatch =>{
 
        await axios.delete('http://localhost:5000/games/delete/'+_id);
        dispatch({
            type:type.DELETE_GAME,
            payload:_id
        })
    
}


export const addGame = (game, history)=> async dispatch=>{

    let res = await axios.post('http://localhost:5000/games/addGame',game)
    dispatch({
        type:type.ADD_GAME,
        payload:res.data
    })
}




export const updGame = (game)=> async dispatch=>{

    let res = await axios.put('http://localhost:5000/games/editGame/'+game._id, game)
    dispatch({
        type:type.UPDATE_GAME,
        payload:res.data
    })
}