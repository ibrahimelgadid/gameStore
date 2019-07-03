import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
          <div className="container">
            <Link to="/" target="_blank" className='navbar-brand'>Store</Link>
            <button className="navbar-toggler" data-toggle='collapse'  data-target='#bar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='bar'>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/dash'>Dgames 
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/dash/addGame'>Add Game 
                        </Link>
                    </li>
                </ul>
            </div>
          </div>  
        </nav>
     );
}
 
export default DashNav;