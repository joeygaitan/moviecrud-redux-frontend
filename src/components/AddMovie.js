import React, { Component } from 'react';
import { addMovie } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Header from './Header';

class AddMovie extends Component{
constructor(props){
  super(props)

  this.state = {
    title: "",
    director: "",
    years: 1900,
    rating: 0,
    picture_url: ""
  }
}

change = (event) =>{
  this.setState({
     [event.target.name] : event.target.value
  })
}

onSubmit = (event) => {
  event.preventDefault();
  this.props.addMovie(this.state)

  this.props.history.push('/')
}

  render(){
    return(
      <>
        <Header/>
        <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <form id="post-form" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input name ="title" type="text" className="form-control" value={this.state.title} onChange={this.change}></input>
                            </div>
                            <div className="form-group">
                            <label>Director</label>
                                <input name ="director" type="text" className="form-control" value={this.state.director} onChange={this.change}></input>
                            </div>
                            <div className="form-group">
                            <label>Year</label>
                                <input name ="years" type="number" className="form-control" value={this.state.years} onChange={this.change}></input>
                            </div>
                            <div className="form-group">
                            <label>Rating</label>
                            <select name ='rating' class="form-control" value={this.state.rating} onChange={this.change}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Picture URL</label>
                                <input name ="picture_url" type="text" className="form-control" value={this.state.picture_url} onChange={this.change}></input>
                            </div>
                            <button type="submit" className="btn btn-dark btn-large">Create New Movie Post</button>
                            <Link to='/'><button className="btn btn-dark btn-large" style={{marginLeft: "20px"}}> Cancel</button></Link>
                        </form>
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