import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css'
import ViewLayout from './components/view/ViewLayout';
import DashLayout from './components/dash/DashLayout';
import Games from './components/view/Games';
import AddGame from './components/dash/AddGame';
import Dgames from './components/dash/Dgames';
import EditGame from './components/dash/EditGame';
import Checkout from './components/view/Checkout';
import GameDetails from './components/view/GameDetails';



const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
           
              <Switch>
                <AppRoute exact path="/" layout={ViewLayout} component={Games}/>
                <AppRoute exact path='/games/gameDetails/:id'  layout={ViewLayout} component={GameDetails}/>
                <AppRoute exact path='/games/checkout/:id'  layout={ViewLayout} component={Checkout}/>



                <AppRoute exact path="/dash" layout={DashLayout} component={Dgames} />
                <AppRoute exact path="/dash/addGame" layout={DashLayout} component={AddGame} />
                <AppRoute exact path="/dash/editGame/:_id" layout={DashLayout} component={EditGame} />

                {/* <AppRoute component={Games} layout={ViewLayout}/> */}
                
              </Switch>
            
            
          </div>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;