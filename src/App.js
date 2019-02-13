import React, {Component} from 'react';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
  <BrowserRouter>
    <div>
      <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route path='/AddMovie' component={AddMovie}/> 
      <Route path='/:id' component={Movie}/>
      </Switch>
    </div>
</BrowserRouter>
    );
  }
}




export default App;