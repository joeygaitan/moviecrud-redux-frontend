import React, { Component } from 'react';
import { addMovie } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Header from './Header';

class AddMovie extends Component{
  constructor(props){
    super(props);

    this.state = {
      header: "",
      desc: ""
  }
}

change = (event) =>{
  this.setState({
     [event.target.name] : event.target.value
  })
}

onSubmit = (event) => {
  event.preventDefault();
  this.props.add(this.state)

  this.props.history.push('/')
}

  render(){
    return(
      <>
        <Header/>
        <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card" style={{width: "18rem"}} align="center">
                            <img className="card-img-top" src={this.props.movie.picture_url}/>
                            <div className="card-body">                                <>
                                    <input type='text' name='title' value={this.state.movie.title} 
                                        onChange={this.handleChange}/>
                                    <button onClick={() => this.setState((state) => ({...state, editingTitle: !state.editingTitle}))}>Edit</button>
                                }
                        
                                <p className="card-text">{this.props.movie.director}</p>
                                <p className="card-text">{this.props.movie.years}</p>
                                <p className="card-text">{this.props.movie.rating}</p>
                            </div>
                            <div className="card-body">
                                <Link to='/'><button className="btn btn-dark">Go back to Movies</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.selected
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addMovie: addMovie
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);