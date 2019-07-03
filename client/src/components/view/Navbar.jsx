import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getCart } from "../../actions/cartActions";


class Navbar extends Component {
    
    componentDidMount() {
        this.props.getCart()
    }
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand bg-info navbar-dark">
          <div className="container">
            <a href="!#" className='navbar-brand'>GameStore</a>
            
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home 
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/checkout'>My cart
                            <span className="badge badge-warning">{this.props.totalQty ? this.props.totalQty: 0}</span>
                        </Link>
                    </li>
                </ul>
                
                <ul className="navbar-nav ml-auto">
                   
                    <li className="nav-item active">
                        <Link className="nav-link" to='/dash'>Dashboard 
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
         );
    }
}
 

 
Navbar.propTypes ={
    getCart:PropTypes.func.isRequired,
}


// const mapStateToProps = state =>(
//     {
//         totalQty:state.cart.totalQty
//     }
// )
 
export default connect(null,{getCart})(Navbar);