import React, { Component } from 'react';
import { getMovies, removeMovie} from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
class MovieList extends Component {
    componentDidMount = () => {
        this.props.getMovies()
    }

    removeMovie = (id) => {
      this.props.removeMovie(id)
    }

    render() { 
        return ( 
            <div>
              <Header/>
            <div className="container">
              <div className ="row justify-content-center">
                {this.props.movies.map((ele)=>{
                  return  (
                  <div className="col-12 col-md-6 col-lg-4 d-flex" style={{padding:"10px"}}>
                    <div className="card">
                    <img className="card-img-top img-thumbnail" style={{width: "100%",height:"40%"}} src={ele.picture_url} alt="Responsive image"/>
                      <div className="card-body" style={{paddingBottom:"5px"}}>
                          <h2 className="card-title">{ele.title}</h2>
                          <Link to = {`/${ele.id}`}><button className="btn btn-dark" style={{border:"-20px", marginRight:"30px",marginBottom:"5px"}}>View Movie</button></Link>
                          <button className="btn btn-dark" onClick={()=>{
                            this.removeMovie(ele.id)
                          }}>delete</button>
                      </div>
                    </div>
                  </div>
                )
                })}
              </div>
            <div className='row' style={{paddingTop: "20px"}}>
                <div className="col-sm-4">
                    <Link to='/AddMovie'><button className="btn btn-dark" style={{marginBottom:"50px"}}>Add Movie</button></Link>
                </div>
            </div>
            </div>
          </div>
         );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.all
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getMovies: getMovies, removeMovie: removeMovie
    }, dispatch)  
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)