import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    render() {
        return (
            <div className="container">
                <b>Home</b> - 
                <b>New Question</b> - 
                <b>Leader Board</b>
                
            </div>
        );
    }
}


export default connect()(Nav)