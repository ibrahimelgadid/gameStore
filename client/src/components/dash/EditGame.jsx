import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';

import { getGame,updGame} from "../../actions/gameActions";

class EditGame extends Component {
    state = { 
        title:'',
        desc:'',
        image:'',
        price:''
     }

     componentDidMount() {
         const{_id} = this.props.match.params;
         this.props.getGame(_id)
     }

     componentWillReceiveProps(nextProps,nextState){
         const{title,desc,image,price} = nextProps.game;
         console.log(nextProps.game)

         this.setState({
            title,desc,image,price
         })
     }

     onSubmit=(e)=>{
        e.preventDefault();
        const {title, desc,image,price} = this.state;
        const {_id} = this.props.match.params;
        let editGame = {
            _id,title,desc,image,price
        }

        
        this.props.updGame(editGame, this.props.history);

        this.setState({
            title:'',
            desc:'',
            image:'',
            price:''
        })

     }

     onChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }


    render() { 

        const {title,desc,image,price}=this.state;
        return ( 
            
            <div className='text-center'>
                <h2 >Edit Game</h2>
                {/* <Link to='/dash' >Back to game</Link> */}
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="title"> Title</label>
                        <input 
                            className='form-control'
                            type="text" 
                            name='title'
                            // placeholder='Insert game title'
                            value={title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="desc"> Description</label>
                        <input 
                            className='form-control'
                            type="text" 
                            name='desc'
                            // placeholder='Insert little desc'
                            value={desc}
                            onChange={this.onChange}
                        />
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="price"> Price</label>
                        <input 
                            className='form-control'
                            type="text" 
                            name='price'
                            // placeholder='Insert game price'
                            value={price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="image"> Upload image</label>
                        <input 
                            className='form-control'
                            type="text" 
                            name='image'
                            value={image}
                            onChange={this.onChange}
                        />
                    </div>

                    <button className='btn-block btn btn-success' type="submit">
                        Edit Game
                    </button>
                    
                </form>
                    

            </div>

         );
    }
}

EditGame.propTypes ={
    game:PropTypes.object.isRequired,
    updGame:PropTypes.func.isRequired,
    getGame:PropTypes.func.isRequired
}

const mapStateToProps = state =>(
    {
        game:state.games.game
    }
)
 
export default connect(mapStateToProps, {getGame,updGame})(EditGame);