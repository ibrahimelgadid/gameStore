import React, { Component } from 'react'
import Dgame from './Dgame';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getGames } from "../../actions/gameActions";

class Dgames extends Component {

    state={
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
            
            gameShow = filteredContacts.map(game=>(
                <Dgame key= {game._id} game={game}/>
            )
        )
        }

        return ( 
            <div>
                <h2 className='text-info my-3' >Games show</h2>
                <Link to='/dash/addgame' className='float-right btn btn-success mb-2'>
                    Add game +
                </Link>
                <div className='mb-2'>
                    <div className='form-group'>
                        <input 
                            className='form-control' 
                            type="text" name='search' 
                            placeholder='Game search'
                            value={this.state.search}
                            onChange={this.onChange}
                        />
                    </div>                    
                </div>
                <table className="table table-striped " > 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameShow}
                    </tbody>
                </table>
            
                </div>
            
         );
    }
}

Dgames.propTypes ={
    games:PropTypes.array.isRequired,
    getGames:PropTypes.func.isRequired
}

const mapStateToProps = state =>(
    {
        games:state.games.games
    }
)
 
export default connect( mapStateToProps, {getGames})(Dgames);