import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getCart  } from "../../actions/cartActions"



class Checkout extends Component {

    

    componentDidMount() {
        this.props.getCart();
    }

    render() {


           
            //         return(
            //             <li className='list-group-item'>
                            
            //                 <span className='mr-3 text-primary'></span>
                        
                        
            //                 <span className='mr-3'>price: </span>
                        
                        
            //                 <span className='mr-3'>Qty: {' '}
            //                     <span className='badge badge-success py-1' htmlFor="qty">
                                    
            //                     </span>
            //                 </span>

            //                 <span>
            //                     total:
            //                 </span>
                        
                        
            //                 <span className="button-group float-right">
            //                     <button  className='btn btn-default mr-1 decre'>
            //                     -</button>
            //                     <button  className='btn btn-default mr-1 incre'>
            //                     +</button>
                                
            //                     <button  
            //                         className='btn btn-danger'
            //                         >Delete</button>
            //                 </span>
                            
            //             </li>
            //         )
            //     }
            // )
            return(
                <div className='row card my-2'>
                
                    <ul className='list-group-item' >
                        <h4 className="card-header">My cart</h4>
                        
                        <h6 className="card-footer">
                            <b>Total price:- </b>
                            <span className="badge badge-secondary p-2">
                                
                            </span>  
                        </h6>
                    </ul>
                    
                </div>
            )
        }
       
        
   
}
 

Checkout.propTypes ={
    cart:PropTypes.array.isRequired,
    getCart:PropTypes.func.isRequired,
}

const mapStateToProps = state =>(
    {
        cart:state.cart.cart,
       
    }
)
 
export default connect( mapStateToProps, {getCart})(Checkout);