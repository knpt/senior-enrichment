import React from 'react';
import { connect } from 'react-redux';

function Navbar(props){
    return (
        <nav>
            <div className= "navbar-header">
            HI IM A NAVBAR FOR YOUR SKOOLS
       
            </div>
        </nav>
    )
}

const mapStateToProps = function(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Navbar)