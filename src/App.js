import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>  
          </Layout>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
