import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {  addGame, getGames} from "../../actions/gameActions";

class AddGame extends Component {
    state = { 
        title:'',
        desc:'',
        image:'',
        price:''
     }


     onSubmit=(e)=>{
        e.preventDefault();
        const {title, desc,image,price} = this.state;

        let newGame = {
            title,desc,image,price
        }

        this.props.addGame(newGame);

        this.setState({
            title:'',
            desc:'',
            image:'',
            price:''
        })
        

        this.props.history.push('/dash')

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
                <h2 >Add Game</h2>
                <Link to='/dash' >Back to game</Link>
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
                        Add New Game
                    </button>
                    
                </form>
                    

            </div>

         );
    }
}

AddGame.propTypes ={
    games:PropTypes.array.isRequired,
    addGame:PropTypes.func.isRequired,
    getGames:PropTypes.func.isRequired
}

const mapStateToProps = state =>(
    {
        games:state.games.games
    }
)
 
export default connect(mapStateToProps, {addGame,getGames})(AddGame);