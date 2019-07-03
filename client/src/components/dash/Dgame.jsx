import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { deleteGame,getGames } from "../../actions/gameActions";



class Dgame extends Component {
    
    onDelete=(_id)=>{
        console.log(_id)
        this.props.deleteGame(_id);
    }

    render() { 
        const{ game} = this.props;
    
        return ( 
            
            <tr>
                <th>{game.title}</th>
                <th>{game.price}</th>
                <th  className='text-center'>
                    <span onClick={this.onDelete.bind(this,game._id)} className="btn btn-danger mr-3">
                        Delete
                    </span>
                    <Link to={'/dash/editGame/'+game._id}className="btn btn-primary">
                        Edit
                    </Link>
                </th>
            </tr>
            
         );
    }
}

Dgame.propTypes={
    games:PropTypes.array.isRequired,
    deleteGame:PropTypes.func.isRequired,
    getGames:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    games:state.games.games
})
 
export default connect(mapStateToProps,{deleteGame,getGames})(Dgame);