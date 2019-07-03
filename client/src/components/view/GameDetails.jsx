import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import { Link} from 'react-router-dom';
import Checkout from './Checkout';

import { getGame  } from "../../actions/gameActions";

class GameDetails extends Component {
    state={
        disabled:false,
    }

 
    
    componentDidMount() {
        const {id } = this.props.match.params;
        this.props.getGame(id);
        
    }


    
    render() { 
        const { disabled } =this.state;
        const { game } = this.props;
        
        return ( 
            <div>
            <Checkout/>     
            <div className="row">
                <div className="col-md-6 col-12">
                    <h2 className='text-danger text-center mb-2'>{game.title}</h2>
                    <img className='img-fluid' src={game.image} alt={game.image}/>
                </div>
                <div className='mt-4 col-md-6 col-12 '>
                    <p>{game.desc}</p>
                    <span className='badge badge-danger p-2'>${parseFloat(game.price).toFixed(2)}</span >
                    <button
                        
                        className="btn btn-default" 
                        disabled={disabled}
                        >
                            Add cart
                    </button>
                </div>
            </div>
            </div>
         );
    }
}
 
GameDetails.propTypes ={
    game:PropTypes.object.isRequired,
    cart:PropTypes.object.isRequired,
    getGame:PropTypes.func.isRequired,
   
}


const mapStateToProps = state =>(
    {
        game:state.games.game,
        cart:state.cart.cart,
    }
)
 
export default connect(mapStateToProps, {getGame})(GameDetails);