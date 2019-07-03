import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Game extends Component {
    

    render() { 
        const{ game} = this.props;
        
        return ( 
            
                <div className="col-md-4 mb-2" > 
                    <span className='badge badge-success py-2 px-3' style={{position:'absolute',marginTop:'15px'}}>
                        ${parseFloat(game.price).toFixed(2)}
                    </span>  
                    <img className="img-fluid img-thumbnail" src={game.image} alt="Card col-6  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <span className='text-primary py-2'>
                                {game.title}
                            </span> 
                            <Link to={'/games/gameDetails/'+game._id} className='btn btn-outline-success  float-right'>
                                View details
                            </Link>
                        </h5>
                    </div>
                </div>
            
            
         );
    }
}
 
export default Game;