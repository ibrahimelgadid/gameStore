import React, { Component } from 'react'
import Game from './Game';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getGames } from "../../actions/gameActions";


class Games extends Component {

    state = {
        search:''
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value.substr(0,15)
        })
        
    }

    componentDidMount(){
        this.props.getGames()
    }

    render() { 
        const { games } =this.props;
        const filteredContacts = this.props.games.filter(
            (game)=>{
                return game.title.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            }
        )
        
        let gameShow;
        if(games.length > 0){
            
            gameShow = filteredContacts.map((game)=>(
                <Game key = {game._id} game={game}/>
            )
        )
        }

        return ( 
            <div>
                <h2>Games store</h2>

                    <div className='mb-2'>
                            <div className='form-group'>
                            <label htmlFor="search">Search 
                                <input 
                                        className='form-control' 
                                        type="text" name='search' 
                                        placeholder='Game search'
                                        value={this.state.search}
                                        onChange={this.onChange}
                                    />
                                </label>
                                
                            </div>                    
                        </div>
                    <div className="row ">
                        
                        {gameShow}
                        {/* {gameShow}
                        {gameShow}
                        {gameShow}
                        {gameShow}
                        {gameShow} */}
                    </div>
                </div>
            
         );
    }
}

Games.propTypes ={
    games:PropTypes.array.isRequired,
    getGames:PropTypes.func.isRequired
}

const mapStateToProps = state =>(
    {
        games:state.games.games
    }
)
 
export default connect( mapStateToProps, {getGames})(Games);