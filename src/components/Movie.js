import React, { Component } from 'react';
import { getMovie, updateMovie} from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Header from './Header';


class Movie extends Component {
    componentDidMount = () => {        
        this.props.getMovie(this.props.match.params.id)
    }

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            editingTitle: false,
            movie:{}
        }
    }
    static getDerivedStateFromProps(props, state){
        return {...state, movie: { ...props.movie, ...state.movie }}

    }

    handleChange = (e) => {
        console.log(e.target.value)
        const movie = {
            ...this.state.movie,
            [e.target.name] : e.target.value
        }
        console.log(movie)
        this.setState({movie})
        console.log(this.props.updateMovie());
        
        this.props.updateMovie(movie ,this.props.match.params.id)
    }

    render(){
       console.log(this.state)
        return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card" style={{width: "18rem"}} align="center">
                            <img className="card-img-top" src={this.props.movie.picture_url}/>
                            <div className="card-body">
                                {!this.state.editingTitle ? 
                                <>
                                    <h5 className="card-title"
                                        onClick={() => this.setState((state) => ({...state, editingTitle: !state.editingTitle}))}>
                                    {this.state.movie.title}</h5>
                                </>
                                : 
                                <>
                                    <input type='text' name='title' value={this.state.movie.title} 
                                        onChange={this.handleChange}/>
                                    <button onClick={() => this.setState((state) => ({...state, editingTitle: !state.editingTitle}))}>Edit</button>
                                </>
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