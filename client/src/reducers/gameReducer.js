import * as type from '../actions/type';
const initialState = {
    games:[],
    game:{}
}

export default function(state=initialState, action){
    switch (action.type) {
        case type.GET_GAMES:
            return {
                ...state,
                games:action.payload
            }


        case type.GET_GAME:
            return {
                ...state,
                game:action.payload
            }

        case type.ADD_GAME:
            return({
                ...state,
                games:[action.payload, ...state.games]
            })



        case type.DELETE_GAME:
            return({
                ...state,
                games:state.games.filter(game =>
                     game._id !== action.payload,
                    )
            })


        case type.UPDATE_GAME:
            return({
                ...state,
                games:state.games.map(game=>
                    game._id===action.payload.id ? 
                    (game =action.payload):game)
            })

        
        default:
            return state;
            
    }
}