import React, { Component } from 'react';
import { getMovie, updateMovie} from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Header from './Header';


class Movie extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            editClicked: true,
            movie:{...props.movie}
        }
    }

    componentDidMount = () => {        
        this.props.getMovie(this.props.match.params.id)
    }

    static getDerivedStateFromProps = (props, state)=>{
        if(!state.movie.hasOwnProperty('title')){
        console.log("I am in here",props);

            return {...state, movie : props.movie}
        }
    }

    clicked = (e) => {
        this.setState({
           editClicked: !this.state.editClicked
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()

        this.props.updateMovie(this.state.movie, this.props.match.params.id, () => {
            this.props.history.push('/')
        })

       
    }

    handleChange = (e) => {
        const movie = {
            [e.target.name] : e.target.value
        }
        this.setState({
            movie: {...this.state.movie, ...movie}
        })
    }

    render(){
        
        return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card" style={{width: "18rem"}} align="center">
                            {this.state.editClicked ? 
                            <>
                            <img className="card-img-top img-thumbnail" src={this.props.movie.picture_url}/>
                            </>
                            : null }
                            <div className="card-body">
                               {this.state.editClicked ?
                               <>
                                <h3 className="card-text">{this.props.movie.title}</h3>
                                <h6 className="card-text">{this.props.movie.director}</h6>
                                <p className="card-text">{this.props.movie.years}</p>
                                <p className="card-text">{this.props.movie.rating}</p>
                                </>
                                : 
                                <>
                                    <form id="post-form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                        <label>Title: {this.props.movie.title}</label>
                                        <input name ="title" type="text" className="form-control" value={this.state.movie.title} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group">
                                        <label>Director: {this.props.movie.director}</label>
                                        <input name ="director" type="text" className="form-control" value={this.state.movie.director} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group">
                                        <label>Release Date: {this.props.movie.years}</label>
                                        <input name ="years" type="text" className="form-control" value={this.state.movie.years} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group">
                                        <label>Movie Rating : {this.props.movie.rating}</label>
                                        <select name ='rating' className="form-control" value={this.state.movie.rating} onChange={this.handleChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                        <label>Picture URL: {this.props.movie.picture_url}</label>
                                        <input name ="picture_url" type="text" className="form-control" value={this.state.movie.picture_url} onChange={this.handleChange}></input>
                                        </div>

                                        <button type="submit" className="btn btn-dark btn-large">Update Movie</button>
                                    </form>
                                </>
                               }
                            </div>
                            <div className="card-body">
                                <button className='btn btn-dark' onClick={this.clicked} style={{marginBottom:"5px"}}>Edit Movie</button>
                                <Link to='/'><button className="btn btn-dark">Go back to Movies</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.movies.selected
  })

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getMovie: getMovie, updateMovie: updateMovie
    }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Movie);