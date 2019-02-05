import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './components/Home'
import Movie from './components/Movie'
import { addTodo } from './actions/index';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:id' component={Movie}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
