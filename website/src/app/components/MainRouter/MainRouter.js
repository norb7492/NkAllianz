import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import Contact from './../../pages/Contact/Contact';

class MainRouter extends Component {
  render() {
    return (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
  </main>
    );
  }
}

export default MainRouter;
