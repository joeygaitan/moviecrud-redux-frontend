import React, { Component } from 'react';

class Header extends Component {

    render() { 
        return ( 
            <div>
                <div className="jumbotron">
                    <h1 align="center">Gait's Movie Rating</h1>
                    <p align='center'>Add your favorite movies, and give them a score out of 5</p>
                </div>
            </div>
         );
    }
}
 
export default Header;